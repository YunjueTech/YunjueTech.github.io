# 自定义域名绑定指南（阿里云 + GitHub Pages）

## 📋 准备工作

在开始之前，请确认：
- ✅ 已在阿里云购买域名
- ✅ 域名已实名认证
- ✅ GitHub Pages 已成功部署

## 🔧 配置步骤

### 第一步：在 GitHub Pages 设置自定义域名

1. **进入仓库设置**
   - 访问你的 GitHub 仓库
   - 点击 **Settings** → **Pages**

2. **添加自定义域名**
   - 在 "Custom domain" 输入框中输入你的域名
   - 如果使用根域名（如 `yunjuetech.com`），直接输入
   - 如果使用子域名（如 `www.yunjuetech.com`），输入子域名
   - 点击 **Save**

3. **等待 DNS 检查**
   - GitHub 会检查 DNS 配置
   - 如果配置正确，会显示绿色勾号 ✅
   - 如果显示错误，需要先配置 DNS（见下一步）

### 第二步：在阿里云配置 DNS 解析

#### 方案 A：使用根域名（推荐）

如果你的域名是 `yunjuetech.com`，需要配置：

1. **登录阿里云控制台**
   - 进入 [阿里云域名控制台](https://dc.console.aliyun.com/)
   - 找到你的域名，点击 **解析**

2. **添加 A 记录**
   - 点击 **添加记录**
   - 记录类型：选择 **A**
   - 主机记录：输入 `@`（表示根域名）
   - 记录值：输入以下 GitHub Pages IP 地址（需要添加 4 条 A 记录）：
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - TTL：选择 **10分钟** 或默认值
   - 点击 **确认**

3. **添加 CNAME 记录（可选，用于 www 子域名）**
   - 记录类型：选择 **CNAME**
   - 主机记录：输入 `www`
   - 记录值：输入 `YunjueTech.github.io`（你的 GitHub 用户名.github.io）
   - TTL：选择 **10分钟**
   - 点击 **确认**

#### 方案 B：使用子域名（如 www.yunjuetech.com）

1. **添加 CNAME 记录**
   - 记录类型：选择 **CNAME**
   - 主机记录：输入 `www`（或其他子域名前缀）
   - 记录值：输入 `YunjueTech.github.io`（你的 GitHub 用户名.github.io）
   - TTL：选择 **10分钟**
   - 点击 **确认**

### 第三步：更新项目配置

#### 1. 更新 siteMetadata.js

将 `siteUrl` 更新为你的自定义域名：

```javascript
siteUrl: 'https://yunjuetech.com', // 或 'https://www.yunjuetech.com'
```

#### 2. 更新 GitHub Actions 工作流

如果使用自定义域名，`BASE_PATH` 应该设置为空或 `/`：

在 `.github/workflows/deploy.yml` 中：

```yaml
BASE_PATH: ''  # 使用自定义域名时，BASE_PATH 应该为空
```

或者：

```yaml
BASE_PATH: /  # 或者设置为 /
```

#### 3. 创建 CNAME 文件（如果使用子域名）

如果使用子域名（如 `www.yunjuetech.com`），需要在 `public/` 目录创建 `CNAME` 文件：

```bash
echo "www.yunjuetech.com" > public/CNAME
```

**注意**：如果使用根域名，GitHub 会自动处理，不需要手动创建 CNAME 文件。

### 第四步：等待 DNS 生效

1. **DNS 传播时间**
   - 通常需要 10 分钟到 24 小时
   - 可以使用 [DNS Checker](https://dnschecker.org/) 检查 DNS 是否已生效

2. **验证配置**
   - 在 GitHub Pages 设置中，应该看到绿色勾号 ✅
   - 访问你的域名，应该能看到网站

## 🔍 验证 DNS 配置

### 使用命令行检查

**Windows (PowerShell):**
```powershell
nslookup yunjuetech.com
```

**Mac/Linux:**
```bash
dig yunjuetech.com
```

### 使用在线工具

- [DNS Checker](https://dnschecker.org/)
- [What's My DNS](https://www.whatsmydns.net/)

## ⚠️ 重要注意事项

### 1. HTTPS 证书

- GitHub Pages 会自动为自定义域名提供 HTTPS 证书
- 证书由 Let's Encrypt 提供，通常需要几分钟到几小时生效
- 在 DNS 配置正确后，GitHub 会自动申请证书

### 2. BASE_PATH 配置

- **使用 GitHub Pages 默认域名**（如 `YunjueTech.github.io`）：
  - `BASE_PATH: /YunjueTech.github.io`
  
- **使用自定义域名**（如 `yunjuetech.com`）：
  - `BASE_PATH: ''` 或 `BASE_PATH: /`

### 3. 强制 HTTPS

在 GitHub Pages 设置中：
- ✅ 勾选 **Enforce HTTPS**
- 这会将所有 HTTP 请求重定向到 HTTPS

## 🐛 常见问题

### Q1: DNS 配置后仍然无法访问？

**检查清单：**
- [ ] DNS 记录是否正确添加
- [ ] 等待足够的时间（至少 10 分钟）
- [ ] 清除浏览器缓存
- [ ] 使用无痕模式访问
- [ ] 检查 GitHub Pages 设置中是否显示绿色勾号

### Q2: 显示 "DNS not configured" 错误？

- 确认 DNS 记录已正确添加
- 等待 DNS 传播（可能需要几小时）
- 检查记录值是否正确

### Q3: HTTPS 证书未生效？

- 等待 GitHub 自动申请证书（通常几分钟到几小时）
- 确认 DNS 配置正确
- 在 GitHub Pages 设置中检查证书状态

### Q4: 网站可以访问但样式/图片不显示？

- 检查 `BASE_PATH` 是否正确设置
- 确认所有资源路径使用相对路径或包含正确的 BASE_PATH

## 📝 配置示例

### 示例 1：使用根域名 `yunjuetech.com`

**阿里云 DNS 配置：**
```
类型: A
主机记录: @
记录值: 185.199.108.153
（重复添加 4 条 A 记录，使用不同的 IP）

类型: CNAME
主机记录: www
记录值: YunjueTech.github.io
```

**项目配置：**
- `siteUrl: 'https://yunjuetech.com'`
- `BASE_PATH: ''`

### 示例 2：使用子域名 `www.yunjuetech.com`

**阿里云 DNS 配置：**
```
类型: CNAME
主机记录: www
记录值: YunjueTech.github.io
```

**项目配置：**
- `siteUrl: 'https://www.yunjuetech.com'`
- `BASE_PATH: ''`
- 创建 `public/CNAME` 文件，内容：`www.yunjuetech.com`

## ✅ 完成检查清单

配置完成后，确认：
- [ ] GitHub Pages 设置中显示自定义域名
- [ ] DNS 记录已正确配置
- [ ] `siteMetadata.js` 中的 `siteUrl` 已更新
- [ ] GitHub Actions 工作流中的 `BASE_PATH` 已更新
- [ ] 域名可以正常访问
- [ ] HTTPS 证书已生效
- [ ] 所有页面和资源正常加载
