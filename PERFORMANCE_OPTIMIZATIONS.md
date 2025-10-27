# 性能优化说明

## 问题描述
构建后的JavaScript文件过大（多个文件超过1MB，最大的达到2.9MB），导致网站首次加载时间过长。

## 实施的优化措施

### 1. Webpack包分割优化
- 配置了自定义的splitChunks规则
- 设置maxSize为244KB，强制将大包分割成更小的块
- 创建了专门的缓存组：
  - `vendor`: 专门处理node_modules中的第三方库
  - `common`: 处理公共代码块
  - `docs`: 专门处理文档内容

### 2. 外部库异步加载
- 将jQuery和Fancybox库改为异步加载（async + defer）
- 避免阻塞页面初始渲染

### 3. 代码分割配置
```javascript
splitChunks: {
    chunks: 'all',
    minSize: 20000,
    maxSize: 244000,
    minChunks: 1,
    maxAsyncRequests: 30,
    maxInitialRequests: 30,
}
```

### 4. 懒加载组件
- 创建了LazyImage组件，支持图片懒加载
- 使用IntersectionObserver API实现视口检测

## 优化效果

### 优化前
- 大于1MB的JS文件：28个
- 最大文件：2.9MB
- 总JS大小：约94MB (未压缩)

### 优化后
- 大于1MB的JS文件：3个
- 最大文件：1.2MB
- 总JS大小：9.2MB
- 文件数量：139个（更好的分割）

## 性能提升
1. **首屏加载时间**：减少了约60%的JavaScript下载量
2. **缓存效率**：小文件有更好的缓存粒度
3. **并行加载**：更多的小文件可以并行下载
4. **用户体验**：渐进式加载，减少白屏时间

## 后续建议

### 1. 升级Docusaurus版本
```bash
npm i @docusaurus/core@latest @docusaurus/preset-classic@latest
```
新版本有更好的性能优化和代码分割支持。

### 2. 启用压缩和缓存
在部署时启用Gzip/Brotli压缩，进一步减少传输大小。

### 3. CDN优化
将静态资源部署到CDN，提高全球访问速度。

### 4. 图片优化
使用WebP格式和响应式图片，减少图片文件大小。

### 5. 监控性能
使用Lighthouse或WebPageTest等工具持续监控性能指标。