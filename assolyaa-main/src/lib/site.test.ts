import assert from "node:assert/strict";
import { test } from "node:test";

import {
  mailtoLink,
  STUDIO_EMAIL,
  STUDIO_WHATSAPP,
  whatsappLink,
} from "./site.ts";

/**
 * Contract for how the site reaches the studio.
 *
 * Every "write to us" affordance on the site goes through these helpers, so
 * the tests below assert what the visitor and the studio actually get — the
 * contact the link reaches and the text it hands over — rather than how the
 * link strings happen to be assembled.
 */

test("the site publishes the studio's WhatsApp number", () => {
  assert.equal(STUDIO_WHATSAPP, "77770011686");
});

test("the site publishes the studio's inbox address", () => {
  assert.equal(STUDIO_EMAIL, "nurdaulet.bekzhan@gmail.com");
});

test("a WhatsApp link opens the studio's chat", () => {
  const link = new URL(whatsappLink("Здравствуйте"));
  const destination = `${link.origin}${link.pathname}`;

  assert.equal(destination, `https://wa.me/${STUDIO_WHATSAPP}`);
});

test("a WhatsApp link carries the visitor's message unchanged", () => {
  const message =
    "Здравствуйте! Хочу записаться на «Обучение» + узнать цену #1 & есть ли места?";

  const link = new URL(whatsappLink(message));

  assert.equal(link.searchParams.get("text"), message);
});

test("an email link opens the studio's inbox", () => {
  const link = new URL(mailtoLink("Тема", "Тело"));
  const destination = `${link.protocol}${link.pathname}`;

  assert.equal(destination, `mailto:${STUDIO_EMAIL}`);
});

test("an email link carries the visitor's subject unchanged", () => {
  const subject = "Сотрудничество & реклама — 2026";

  const link = new URL(mailtoLink(subject, "Тело"));

  assert.equal(link.searchParams.get("subject"), subject);
});

test("an email link carries a multi-line message unchanged", () => {
  const body = "Здравствуйте!\nМеня зовут Анна.\n\nИнтересует сотрудничество.";

  const link = new URL(mailtoLink("Тема", body));

  assert.equal(link.searchParams.get("body"), body);
});
