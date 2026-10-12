@echo off
echo ============================================================
echo   24-Week Cybersecurity ^& SOC Interactive Master Manual
echo ============================================================
echo Starting local web server on http://localhost:8080 ...
echo Opening your web browser...

start http://localhost:8080
python -m http.server 8080
pause
