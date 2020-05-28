/**
 * 重置密码mock接口
 */

//账号校验
const getAccount = (req) => {
  const requestBody = req.params;
  const { account = "admin" } = requestBody;
  const accounts = [
    { id: "1", username: "admin" },
    { id: "2", username: "user" },
    { id: "2", username: "user2" },
    { id: "3", username: "user3" },
    { id: "4", username: "user4" },
  ];
  const isPhone = accounts.filter((item) => {
    return item.username == account ? true : false;
  });
  if (isPhone && isPhone[0]) {
    return {
      msg: "操作成功",
      success: true,
      data: { isPhone: true },
    };
  } else {
    return {
      msg: "操作失败",
      success: false,
      data: { isPhone: false },
    };
  }
};

//发送验证码
const getSendVerifyCode = () => {
  return {
    msg: "操作成功",
    success: true,
    data: {},
  };
};

//手机号校验
const getPhone = () => {
  return {
    msg: "操作成功",
    success: true,
    data: {},
  };
};

//密码重置
const getPwd = () => {
  return {
    msg: "操作成功",
    success: true,
    data: {},
  };
};

export default {
  // "POST /resetPwd/account": function (req, res) {
  //   res.json(getAccount(req));
  // },
  "POST /resetPwd/sendVerifyCode": function (req, res) {
    res.json(getSendVerifyCode());
  },
  "POST /resetPwd/phoneVerify": function (req, res) {
    res.json(getPhone());
  },
  "POST /resetPwd/updatePwd": function (req, res) {
    res.json(getPwd());
  },
};
