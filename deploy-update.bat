@echo off
echo ========================================
echo    网站内容更新和部署脚本
echo ========================================
echo.

if not exist "site-data.json" (
    echo [错误] 找不到 site-data.json 文件
    echo.
    echo 请先在管理后台点击"导出配置"按钮，下载配置文件，
    echo 然后将文件放在项目根目录下。
    echo.
    pause
    exit /b 1
)

echo [1/4] 更新网站内容...
node update-content.mjs
if %errorlevel% neq 0 (
    echo [错误] 更新内容失败
    pause
    exit /b 1
)

echo.
echo [2/4] 构建项目...
call npm run build
if %errorlevel% neq 0 (
    echo [错误] 构建失败
    pause
    exit /b 1
)

echo.
echo [3/4] 提交更改到 Git...
git add .
git commit -m "更新网站内容 - %date% %time%"
if %errorlevel% neq 0 (
    echo [警告] 没有需要提交的更改
)

echo.
echo [4/4] 推送到远程仓库...
git push
if %errorlevel% neq 0 (
    echo [错误] 推送失败，请检查网络连接
    pause
    exit /b 1
)

echo.
echo ========================================
echo    ✅ 部署成功！
echo ========================================
echo.
echo 网站将在 1-2 分钟内自动更新。
echo.
pause
