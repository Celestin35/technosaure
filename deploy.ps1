param(
  [string]$Message = "deploy"
)

# Usage: .\deploy.ps1 "message de commit"

$ErrorActionPreference = "Stop"
$status = git status --porcelain
if ($status) {
  git add -A
  git commit -m $Message
} else {
  Write-Host "No changes to commit."
}

git push

if (-not $env:GIT_FTP_PASSWORD) {
  if (Test-Path ".env") {
    Get-Content ".env" | ForEach-Object {
      $line = $_.Trim()
      if ($line -and -not $line.StartsWith("#") -and $line.Contains("=")) {
        $parts = $line.Split("=", 2)
        $key = $parts[0].Trim()
        $value = $parts[1].Trim().Trim('"')
        if ($key -and $value -and -not (Test-Path "env:$key")) {
          Set-Item -Path "env:$key" -Value $value
        }
      }
    }
  }
}

if (-not $env:GIT_FTP_PASSWORD) {
  $secure = Read-Host "FTP password" -AsSecureString
  $bstr = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($secure)
  try {
    $env:GIT_FTP_PASSWORD = [Runtime.InteropServices.Marshal]::PtrToStringBSTR($bstr)
  } finally {
    [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($bstr)
  }
}

git ftp push
