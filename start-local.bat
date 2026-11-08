@echo off
cd /d "%~dp0"
where node >nul 2>nul || (echo Node.js is not installed. Get the LTS version from https://nodejs.org and run this again. & pause & exit /b 1)
if not exist node_modules (
  echo Installing dependencies, first run only...
  call npx -y pnpm@10 install
)
echo Starting dev server at http://localhost:8443
start "" http://localhost:8443
call npx -y pnpm@10 run dev
pause
