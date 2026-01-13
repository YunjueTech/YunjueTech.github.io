# GitHub Pages 部署指南

## 前置要求

1. GitHub 仓库名称必须是 `YunjueTech.github.io`（与 siteMetadata.js 中的配置一致）
2. 确保仓库是公开的（Public）
3. 确保有仓库的写入权限

## 部署步骤

### 方法一：使用 GitHub Actions（推荐）

1. **启用 GitHub Pages**
   - 进入仓库 Settings → Pages
   - Source 选择 "GitHub Actions"

2. **推送代码到 main 分支**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **自动部署**
   - GitHub Actions 会自动构建并部署
   - 构建完成后，网站将在 `https://YunjueTech.github.io` 可用
   - 可以在 Actions 标签页查看构建状态

### 方法二：手动部署

如果需要手动部署：

```bash
# 1. 安装依赖
yarn install

# 2. 构建静态站点
BASE_PATH=/YunjueTech.github.io EXPORT=true UNOPTIMIZED=true yarn build

# 3. 切换到 gh-pages 分支（如果存在）
git checkout -b gh-pages

# 4. 复制 out 目录内容到根目录
cp -r out/* .

# 5. 提交并推送
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages
```

## 重要配置说明

### BASE_PATH 环境变量

- **开发环境**：不需要设置 BASE_PATH
- **生产环境（GitHub Pages）**：必须设置为 `/YunjueTech.github.io`

### 构建环境变量

- `EXPORT=true`：启用静态导出
- `UNOPTIMIZED=true`：禁用图片优化（GitHub Pages 不支持 Next.js 图片优化）
- `BASE_PATH=/YunjueTech.github.io`：设置基础路径

## 常见问题

### 1. 图片不显示
- 确保图片路径使用 `/static/images/...` 格式
- 检查 BASE_PATH 是否正确设置

### 2. 路由 404
- 确保 `trailingSlash: false` 在 next.config.js 中
- 检查所有链接是否使用相对路径或包含 BASE_PATH

### 3. 样式不加载
- 确保 `.nojekyll` 文件存在于 `public/` 目录
- 检查构建输出是否包含所有 CSS 文件

## 验证部署

部署完成后，访问以下 URL 验证：
- 主页：https://YunjueTech.github.io
- 博客：https://YunjueTech.github.io/blog
- 产品：https://YunjueTech.github.io/products
- 加入我们：https://YunjueTech.github.io/joinus

## 更新内容

每次更新内容后：
1. 提交更改到 main 分支
2. GitHub Actions 会自动重新构建和部署
3. 等待几分钟后刷新网站查看更新
