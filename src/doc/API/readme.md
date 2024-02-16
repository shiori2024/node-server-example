---
title: API
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
code_clipboard: true
highlight_theme: darkula
headingLevel: 2
generator: "@tarslib/widdershins v4.0.20"

---

# API

Base URLs:

* <a href="http://localhost:3000">开发环境: http://localhost:3000</a>

# Authentication

# 面经接口

## GET 获取所有文章

GET /api/interview

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### Responses Data Schema

## POST 创建新文章

POST /api/interview

> Body Parameters

```json
{
  "title": "string",
  "content": "string",
  "nickname": "string",
  "fromLink": "string"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» title|body|string| yes |none|
|» content|body|string| yes |none|
|» nickname|body|string| yes |none|
|» fromLink|body|string| no |转载地址|

> Response Examples

> 成功

```json
{
  "status": "success",
  "message": "面经发布成功！",
  "data": {
    "id": "e327a1ab-3180-446b-ab1b-0f46a1ab66ea",
    "visits": 0,
    "title": "前端面试高频题，八股文精华篇-浏览器和协议",
    "nickname": "前端_刘师兄",
    "fromLink": "https://juejin.cn/post/7023285223508934663",
    "updatedAt": "2024-02-16T15:00:09.202Z",
    "createdAt": "2024-02-16T15:00:09.202Z"
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|成功|Inline|

### Responses Data Schema

## GET 根据ID查找文章

GET /api/interview/{id}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|

> Response Examples

> 成功

```json
{
  "status": "success",
  "message": "面经库信息查询成功！",
  "data": {
    "id": "6c22031c-4d9a-421b-82e7-f4a989f2d905",
    "title": "var、let、const之间的区别",
    "nickname": "阮一峰",
    "content": "一、var\n在ES5中，顶层对象的属性和全局变量是等价的，用var声明的变量既是全局变量，也是顶层变量\n注意：顶层对象，在浏览器环境指的是window对象，在 Node 指的是global对象\n二、let\nlet是ES6新增的命令，用来声明变量\n用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效\n三、const\nconst声明一个只读的常量，一旦声明，常量的值就不能改变\n四、区别\nvar、let、const三者区别：\n变量提升\nvar声明的变量存在变量提升，即变量可以在声明之前调用，值为undefined\nlet和const不存在变量提升，即它们所声明的变量一定要在声明后使用，否则报错\n暂时性死区\nvar不存在暂时性死区\nlet和const存在暂时性死区，只有等到声明变量的那一行代码出现，才可以获取和使用该变量\n块级作用域\nlet和const存在块级作用域\n重复声明\nvar允许重复声明变量\nlet和const在同一作用域不允许重复声明变量\n修改声明的变量\nvar和let可以\nconst声明一个只读的常量。一旦声明，常量的值就不能改变\n使用\n能用const的情况尽量使用const，其他情况下大多数使用let，避免使用var",
    "like": 0,
    "visits": 0,
    "fromLink": "https://es6.ruanyifeng.com/",
    "createdAt": "2024-02-16T15:29:45.000Z",
    "updatedAt": "2024-02-16T15:29:45.000Z"
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### Responses Data Schema

## PUT 更新指定ID的文章

PUT /api/interview/{id}

> Body Parameters

```json
{
  "content": "从输入url到展示页面加载的过程\n通过DNS解析获得网址的对应IP地址浏览器与远程web服务器,通过TCP三次握手协商来建立一个 TCP / IP 连接浏览器 通过TCP / IP连接 向web服务器 发送一个 HTTP 请求服务器的永久重定向响应\n浏览器跟踪重定向地址\n服务器处理请求\n服务器返回一个 HTTP 响应\n浏览器渲染: 解析HTML、解析CSS、解析JS、Render树",
  "title": "前端面试高频题，八股文精华篇-1.浏览器和协议"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|body|body|object| no |none|
|» content|body|string| yes |none|
|» title|body|string| no |none|
|» nickname|body|string| no |none|

> Response Examples

> 成功

```json
{
  "status": "success",
  "message": "面经更新成功！"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|202|[Accepted](https://tools.ietf.org/html/rfc7231#section-6.3.3)|成功|Inline|

### Responses Data Schema

## DELETE 删除指定ID的文章

DELETE /api/interview/{id}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### Responses Data Schema

## DELETE 删除所有文章

DELETE /api/interview/delAll

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### Responses Data Schema

# Data Schema

