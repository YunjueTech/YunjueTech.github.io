# 域名配置快速参考

## 🔄 切换到自定义域名后的配置更改

当你完成域名绑定后，需要更新以下配置：

### 1. 更新 `data/siteMetadata.js`

```javascript
siteUrl: 'https://yunjuetech.com', // 改为你的域名
```

### 2. 更新 `.github/workflows/deploy.yml`

找到第 45 行，将 `BASE_PATH` 改为：

```yaml
BASE_PATH: '' # 使用自定义域名时设置为空
```

或者：

```yaml
BASE_PATH: / # 或者设置为 /
```

### 3. 提交更改

```bash
git add .
git commit -m "Configure custom domain"
git push origin main
```

## 📋 配置对比

| 场景                  | BASE_PATH               | siteUrl                        |
| --------------------- | ----------------------- | ------------------------------ |
| GitHub Pages 默认域名 | `/YunjueTech.github.io` | `https://YunjueTech.github.io` |
| 自定义域名            | `''` 或 `'/'`           | `https://yunjuetech.com`       |

## ⚠️ 重要提示

- 使用自定义域名时，`BASE_PATH` **必须**设置为空字符串或 `/`
- 如果 `BASE_PATH` 不正确，会导致资源路径错误，样式和图片无法加载
- 更改配置后需要重新部署才能生效
