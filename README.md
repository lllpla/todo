# 基于github-api进行存储的任务列表

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### 功能
 - 轻量：纯静态vue页面，可部署在githubpages
 - 存储：利用github-api存储，不需要额外的数据库(初次使用需要配置token\user\repo)。
 - 外观：界面参考Googlekeep
 - 数据安全：所有配置数据仅保存在浏览器本地缓存不进行上传。任务数据只上传到自己配置的repo中去。

### 仍需开发的功能
 - 已完成/归档 列表的相关操作
 - 任务添加标签
 - 导出任务列表