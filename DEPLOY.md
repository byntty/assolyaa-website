# Деплой и домен assolyaa.kz

Короткая памятка, чтобы не разбираться заново, если сайт «не открывается» или
показывает старую версию. Сайт живёт на GitHub Pages, проект — в `assolyaa-main/`.

## Как устроено

1. Пуш в ветку `mainchange`.
2. Workflow `.github/workflows/deploy-pages.yml`: `npm ci` → `npm run build` →
   в `dist` копируется `404.html` из `.github/pages-assets/` → артефакт уходит в Pages.
3. GitHub Pages публикует сайт на `https://assolyaa.kz/` (и редиректит
   `byntty.github.io/assolyaa-website/` на домен).

## Настройки, которые должны быть включены

**Settings → Pages:**

- Source: **GitHub Actions** (не «Deploy from a branch»).
- Custom domain: `assolyaa.kz` (без `https://` и без слэша на конце).
- **Enforce HTTPS** — включён. Пока он выключен, сайт открывается и по `http://`,
  а `http://www` редиректит на `http`, а не на `https`.

**DNS у регистратора (PS.KZ):**

| Запись | Тип | Значение |
| --- | --- | --- |
| `@` | A | `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` |
| `www` | CNAME | `byntty.github.io` |
| MX / TXT (SPF) | — | не трогать, это рабочая почта на PS.KZ |

## Правила в коде, которые нельзя ломать

- `base: "./"` в `vite.config.ts`. Сборка должна быть независимой от пути: один и
  тот же `dist` работает и на корне домена, и на `byntty.github.io/assolyaa-website/`.
  Если вернуть абсолютный `base` (`/assolyaa-website/`), на домене все ассеты
  отдадут 404.
- `assolyaa-main/public/CNAME` с содержимым `assolyaa.kz` — уезжает в каждый
  деплой и держит домен привязанным к сайту. Удалять нельзя.
- Роутинг хешевый (`/#/gallery`), поэтому прямых путей вроде `/gallery` на сервере
  нет: `.github/pages-assets/404.html` превращает такие ссылки в хеш-роуты.

## Частые поломки

| Симптом | Причина | Что делать |
| --- | --- | --- |
| Домен отдаёт страницу «Page not found» от GitHub | В артефакте не было `CNAME`, домен не привязан к деплою | Проверить `public/CNAME`, передеплоить |
| Сайт открылся, но пустой экран / 404 на `.js`, `.css` | В сборке абсолютный `base` | Вернуть `base: "./"` |
| Показывается старая версия сайта | Кэш браузера или старый сервис-воркер | Жёсткое обновление `Ctrl+Shift+R`, приватное окно |
| `https://www.assolyaa.kz` — ошибка сертификата | Сертификат выписан только на apex | Пересохранить Custom domain в настройках Pages, чтобы GitHub перевыпустил сертификат с `www` |
| `http://` открывается без редиректа | Выключен Enforce HTTPS | Включить Enforce HTTPS в Settings → Pages |
| Пуш отклонён (`non-fast-forward`) | В ветке появились чужие коммиты | `git fetch origin && git rebase origin/mainchange`, затем пуш |

## Быстрая проверка после деплоя

```bash
curl -sS -o /dev/null -w "apex https: %{http_code}\n" https://assolyaa.kz/
curl -sSI http://assolyaa.kz/ | grep -iE "^HTTP|^location"      # ждём 301 → https
curl -sSI http://www.assolyaa.kz/ | grep -iE "^HTTP|^location"   # ждём редирект на apex
curl -sS -o /dev/null -w "www https: %{http_code}\n" https://www.assolyaa.kz/
curl -sS https://assolyaa.kz/ | grep -o "<title>[^<]*"           # заголовок сайта
```

Сертификат домена:

```bash
echo | openssl s_client -servername assolyaa.kz -connect assolyaa.kz:443 2>/dev/null \
  | openssl x509 -noout -subject -dates -ext subjectAltName
```

В `Subject Alternative Name` должны быть и `assolyaa.kz`, и `www.assolyaa.kz`;
если второго нет — пересохранить Custom domain в настройках Pages.
