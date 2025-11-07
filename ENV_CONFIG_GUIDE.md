# 环境配置指南

## 问题背景

之前 `includeCurrentVersion` 配置项需要在开发和生产环境手动修改，容易忘记导致部署错误。

## 解决方案

现在系统已经配置为根据环境自动设置 `includeCurrentVersion` 的值。

## 工作原理

1. **自动检测**：系统会根据 `NODE_ENV` 环境变量自动判断：
   - `development` 环境：`includeCurrentVersion = true`
   - `production` 环境：`includeCurrentVersion = false`

2. **手动覆盖**：可以通过 `INCLUDE_CURRENT_VERSION` 环境变量手动设置

## 使用方法

### 开发环境

```bash
# 方式1：使用默认配置（自动设置为 true）
yarn start

# 方式2：明确指定为开发环境
yarn start:dev

# 方式3：使用环境变量
INCLUDE_CURRENT_VERSION=true yarn start
```

### 生产环境

```bash
# 方式1：生产构建（自动设置为 false）
yarn build:prod

# 方式2：部署到 GitHub Pages（自动设置为 false）
yarn deploy

# 方式3：使用环境变量
INCLUDE_CURRENT_VERSION=false yarn build
```

### 使用 .env 文件（可选）

如果需要持久化配置，可以创建 `.env` 文件：

```bash
# 复制示例文件
cp .env.example .env

# 编辑 .env 文件设置你需要的值
# INCLUDE_CURRENT_VERSION=true  # 开发环境
# INCLUDE_CURRENT_VERSION=false # 生产环境
```

注意：`.env` 文件已添加到 `.gitignore`，不会被提交到代码仓库。

## 脚本说明

| 命令 | 说明 | includeCurrentVersion |
|------|------|----------------------|
| `yarn start` | 启动开发服务器（默认） | 自动设置为 true |
| `yarn start:dev` | 启动开发服务器（明确开发环境） | true |
| `yarn start:prod` | 启动开发服务器（生产环境预览） | false |
| `yarn build` | 构建项目（默认） | 根据 NODE_ENV 判断 |
| `yarn build:dev` | 构建项目（开发版本） | true |
| `yarn build:prod` | 构建项目（生产版本） | false |
| `yarn deploy` | 部署到 GitHub Pages | false |
| `yarn serve:prod` | 本地预览生产版本 | false |

## 验证配置

运行任何命令时，控制台会输出当前配置：
```
[Docusaurus Config] Environment: development, Include Current Version: true
```

## 优势

1. **零手动操作**：不需要再手动修改配置文件
2. **环境隔离**：开发和生产环境自动使用正确的配置
3. **防止错误**：避免因忘记修改配置导致的部署问题
4. **灵活性**：仍然可以通过环境变量手动覆盖配置

## 注意事项

- Windows 用户需要使用 `cross-env` 包来设置环境变量，或使用 PowerShell：
  ```powershell
  $env:INCLUDE_CURRENT_VERSION="false"; yarn build
  ```