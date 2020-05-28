/**
 * 收藏夹mock接口
 */
//收藏夹
const getFacorites = () => {
  return {
    success: true,
    data: [
      {
        id: "1",
        title: "列表页列表页列表页列表页列表页列表页列表页列表页列表页",
        description: "首页 / 列表页 / 搜索列表 首页 / 列表页 / 搜索列表",
        url: "/abnormal/404",
      },
      {
        id: "2",
        title: "列表页",
        description: "首页 / 列表页 / 卡片列表 首页 / 列表页 / 卡片列表",
        url: "/abnormal/403",
      },
      {
        id: "3",
        title: "列表页",
        description: "首页 / 列表页 / 搜索列表",
        url: "/abnormal/500",
      },
      {
        id: "4",
        title: "列表页",
        description: "首页 / 列表页 / 卡片列表",
        url: "/dashboard/analyse",
      },
      {
        id: "5",
        title: "列表页",
        description: "首页 / 列表页 / 搜索列表",
        url: "/abnormal/500",
      },
      {
        id: "6",
        title: "列表页",
        description: "首页 / 列表页 / 卡片列表",
        url: "/abnormal/404",
      },
      {
        id: "7",
        title: "列表页",
        description: "首页 / 列表页 / 搜索列表",
        url: "/abnormal/403",
      },
      {
        id: "8",
        title: "列表页",
        description: "首页 / 列表页 / 搜索列表",
        url: "/dashboard/analyse",
      },
      {
        id: "9",
        title: "列表页",
        description: "首页 / 列表页 / 搜索列表",
        url: "/abnormal/403",
      },
      {
        id: "10",
        title: "列表页",
        description: "首页 / 列表页 / 搜索列表",
        url: "/dashboard/analyse",
      },
      {
        id: "11",
        title: "列表页",
        description: "首页 / 列表页 / 卡片列表",
        url: "/abnormal/404",
      },
    ],
  };
};

//删除选中的收藏夹记录
const clearFacorites = () => {
  return {
    success: true,
    data: [],
  };
};

export default {
  "POST /favorites/getFavorites": function (req, res) {
    res.json(getFacorites());
  },

  "POST /favorites/delete": function (req, res) {
    res.json(clearFacorites());
  },
};
