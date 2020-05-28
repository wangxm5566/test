# Mock 接口文档

mock 接口： xxxx 功能-----> xxxx 接口------> 需要 xxxx 格式的数据
接口参数：xxxx 参数 ------> xxxx 类型 ------> 类型说明

# 返回数据格式

## 示例 1

```javascript
{
  success: true,
  data: {
     xxxx:"xxxxx",
     yyyy:"yyyyy"
  }
}
```

## 示例 2

```javascript
{
  success: true,
  data: [
    {
      xxxx:"xxxxx",
      yyyy:"yyyyy"
    },
    {
      xxxx:"xxxxx",
      yyyy:"yyyyy"
    }
  ]
}
```

## 示例 3

```javascript
{
  success: true,
  data: [
    {
      xxxx:"xxxxx",
      yyyy:"yyyyy",
      children:[
        {
          xxxx:"xxxxx",
          yyyy:"yyyyy",
          children:[
            {
              xxxx:"xxxxx",
              yyyy:"yyyyy"
            }
          ]
        }
      ]
    },
    {
      xxxx:"xxxxx",
      yyyy:"yyyyy",
      children:[
        {
          xxxx:"xxxxx",
          yyyy:"yyyyy",
          children:[
            {
              xxxx:"xxxxx",
              yyyy:"yyyyy"
            }
          ]
        }
      ]
    }
  ]
}
```

# 一、登录模块接口

## 1.登录

| 功能       | 接口                   | 参数                | 返回数据格式           |
| ---------- | ---------------------- | ------------------- | ---------------------- |
| 主界面登录 | /login                 | username、pwd、code | 参见返回数据格式示例 1 |
| 图形验证码 | /login/imageVerifyCode |                     | 二进制流               |
| 解锁       | /login/unLock          | pwd                 | 参见返回数据格式示例 1 |

### 参数类型

| 参数名称 | 类型   | 说明   |
| -------- | ------ | ------ |
| username | string | 用户名 |
| pwd      | string | 密码   |
| code     | string | 验证码 |

## 2.重置密码

| 功能       | 接口                     | 参数               | 返回数据格式           |
| ---------- | ------------------------ | ------------------ | ---------------------- |
| 账号校验   | /resetPwd/account        | account            | 参见返回数据格式示例 1 |
| 发送校验码 | /resetPwd/sendVerifyCode | phone              | 参见返回数据格式示例 1 |
| 手机号校验 | /resetPwd/phoneVerify    | phone、code        | 参见返回数据格式示例 1 |
| 密码重置   | /resetPwd/updatePwd      | newPwd、confirePwd | 参见返回数据格式示例 1 |

### 参数类型

| 参数名称   | 类型   | 说明     |
| ---------- | ------ | -------- |
| account    | string | 账号名称 |
| phone      | string | 手机号   |
| code       | string | 验证码   |
| newPwd     | string | 新密码   |
| confirePwd | string | 确认密码 |

## 3.双重认证

| 功能       | 接口                         | 参数        | 返回数据格式           |
| ---------- | ---------------------------- | ----------- | ---------------------- |
| 发送验证码 | /doubleCerify/sendVerifyCode | phone       | 参见返回数据格式示例 1 |
| 登录       | /doubleCerify/login          | phone、code | 参见返回数据格式示例 1 |

### 参数类型

| 参数名称 | 类型   | 说明   |
| -------- | ------ | ------ |
| phone    | string | 手机号 |
| code     | string | 验证码 |

## 4.第三方登录

| 功能           | 接口                 | 参数       | 返回数据格式           |
| -------------- | -------------------- | ---------- | ---------------------- |
| 微信二维码     | /otherLogin/weixin   |            | 二进制流               |
| 企业微信二维码 | /otherLogin/qyweixin |            | 二进制流               |
| 钉钉二维码     | /otherLogin/dingding |            | 二进制流               |
| 邮箱登录       | /otherLogin/mail     | email、pwd | 参见返回数据格式示例 1 |

### 参数类型

| 参数名称 | 类型   | 说明   |
| -------- | ------ | ------ |
| email    | string | 邮箱号 |
| pwd      | string | 密码   |

# 二、消息模块接口

| 功能         | 接口                 | 参数 | 返回数据格式           |
| ------------ | -------------------- | ---- | ---------------------- |
| 系统消息数据 | /messages/getSystem  |      | 参见返回数据格式示例 2 |
| 用户消息数据 | /messages/getUser    |      | 参见返回数据格式示例 2 |
| 任务消息数据 | /messages/getTask    |      | 参见返回数据格式示例 2 |
| 全读         | /messages/getAllRead |      | 参见返回数据格式示例 2 |
| 仅未读       | /messages/getUnread  |      | 参见返回数据格式示例 2 |
| 全部已读     | /messages/getAllRead |      | 参见返回数据格式示例 2 |

# 三、收藏夹模块接口

| 功能       | 接口                    | 参数 | 返回数据格式           |
| ---------- | ----------------------- | ---- | ---------------------- |
| 收藏夹数据 | /favorites/getFavorites |      | 参见返回数据格式示例 2 |
| 删除       | /favorites/delete       | ids  | 参见返回数据格式示例 1 |

## 参数类型

| 参数名称 | 类型  | 说明               |
| -------- | ----- | ------------------ |
| ids      | Array | 选择的 id 数组集合 |

# 四、导航菜单模块接口

| 功能         | 接口               | 参数 | 返回数据格式           |
| ------------ | ------------------ | ---- | ---------------------- |
| 导航菜单数据 | /navMenu           |      | 参见返回数据格式示例 3 |
| 收藏         | /navMenu/favorites | id   | 参见返回数据格式示例 1 |

## 参数类型

| 参数名称 | 类型   | 说明            |
| -------- | ------ | --------------- |
| id       | String | 选择子菜单的 id |

# 五、个人设置模块接口

## 1.基本信息

| 功能         | 接口                             | 参数                  | 返回数据格式           |
| ------------ | -------------------------------- | --------------------- | ---------------------- |
| 获取基本信息 | /personalSetting/basicInfo       | userId                | 参见返回数据格式示例 1 |
| 修改基本信息 | /personalSetting/updateBasicInfo | userId、sex、username | 参见返回数据格式示例 1 |

### 参数类型

| 参数名称 | 类型   | 说明      |
| -------- | ------ | --------- |
| userId   | String | 用户的 id |
| sex      | String | 性别      |
| username | String | 用户名    |

## 2.安全设置

| 功能       | 接口                            | 参数                               | 返回数据格式           |
| ---------- | ------------------------------- | ---------------------------------- | ---------------------- |
| 修改密码   | /personalSetting/updatePwd      | userId、oldPwd、newPwd、confirePwd | 参见返回数据格式示例 1 |
| 发送验证码 | /personalSetting/sendVerifyCode | phone                              | 参见返回数据格式示例 1 |
| 绑定手机号 | /personalSetting/bindPhone      | phone、code                        | 参见返回数据格式示例 1 |
| 解绑手机号 | /personalSetting/unbindPhone    | phone、code                        | 参见返回数据格式示例 1 |

### 参数类型

| 参数名称   | 类型   | 说明      |
| ---------- | ------ | --------- |
| userId     | String | 用户的 id |
| oldPwd     | String | 旧密码    |
| newPwd     | String | 新密码    |
| confirePwd | String | 确认密码  |
| phone      | String | 手机号    |
| code       | string | 验证码    |

## 3.账号绑定

参见第三方登录接口
