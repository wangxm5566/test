/**
 * 登录主界面
 */
//验证码图片流
const getimageVerifyCode = () => {
  return {
    msg: "操作成功",
    success: true,
    data: {},
  };
};

export default {
  "POST /login/imageVerifyCode": function (req, res) {
    res.json(getimageVerifyCode());
  },
};
