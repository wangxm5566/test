//获取表格数据
const getUserListData = () => {
  return {
    code: 200,
    success: true,
    msg: "",
    data: {
      pageNumber: 0,
      pageSize: 10,
      total: 37,
      pages: 4,
      list: [
        {
          id: "12345678901234567890",
          loginCode: "测试用户",
          name: "黎明",
          password: "000000",
          gender: "0",
          type: "用户类型",
          orgName: "顶级机构",
          startDate: "2020-01-25",
          endDate: "2019-03-24",
          job: "测试",
          code: "27149",
          telephone: "13292616455",
          mobile: "6070899",
          email: "987632654@qq.com",
          birthday: "2019-04-15",
          postalAddress: "畅春园",
          zipCode: "765444",
          remark: "",
        },
        {
          id: "12345678901234567891",
          loginCode: "测试用户",
          name: "黎明",
          password: "000000",
          gender: "0",
          type: "用户类型",
          orgName: "顶级机构",
          startDate: "2020-01-25",
          endDate: "2019-03-24",
          job: "测试",
          code: "27149",
          telephone: "13292616455",
          mobile: "6070899",
          email: "987632654@qq.com",
          birthday: "2019-04-15",
          postalAddress: "畅春园",
          zipCode: "765444",
          remark: "",
        },
        {
          id: "12345678901234567892",
          loginCode: "测试用户",
          name: "黎明",
          password: "000000",
          gender: "0",
          type: "用户类型",
          orgName: "顶级机构",
          startDate: "2020-01-25",
          endDate: "2019-03-24",
          job: "测试",
          code: "27149",
          telephone: "13292616455",
          mobile: "6070899",
          email: "987632654@qq.com",
          birthday: "2019-04-15",
          postalAddress: "畅春园",
          zipCode: "765444",
          remark: "",
        },
        {
          id: "12345678901234567893",
          loginCode: "测试用户",
          name: "黎明",
          password: "000000",
          gender: "0",
          type: "用户类型",
          orgName: "顶级机构",
          startDate: "2020-01-25",
          endDate: "2019-03-24",
          job: "测试",
          code: "27149",
          telephone: "13292616455",
          mobile: "6070899",
          email: "987632654@qq.com",
          birthday: "2019-04-15",
          postalAddress: "畅春园",
          zipCode: "765444",
          remark: "",
        },
        {
          id: "12345678901234567894",
          loginCode: "测试用户",
          name: "黎明",
          password: "000000",
          gender: "0",
          type: "用户类型",
          orgName: "顶级机构",
          startDate: "2020-01-25",
          endDate: "2019-03-24",
          job: "测试",
          code: "27149",
          telephone: "13292616455",
          mobile: "6070899",
          email: "987632654@qq.com",
          birthday: "2019-04-15",
          postalAddress: "畅春园",
          zipCode: "765444",
          remark: "",
        },
        {
          id: "12345678901234567895",
          loginCode: "测试用户",
          name: "黎明",
          password: "000000",
          gender: "0",
          type: "用户类型",
          orgName: "顶级机构",
          startDate: "2020-01-25",
          endDate: "2019-03-24",
          job: "测试",
          code: "27149",
          telephone: "13292616455",
          mobile: "6070899",
          email: "987632654@qq.com",
          birthday: "2019-04-15",
          postalAddress: "畅春园",
          zipCode: "765444",
          remark: "",
        },
        {
          id: "12345678901234567896",
          loginCode: "测试用户",
          name: "黎明",
          password: "000000",
          gender: "0",
          type: "用户类型",
          orgName: "顶级机构",
          startDate: "2020-01-25",
          endDate: "2019-03-24",
          job: "测试",
          code: "27149",
          telephone: "13292616455",
          mobile: "6070899",
          email: "987632654@qq.com",
          birthday: "2019-04-15",
          postalAddress: "畅春园",
          zipCode: "765444",
          remark: "",
        },
      ],
    },
  };
};

const checkUser = () => {
  return {
    code: 200,
    success: true,
    msg: "审核成功",
  };
};

//单条查询用户信息
const getUserDetail = () => {
  return {
    code: 200,
    success: true,
    msg: "",
    data: {
      id: "19120609055943000141",
      loginCode: "测试用户",
      name: "李磊",
      password: "000000",
      gender: "1",
      type: "1",
      orgIds: "1,2222",
      startDate: "2019-04-23",
      job: "高级助理",
      code: "27149",
      mobile: "13292516468",
      telephone: "5969874",
      email: "876543253@qq.com",
      birthday: "1991-06-29",
      postalAddress: "和穆兰岛",
      zipCode: "0100000",
      remark: "xxxxxxxxxxxxxxxxxxxx",
      endDate: "2020-01-25",
    },
  };
};

export default {
  "POST /service-portal/user/listPage": function (req, res) {
    res.json(getUserListData());
  },
  "POST /service-portal/organization/listAllCheck": function (req, res) {
    res.json(checkUser());
  },
  "POST /service-portal/user/find": function (req, res) {
    res.json(getUserDetail());
  },
};