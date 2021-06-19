@echo off
cls
title SteamRecentActivityHours - Installing Packages
echo Installing packages, make sure you have node.js installed.
npm --version 1>NULL 2>&1
if %ERRORLEVEL% NEQ 0 (
echo You do not have npm installed on your system.
exit
) else goto next
:next
npm i steam-user
pause
exit
