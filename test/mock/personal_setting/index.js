/**
 * 个人设置：基本信息、账号安全、账号绑定mock接口
 */
//获取基本信息
const getBasicInfo = () => {
  return {
    success: true,
    data: {
      id: "1",
      loginName: "zhangsan",
      userName: "李四",
      sex: "2",
      userType: "cancel",
      orgStatus: "cancel",
      date: "2020-3-5",
    },
  };
};
//更新基本信息
const updateBasicInfo = () => {
  return {
    success: true,
    data: {},
  };
};
//安全设置：更新密码
const updatePwd = () => {
  return {
    success: true,
    msg: "密码修改成功",
    data: {},
  };
};
//安全设置：绑定手机号
const bindPhone = () => {
  return {
    success: true,
    msg: "绑定成功",
    data: {},
  };
};
//安全设置：解绑手机号
const unbindPhone = () => {
  return {
    success: true,
    msg: "解绑成功",
    data: {},
  };
};

//安全设置：发送验证码
const getSendVerifyCode = () => {
  return {
    success: true,
    data: {},
  };
};
export default {
  "POST /personalSetting/basicInfo": function (req, res) {
    res.json(getBasicInfo());
  },
  "POST /personalSetting/updateBasicInfo": function (req, res) {
    res.json(updateBasicInfo());
  },
  "POST /personalSetting/updatePwd": function (req, res) {
    res.json(updatePwd());
  },
  "POST /personalSetting/bindPhone": function (req, res) {
    res.json(bindPhone());
  },
  "POST /personalSetting/unbindPhone": function (req, res) {
    res.json(unbindPhone());
  },
  "POST /personalSetting/sendVerifyCode": function (req, res) {
    res.json(getSendVerifyCode());
  },
};
