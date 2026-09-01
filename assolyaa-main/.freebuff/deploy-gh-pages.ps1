$tempDir = "C:\Users\Бабах\Desktop\gh-pages-deploy"
if (Test-Path $tempDir) { Remove-Item $tempDir -Recurse -Force }
New-Item -ItemType Directory -Path $tempDir -Force | Out-Null
Set-Location $tempDir
git init
git checkout -b gh-pages
Copy-Item -Path "C:\Users\Бабах\Desktop\assolyaa-main\assolyaa-main\dist\*" -Destination $tempDir -Recurse -Force
git add -A
git commit -m "Deploy to GitHub Pages"
git remote add origin https://github.com/byntty/assolyaa-website.git
git push -f origin gh-pages
Write-Output "DONE"
