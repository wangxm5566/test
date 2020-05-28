//字典左侧列表数据
const getDicData = () => {
  return {
    code: 200,
    success: true,
    msg: "查询成功！",
    data: [
      {
        id: "20010914072775000001",
        code: "xunyicao",
        name: "薰衣草HOUJIENVHAI",
        remark: "薰衣草测试备注",
        dataSourceState: 0,
      },
      {
        id: "13993474306000186102",
        code: "MARKET",
        name: "市场",
        remark: "市场测试备注",
        dataSourceState: 1,
      },
      {
        id: "13993474306000186103",
        code: "MARKET",
        name: "交易",
        remark: "交易",
        dataSourceState: 1,
      },
      {
        id: "13993474306000186104",
        code: "MARKET",
        name: "特殊日期",
        remark: "特殊日期",
        dataSourceState: 1,
      },
      {
        id: "13993474306000186105",
        code: "MARKET",
        name: "报表规则类型",
        remark: "报表规则类型",
        dataSourceState: 0,
      },
    ],
  };
};

//获取表格数据
const getListData = () => {
  return {
    success: true,
    code: "200",
    msg: "操作成功",
    data: {
      pageNumber: 0,
      pageSize: 10,
      total: 15,
      pages: 3,
      list: [
        {
          name: "薰衣草15",
          code: "XYC15",
          id: "20022013331472000002",
          categoryId: "20021915465482000005",
          categoryName: "薰衣草10",
          creatorId: "12345678901234567890",
          creatorName: "管理员",
          lastEditorId: "12345678901234567890",
          lastEditorName: "管理员",
          checkerId: "12345678901234567890",
          checkerName: "管理员",
          checked: false,
          dataSourceState: 0,
          remark: "薰衣草测试15",
        },
        {
          name: "薰衣草18",
          code: "XYC18",
          id: "20022111465913000001",
          categoryId: "20021915465482000005",
          categoryName: "薰衣草10",
          creatorId: "12345678901234567890",
          creatorName: "管理员",
          lastEditorId: "12345678901234567890",
          lastEditorName: "管理员",
          checkerId: null,
          checkerName: null,
          checked: false,
          dataSourceState: 0,
          remark: "薰衣草测试18",
        },
        {
          name: "薰衣草18",
          code: "XYC18",
          id: "20022111465913000003",
          categoryId: "20021915465482000005",
          categoryName: "薰衣草10",
          creatorId: "12345678901234567890",
          creatorName: "管理员",
          lastEditorId: "12345678901234567890",
          lastEditorName: "管理员",
          checkerId: null,
          checkerName: null,
          checked: false,
          dataSourceState: 0,
          remark: "薰衣草测试18",
        },
        {
          name: "薰衣草18",
          code: "XYC18",
          id: "20022111465913000004",
          categoryId: "20021915465482000005",
          categoryName: "薰衣草10",
          creatorId: "12345678901234567890",
          creatorName: "管理员",
          lastEditorId: "12345678901234567890",
          lastEditorName: "管理员",
          checkerId: null,
          checkerName: null,
          checked: false,
          dataSourceState: 0,
          remark: "薰衣草测试18",
        },
        {
          name: "薰衣草18",
          code: "XYC18",
          id: "20022111465913000005",
          categoryId: "20021915465482000005",
          categoryName: "薰衣草10",
          creatorId: "12345678901234567890",
          creatorName: "管理员",
          lastEditorId: "12345678901234567890",
          lastEditorName: "管理员",
          checkerId: null,
          checkerName: null,
          checked: false,
          dataSourceState: 0,
          remark: "薰衣草测试18",
        },
        {
          name: "薰衣草18",
          code: "XYC18",
          id: "20022111465913000006",
          categoryId: "20021915465482000005",
          categoryName: "薰衣草10",
          creatorId: "12345678901234567890",
          creatorName: "管理员",
          lastEditorId: "12345678901234567890",
          lastEditorName: "管理员",
          checkerId: null,
          checkerName: null,
          checked: false,
          dataSourceState: 0,
          remark: "薰衣草测试18",
        },
        {
          name: "薰衣草18",
          code: "XYC18",
          id: "20022111465913000007",
          categoryId: "20021915465482000005",
          categoryName: "薰衣草10",
          creatorId: "12345678901234567890",
          creatorName: "管理员",
          lastEditorId: "12345678901234567890",
          lastEditorName: "管理员",
          checkerId: null,
          checkerName: null,
          checked: false,
          dataSourceState: 0,
          remark: "薰衣草测试18",
        },
      ],
    },
  };
};

//获取详情
const getDetailData = () => {
  return {
    success: true,
    code: "200",
    msg: "操作成功",
    data: {
      name: "估值核算",
      code: "ACCOUNT",
      id: "19062615382591001507",
      creatorId: "18102514145322355723",
      creatorName: "超级管理员",
      lastEditorId: "18102514145322355723",
      lastEditorName: "超级管理员",
      checkerId: "12345678901234567890",
      checkerName: "超级管理员",
      checked: true,
      remark: "光大区分估值核算/投资监督使用：估值核算",
      createTime: "2019-06-26 15:51:27",
      lastEditTime: "2019-06-26 15:51:27",
      checkTime: "2019-07-09 20:41:23",
      dataSourceState: 0,
      categoryName: "角色所属系统",
      categoryId: "19062615382591001496",
    },
  };
};

const getDicCategoryFind = () => {
  return {
    code: 200,
    success: true,
    msg: "",
    data: {
      id: "13993474306000186102",
      code: "MARKET",
      name: "市场",
      remark: "类目编码备注说明",
    },
  };
};

export default {
  "POST /service-portal/data/dictionary/listPage": function (req, res) {
    res.json(getListData());
  },
  "POST /service-portal/dictionary/category/listAll": function (req, res) {
    res.json(getDicData());
  },
  "POST /service-portal/data/dictionary/listAll": function (req, res) {
    res.json(getListData());
  },
  "POST /service-portal/data/dictionary/find": function (req, res) {
    res.json(getDetailData());
  },
  "POST /service-portal/dictionary/category/find": function (req, res) {
    res.json(getDicCategoryFind());
  },
};
