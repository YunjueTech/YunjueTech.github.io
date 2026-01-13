# GitHub Pages 部署检查清单

## 部署前检查

### 1. 仓库配置
- [ ] 确认仓库名称（例如：`YunjueTech.github.io` 或 `yunjuetech.github.io`）
- [ ] 确认仓库是公开的（Public）
- [ ] 确认有仓库的写入权限

### 2. 配置文件检查
- [ ] `data/siteMetadata.js` 中的 `siteUrl` 与仓库名称匹配
- [ ] `.github/workflows/deploy.yml` 中的 `BASE_PATH` 与仓库名称匹配
- [ ] `public/.nojekyll` 文件存在（已创建）

### 3. 代码检查
- [ ] 所有硬编码的 localhost 路径已移除
- [ ] 所有图片路径使用 `/static/images/...` 格式
- [ ] 所有链接使用相对路径或包含 BASE_PATH

### 4. 构建测试
在本地测试构建：
```bash
BASE_PATH=/YunjueTech.github.io EXPORT=true UNOPTIMIZED=true yarn build
```
- [ ] 构建成功，没有错误
- [ ] `out/` 目录已生成
- [ ] 检查 `out/index.html` 是否存在

## 部署步骤

### 第一次部署

1. **初始化 Git 仓库（如果还没有）**
   ```bash
   git init
   git remote add origin https://github.com/YunjueTech/YunjueTech.github.io.git
   ```

2. **提交所有文件**
   ```bash
   git add .
   git commit -m "Initial commit: Ready for GitHub Pages deployment"
   git branch -M main
   git push -u origin main
   ```

3. **启用 GitHub Pages**
   - 进入仓库：https://github.com/YunjueTech/YunjueTech.github.io
   - 点击 Settings → Pages
   - Source 选择 "GitHub Actions"
   - 保存设置

4. **等待自动部署**
   - 进入 Actions 标签页
   - 查看 "Deploy to GitHub Pages" 工作流
   - 等待构建完成（通常 3-5 分钟）

5. **验证部署**
   - 访问 https://YunjueTech.github.io
   - 检查所有页面是否正常加载
   - 检查图片和样式是否正确

### 后续更新

每次更新内容后：
```bash
git add .
git commit -m "Update content"
git push origin main
```

GitHub Actions 会自动重新构建和部署。

## 常见问题排查

### 问题 1: 404 错误
- 检查 BASE_PATH 是否正确
- 检查 next.config.js 中的 trailingSlash 设置
- 确保所有路由都是静态生成的

### 问题 2: 样式不加载
- 确认 `public/.nojekyll` 文件存在
- 检查 CSS 文件路径是否正确

### 问题 3: 图片不显示
- 确认图片在 `public/static/images/` 目录
- 检查图片路径是否包含 BASE_PATH

### 问题 4: 构建失败
- 检查 GitHub Actions 日志
- 确认所有依赖都已安装
- 检查 Node.js 版本（需要 20+）

## 重要提示

1. **BASE_PATH 必须与仓库名称匹配**
   - 如果仓库名是 `YunjueTech.github.io`，BASE_PATH = `/YunjueTech.github.io`
   - 如果仓库名是 `yunjuetech.github.io`，BASE_PATH = `/yunjuetech.github.io`

2. **不要手动修改 `out/` 目录**
   - `out/` 目录由构建过程自动生成
   - 不要提交 `out/` 到 main 分支（已在 .gitignore 中配置）

3. **环境变量**
   - 开发环境：不需要设置环境变量
   - 生产环境：必须设置 `EXPORT=true` 和 `BASE_PATH`

4. **首次部署可能需要 10-15 分钟**
   - GitHub Pages 需要一些时间来激活
   - 如果 15 分钟后仍无法访问，检查仓库设置
