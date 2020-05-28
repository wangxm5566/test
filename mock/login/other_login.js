/**
 * 第三方登录mock接口
 */

//获取微信二维码图片流
const getWeiXinStream = () => {
  return {
    msg: "操作成功",
    success: true,
    data: {},
  };
};

//获取企业微信二维码图片流
const getQyweixinStream = () => {
  return {
    msg: "操作成功",
    success: true,
    data: {},
  };
};

//获取钉钉二维码图片流
const getDingDingStream = () => {
  return {
    msg: "操作成功",
    success: true,
    data: {},
  };
};

//邮箱登录校验
const getMailLogin = () => {
  return {
    msg: "操作成功",
    success: true,
    data: {},
  };
};

export default {
  "POST /otherLogin/weixin": function (req, res) {
    res.json(getWeiXinStream());
  },
  "POST /otherLogin/qyweixin": function (req, res) {
    res.json(getQyweixinStream());
  },
  "POST /otherLogin/dingding": function (req, res) {
    res.json(getDingDingStream());
  },
  "POST /otherLogin/mail": function (req, res) {
    res.json(getMailLogin());
  },
};
