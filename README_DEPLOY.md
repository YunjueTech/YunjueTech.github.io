# 项目部署总结

## ✅ 已完成的配置

### 1. GitHub Actions 工作流
- ✅ 创建了 `.github/workflows/deploy.yml`
- ✅ 配置了自动构建和部署流程
- ✅ 设置了正确的环境变量（BASE_PATH, EXPORT, UNOPTIMIZED）

### 2. 必要文件
- ✅ 创建了 `public/.nojekyll`（防止 Jekyll 处理）
- ✅ 更新了 `.gitignore`（注释掉 /out/ 以便部署）

### 3. 配置文件检查
- ✅ `next.config.js` 支持 BASE_PATH 和静态导出
- ✅ `data/siteMetadata.js` 中的 siteUrl 已配置
- ✅ 所有路径都使用环境变量 BASE_PATH

## ⚠️ 部署前必须检查的事项

### 1. 仓库名称匹配
**重要**：请确认你的 GitHub 仓库名称，并确保以下配置一致：

- **仓库名称**：`YunjueTech.github.io` 或 `yunjuetech.github.io`
- **BASE_PATH**（在 `.github/workflows/deploy.yml` 中）：必须与仓库名称完全匹配
- **siteUrl**（在 `data/siteMetadata.js` 中）：`https://[仓库名]`

### 2. 需要手动修改的地方

#### 如果仓库名是小写 `yunjuetech.github.io`：
1. 修改 `.github/workflows/deploy.yml` 第 44 行：
   ```yaml
   BASE_PATH: /yunjuetech.github.io
   ```

2. 修改 `data/siteMetadata.js` 第 9 行：
   ```javascript
   siteUrl: 'https://yunjuetech.github.io',
   ```

#### 如果仓库名是大写 `YunjueTech.github.io`：
- 当前配置已正确，无需修改

## 🚀 部署步骤

### 第一次部署

1. **推送代码到 GitHub**
   ```bash
   git add .
   git commit -m "Initial commit: Ready for GitHub Pages"
   git push origin main
   ```

2. **启用 GitHub Pages**
   - 进入仓库 Settings → Pages
   - Source 选择 "GitHub Actions"
   - 保存

3. **等待自动部署**
   - 查看 Actions 标签页
   - 等待 "Deploy to GitHub Pages" 完成
   - 通常需要 3-5 分钟

4. **访问网站**
   - 首次部署可能需要 10-15 分钟才能访问
   - URL: `https://[你的仓库名]`

### 后续更新

每次更新后只需：
```bash
git add .
git commit -m "Update content"
git push origin main
```

GitHub Actions 会自动重新部署。

## 📋 检查清单

部署前请确认：
- [ ] 仓库名称已确认
- [ ] BASE_PATH 与仓库名称匹配
- [ ] siteUrl 与仓库名称匹配
- [ ] 仓库是公开的（Public）
- [ ] 有仓库的写入权限
- [ ] GitHub Pages 已启用（Source: GitHub Actions）

## 🔍 验证部署

部署成功后，检查以下页面：
- ✅ 主页：`https://[仓库名]/`
- ✅ 博客：`https://[仓库名]/blog`
- ✅ 产品：`https://[仓库名]/products`
- ✅ 加入我们：`https://[仓库名]/joinus`

## ❓ 常见问题

### Q: 部署后显示 404？
A: 检查 BASE_PATH 是否与仓库名称完全匹配（区分大小写）

### Q: 样式不加载？
A: 确认 `public/.nojekyll` 文件存在

### Q: 图片不显示？
A: 检查图片路径，确保使用 `/static/images/...` 格式

### Q: 构建失败？
A: 查看 GitHub Actions 日志，检查错误信息

## 📝 注意事项

1. **不要手动修改 `out/` 目录**
   - 这个目录由构建过程自动生成
   - 不要提交到 Git

2. **BASE_PATH 区分大小写**
   - 必须与 GitHub 仓库名称完全匹配

3. **首次部署需要时间**
   - GitHub Pages 激活可能需要 10-15 分钟
   - 请耐心等待

4. **环境变量**
   - 开发环境：不需要设置
   - 生产环境：GitHub Actions 会自动设置
