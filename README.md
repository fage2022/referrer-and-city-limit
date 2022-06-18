# 限制器

境外和北京打开（不管从哪里进来），全部停留在404，不跳转
国内（除了搜狗和百度进来的以外），也停留在404，不跳转
国内搜狗和百度进来的，提示404然后跳转

无论任何方式打开，页面都先显示404错误，
然后判断如果是国内（北京除外）并且是百度和搜狗进来的，则跳转到指定网址


# js链接

``` javascript

https://cdn.jsdelivr.net/gh/fage2022/referrer-and-city-limit@v0.1/check-user-from.js

```

## 相关资料：

http://ip.bczs.net/106.55.253.9

https://zhuanlan.zhihu.com/p/421830041

https://cloud.tencent.com/developer/article/1481311

测试工具

https://www.ssllabs.com/ssltest/index.html

http://s.tool.chinaz.com/https?url=

通过 jsDelivr + Github 实现免费 CDN (静态资源)加速

https://www.jianshu.com/p/d4e65d956543