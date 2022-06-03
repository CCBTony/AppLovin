# 简介
本项目是用于AppLovin公司前端工程师岗位招聘的笔试题。
[点击此处查看DEMO](https://ccbtony.github.io/AppLovin/dist/index.html)。

# 技术方案
```
语言：typescript
UI构建库：react
请求库：axios
状态管理：mobx
路由管理：react-router-dom
样式开发：styled-components
```

# 构建指令
## 安装依赖
`npm i`

## 启动本地开发环境
`npm run start:dev`

## 打包生产环境静态资源
`npm run build`

为了方便起见，日常开发时应开启保存时触发自动格式化的能力。
`pycharm`用户请下载`prettier`插件，并勾选相应选项。
`vscode`用户参见[《eslint + prettier + vscode 配置实现保存自动格式化》](https://juejin.cn/post/6844904194336358407) 。


# 重要目录结构
```
.husky: husky 脚本，用于部署git hooks相关逻辑
.storybook: storybook 配置
_tpl_: 模板代码
assets: 静态资源
config: 各种配置
dist: 生产环境构建输出
storybook-static: storybook 生产环境输出
src: 源码
    components: 组件
    pages: 页面
    models: 前端模型
    services: 接口封装
    types: interface定义
    utils：工具库
    app.tsx: 应用入口
    store.ts: 全局状态
    styles.tsx: 全局样式
index.ejs: index.html 模板
```

# 离线使用App
通过`service worker`实现离线使用能力，具体逻辑见`assets/js/serviceWorker.js`。

# 前端工程化
## 自动代码格式化
使用`prettier`对源码进行格式化，统一基本编码风格。

使用`npm run prettier`命令进行格式化。

部署了`husky`后，在`git commit`前会强制进行代码格式化。

主流开发工具基本都会提供`prettier`插件，以实现保存时自动格式化，提升开发体验。

## 代码静态检查
使用`tsc` 和 `eslint` 对`js/ts/tsx` 进行静态分析检查，避免低级错误。

使用`npm run tsc`进行`typescript`编译器检查。

使用`npm run eslint`进行基于`eslint`规则的分析检查。

部署了`husky`后，在`git push`前会强制进行`tsc` & `eslint`检查，出错则无法`push`。

## 前端组件管理
使用`storybook`对前端组件进行开发 & 管理。

使用`npm run storybook`开启本地开发服务器。

使用`npm run build-storybook`将`storybook`编译成静态文件，用于生产环境部署。
[点击此处查看DEMO](https://ccbtony.github.io/AppLovin/storybook-static/index.html)
