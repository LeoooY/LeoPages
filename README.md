

# leopages
- [Preview](https://leoooy.github.io/LeoPages/#/)
## 资源
- [Creating and Updating GitHub Pages](https://bytefish.de/blog/github_pages/)

- [Element](http://element-cn.eleme.io/#/zh-CN/component/layout)

## 部署到 GithubPages
0 build 

(更新部署先删除GitHub上gh-pages分支)
git add dist && git commit -m "Initial dist subtree commit"
git subtree push --prefix dist origin gh-pages

（若不存在gh-pages分支，创建gh-pages分支）



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

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```
## 踩坑记录
- el-col元素上获取不到事件，需要在内嵌元素内获取事件
- 使用Prop传递v-if的flag情况下，trasition会出现异常，所以慎重考虑trasition状态的props传递