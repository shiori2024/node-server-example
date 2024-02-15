---
title: blogAPI
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

# 用户接口

## GET 获取所有用户

GET /api/users

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

## POST 创建一个新用户

POST /api/users

> Body Parameters

```json
{
  "username": "string",
  "password": "string",
  "nickname": "string",
  "email": "string"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» username|body|string| yes |用户名|
|» password|body|string| yes |密码|
|» nickname|body|string| no |昵称|
|» email|body|string| no |邮箱|

> Response Examples

> 成功

```json
{
  "status": "success",
  "message": "用户创建成功",
  "data": {
    "id": 3,
    "username": "张杰",
    "password": "qui Excepteur",
    "nickname": "韩超",
    "email": "d.ccwqyh@qq.com",
    "updatedAt": "2024-02-15T07:35:49.393Z",
    "createdAt": "2024-02-15T07:35:49.393Z"
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|成功|Inline|

### Responses Data Schema

## GET 根据ID查找用户

GET /api/users/{id}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|

> Response Examples

> 成功

```json
{
  "status": "success",
  "message": "用户信息查询成功",
  "data": {
    "id": 1,
    "username": "admin",
    "password": "123456",
    "nickname": "shiori",
    "email": "shiori2024@163.com",
    "createdAt": "2024-02-15T15:05:31.000Z",
    "updatedAt": "2024-02-15T15:05:46.000Z"
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### Responses Data Schema

## PUT 更新指定ID的用户

PUT /api/users/{id}

> Body Parameters

```json
{
  "username": "string",
  "password": "string",
  "nickname": "string",
  "email": "string"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|body|body|object| no |none|
|» username|body|string| no |none|
|» password|body|string| no |none|
|» nickname|body|string| yes |none|
|» email|body|string| no |none|

> Response Examples

> 成功

```json
{
  "status": "success",
  "message": "更新成功！"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|202|[Accepted](https://tools.ietf.org/html/rfc7231#section-6.3.3)|成功|Inline|

### Responses Data Schema

## DELETE 删除指定ID的用户

DELETE /api/users/{id}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|

> Response Examples

> 删除成功

```json
{}
```

> 记录不存在

```json
{
  "status": "error",
  "message": "id为: 4 的用户删除失败！"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|删除成功|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|记录不存在|Inline|

### Responses Data Schema

# Data Schema

