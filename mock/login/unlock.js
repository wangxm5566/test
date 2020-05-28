/**
 * 解锁mock接口
 */

//解锁
const unLock = () => {
  return {
    msg: "操作成功",
    success: true,
    data: {},
  };
};

export default {
  "POST /login/unlock": function (req, res) {
    res.json(unLock());
  },
};
