@echo off
chcp 65001 >nul
echo ========================================
echo    一键修复和部署脚本
echo ========================================
echo.

echo [1/5] 删除旧的依赖...
if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del /f /q package-lock.json

echo.
echo [2/5] 重新安装依赖（React 18）...
call npm install
if %errorlevel% neq 0 (
    echo [错误] 安装依赖失败
    pause
    exit /b 1
)

echo.
echo [3/5] 构建项目...
call npm run build
if %errorlevel% neq 0 (
    echo [错误] 构建失败
    pause
    exit /b 1
)

echo.
echo [4/5] 提交更改...
git add .
git commit -m "降级到 React 18 稳定版本"
if %errorlevel% neq 0 (
    echo [警告] 没有需要提交的更改
)

echo.
echo [5/5] 推送到 GitHub...
git push origin main
if %errorlevel% neq 0 (
    echo [错误] 推送失败
    pause
    exit /b 1
)

echo.
echo ========================================
echo    ✅ 修复完成！
echo ========================================
echo.
echo 网站将在 1-2 分钟内自动部署。
echo 请访问 Vercel 或 Render.com 查看部署状态。
echo.
pause
