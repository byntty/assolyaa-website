$NodeDir = "C:\Users\BCA8~1\nodejs\node-v22.16.0-win-x64"
$env:PATH = "$NodeDir;" + $env:PATH
Set-Location "C:\Users\BCA8~1\Desktop\ASSOLY~1\assolyaa-main"
$npmPath = "$NodeDir\npm.cmd"
$logFile = "C:\Users\BCA8~1\Desktop\ASSOLY~1\assolyaa-main\.freebuff\preview-5b2ed7df-ddc1-4b76-b4ca-4562bdb23e29.log"
$errFile = "C:\Users\BCA8~1\Desktop\ASSOLY~1\assolyaa-main\.freebuff\preview-5b2ed7df-ddc1-4b76-b4ca-4562bdb23e29.log.err"
$proc = Start-Process -FilePath $npmPath -ArgumentList "run","dev" -RedirectStandardOutput $logFile -RedirectStandardError $errFile -WindowStyle Hidden -PassThru
Write-Output $proc.Id
