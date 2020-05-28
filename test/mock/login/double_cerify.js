/**
 * 双重认证mock接口
 */

//双重认证登录
const doDoubleCerifyLogin = () => {
  return {
    msg: "操作成功",
    success: true,
    data: {},
  };
};

//双重认证：发送验证码
const getSendVerifyCode = () => {
  return {
    msg: "操作成功",
    success: true,
    data: {},
  };
};

export default {
  "POST /doubleCerify/sendVerifyCode": function (req, res) {
    res.json(getSendVerifyCode());
  },
  "POST /doubleCerify/login": function (req, res) {
    res.json(doDoubleCerifyLogin());
  },
};
