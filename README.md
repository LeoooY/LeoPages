# leopages

## 资源
- [Creating and Updating GitHub Pages](https://bytefish.de/blog/github_pages/)

- [Element](http://element-cn.eleme.io/#/zh-CN/component/layout)

## 部署到 GithubPages

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
