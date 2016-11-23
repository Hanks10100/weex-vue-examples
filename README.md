# Weex Vue Demo

A simple example for using Weex and Vue 2.0.

+ [master 分支](http://gitlab.alibaba-inc.com/hanks.zh/weex-vue-demo/tree/master): 最基本的使用 Weex 和 Vue 的例子。
+ [vue-render 分支](http://gitlab.alibaba-inc.com/hanks.zh/weex-vue-demo/tree/vue-render): 同时支持在移动端和浏览器中运行的例子。详情参考其 README。

## 运行方法

首先克隆项目并安装依赖。然后：

+ `npm run build`: 编译项目，生成代码的在 `dist/vue-bundle.js`。
+ `npm run serve`: 启动项目，会监听本地 8080 端口。

打开 `http://localhost:8080/index.html`，即可预览页面。

如果要开发项目，可以：

+ `npm run dev`: 监听 src 目录中的文件变化并自动编译。
