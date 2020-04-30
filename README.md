# 基于github-api进行存储的任务列表

## 项目安装
```
npm install
```

### 开发模式启动
```
npm run serve
```

### 编译
```
npm run build
```
## 说明
 ### 主要框架
 [quasar](https://quasar.dev/)
 [vue](https://cn.vuejs.org/)
 ### 当前功能
 - 轻量：纯静态vue页面，可部署在githubpages
 - 存储：利用github-api存储，不需要额外的数据库(初次使用需要配置token\user\repo)。
 - 外观：界面参考Googlekeep
 - 数据安全：所有配置数据仅保存在浏览器本地缓存不进行上传。任务数据只上传到自己配置的repo中去。

### 仍需开发的功能
 - 已完成/归档 列表的相关操作
 - 任务添加标签
 - 导出任务列表

## 部署到githubPages
### 申请githubPages
![title](https://raw.githubusercontent.com/lllpla/img/master/gitnote/2020/04/30/1588233633981-1588233634021.png)
1. 新建一个github public项目。
2. 选择开启pages服务。
3. source里面选择 /docs 文件夹。（项目每次打包后保存在docs文件夹内）
4. 检查vue.config.js配置。
```javascript
module.exports = {
  publicPath: "/todo",
  outputDir: "docs",
  pluginOptions: {
    quasar: {
      importStrategy: "kebab",
      rtlSupport: false
    }
  },
  transpileDependencies: ["quasar"]
};

```
publicPath要指定为你pages服务的相对路径，例如：
![title](https://raw.githubusercontent.com/lllpla/img/master/gitnote/2020/04/30/1588233893441-1588233893443.png)

### 申请githubToken
1. 申请githubToken--> https://github.com/settings/tokens，只需要repo权限
![title](https://raw.githubusercontent.com/lllpla/img/master/gitnote/2020/04/30/1588234026213-1588234026215.png)
2. 新建一个private项目。
3. 打开todoList页面 配置到设置中去。