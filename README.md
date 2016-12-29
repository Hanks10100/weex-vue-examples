# Weex Vue Demo

A simple example for using Weex and Vue 2.0.

本例子可以在内置了最新版 Weex SDK 的移动端中运行；也可以不依赖 Weex，仅使用 Vue 2.0 在浏览器中运行。

## 运行方法

首先并安装依赖。然后：

+ `npm run build`: 编译项目。
  + 生成 `dist/vue-bundle.weex.js`，可以在移动端中运行。
  + 生成 `dist/vue-bundle.web.js`，可以在浏览器中运行。
+ `npm run serve`: 启动项目，会监听本地 8080 端口。
  + 打开 `http://localhost:8080/index.html` 可以预览浏览器中的页面（仅依赖 Vue 2.0 运行）。

如果要开发项目，可以：

+ `npm run dev:weex`: 监听 src 目录中的文件变化，并自动编译 `dist/vue-bundle.weex.js`。
+ `npm run dev:web`: 监听 src 目录中的文件变化，并自动编译 `dist/vue-bundle.web.js`。
