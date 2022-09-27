# template_wxapp
微信小程序通用性模板

# vant组件库 + less + Ts
 引入日志 + 图片裁剪组件 + 自定义导航栏 + 登录 + 上传文件

### 目录结构

```bash
├── miniprogram                  # 小程序代码
│   ├── components               # 封装组件
│   │   └── we-cropper           # 图片裁剪组件
│   ├── img                      # 本地图片资源
│   ├── miniprogram_npm          # node_modules 构建
│   ├── pages                    # 页面目录
│   │   ├── cropper              # 图片裁剪页面
│   │   └── index               # 首页面
│   ├── utils                    # 全局函数目录
│   ├── app.json                 # 应用配置
│   ├── app.less                 # 通用样式
│   ├── app.ts                   # 应用初始化
│   └── sitemap.json             # 微信索引配置
├── typings                      # 小程序类型声明
├── .eslintrc.js                 # eslint 配置项
├── .gitignore                   # gitignore 配置
├── package-lock.json            # package-lock.json
├── package.json                 # package.json
├── project.config.json          # 项目配置
├── project.private.config.json  # 项目私有配置
└── tsconfig.json                # tsconfig.json
```

### Build Setup
```
1、npm install 
2、微信开发者工具中，构建 npm 包
```
