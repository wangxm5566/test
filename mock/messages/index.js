/**
 * 消息mock接口
 */
//系统消息
const getSystem = () => {
  return {
    success: true,
    data: [
      {
        id: "1",
        title: "蒂姆·库克回复了你的邮件蒂姆·库克回复了你的邮件",
        description: "2020-03-03	14:58 2020-03-03	14:58 2020-03-03	14:58",
        content:
          "这几天的任何一个消息都会影响着中国乃至世界未来的走向和格局的变化.",
        isRead: true,
        url: "/abnormal/404",
      },
      {
        id: "2",
        title: "蒂姆·库克回复了你的邮件",
        description: "2020-03-03	14:58",
        content: "消息信息与消息的区别 信息与消息 乍一看并无多大区.",
        isRead: true,
        url: "/abnormal/403",
      },
      {
        id: "3",
        title: "蒂姆·库克回复了你的邮件",
        description: "2020-03-03	14:58",
        content: "至世界未来的走向和格局的变化.",
        isRead: true,
        url: "/dashboard/analyse",
      },
      {
        id: "4",
        title: "蒂姆·库克回复了你的邮件",
        description: "2020-03-03	14:58",
        content: "息都会影响着中国乃",
        isRead: true,
        url: "/abnormal/500",
      },
      {
        id: "5",
        title: "蒂姆·库克回复了你的邮件",
        description: "2020-03-03	14:58",
        content: "蒂姆·库克回复了你的邮件.",
        isRead: true,
        url: "/dashboard/analyse",
      },
      {
        id: "6",
        title: "蒂姆·库克回复了你的邮件",
        description: "2020-03-03	14:58",
        content:
          "湖南信息学院是经湖南省政府批准、国家教育部备案的全日制普通本科高校",
        isRead: true,
        url: "/abnormal/403",
      },
      {
        id: "7",
        title: "蒂姆·库克回复了你的邮件",
        description: "2020-03-03	14:58",
        content:
          "中国信息报道依托国家统计局丰富的统计信息资源，为各种经济决策提供咨询",
        isRead: true,
        url: "/dashboard/analyse",
      },
      {
        id: "8",
        title: "蒂姆·库克回复了你的邮件",
        description: "2020-03-03	14:58",
        content:
          "湖南信息学院是经湖南省政府批准、国家教育部备案的全日制普通本科高校",
        isRead: true,
        url: "/abnormal/404",
      },
      {
        id: "9",
        title: "蒂姆·库克回复了你的邮件",
        description: "2020-03-03	14:58",
        content:
          "湖南信息学院是经湖南省政府批准、国家教育部备案的全日制普通本科高校",
        isRead: true,
        url: "/abnormal/500",
      },
      {
        id: "10",
        title: "蒂姆·库克回复了你的邮件",
        description: "2020-03-03	14:58",
        content: "湖南信息学院是经湖南省政府批准",
        isRead: true,
        url: "/abnormal/403",
      },
      {
        id: "11",
        title: "蒂姆·库克回复了你的邮件",
        description: "2020-03-03	14:58",
        content: "国家教育部备案的全日制普通本科高校",
        isRead: true,
        url: "/abnormal/404",
      },
    ],
  };
};
//用户消息
const getUser = () => {
  return {
    success: true,
    data: [
      {
        id: "1",
        title: "青年一代有我在，不让青春留遗憾 青年一代有我在",
        description: "2020-03-03	14:58 2020-03-03	14:58 2020-03-03	14:58",
        content:
          "湖南信息学院是经湖南省政府批准、国家教育部备案的全日制普通本科高校",
        isRead: true,
        url: "/abnormal/404",
      },
      {
        id: "2",
        title: "青年一代有我在，不让青春留遗憾",
        description: "2020-03-03	14:58",
        content:
          "湖南信息学院是经湖南省政府批准、国家教育部备案的全日制普通本科高校",
        isRead: true,
        url: "/abnormal/403",
      },
      {
        id: "3",
        title: "青年一代有我在，不让青春留遗憾",
        description: "2020-03-03	14:58",
        content:
          "湖南信息学院是经湖南省政府批准、国家教育部备案的全日制普通本科高校",
        isRead: true,
        url: "/dashboard/analyse",
      },
      {
        id: "4",
        title: "青年一代有我在，不让青春留遗憾",
        description: "2020-03-03	14:58",
        content:
          "湖南信息学院是经湖南省政府批准、国家教育部备案的全日制普通本科高校",
        isRead: true,
        url: "/abnormal/500",
      },
      {
        id: "5",
        title: "青年一代有我在，不让青春留遗憾",
        description: "2020-03-03	14:58",
        content:
          "湖南信息学院是经湖南省政府批准、国家教育部备案的全日制普通本科高校",
        isRead: true,
        url: "/dashboard/analyse",
      },
      {
        id: "6",
        title: "青年一代有我在，不让青春留遗憾",
        description: "2020-03-03	14:58",
        content:
          "湖南信息学院是经湖南省政府批准、国家教育部备案的全日制普通本科高校",
        isRead: true,
        url: "/abnormal/403",
      },
      {
        id: "7",
        title: "青年一代有我在，不让青春留遗憾",
        description: "2020-03-03	14:58",
        content:
          "湖南信息学院是经湖南省政府批准、国家教育部备案的全日制普通本科高校",
        isRead: true,
        url: "/dashboard/analyse",
      },
      {
        id: "8",
        title: "青年一代有我在，不让青春留遗憾",
        description: "2020-03-03	14:58",
        content:
          "湖南信息学院是经湖南省政府批准、国家教育部备案的全日制普通本科高校",
        isRead: true,
        url: "/abnormal/404",
      },
      {
        id: "9",
        title: "青年一代有我在，不让青春留遗憾",
        description: "2020-03-03	14:58",
        content:
          "湖南信息学院是经湖南省政府批准、国家教育部备案的全日制普通本科高校",
        isRead: true,
        url: "/abnormal/500",
      },
      {
        id: "10",
        title: "青年一代有我在，不让青春留遗憾",
        description: "2020-03-03	14:58",
        content:
          "湖南信息学院是经湖南省政府批准、国家教育部备案的全日制普通本科高校",
        isRead: true,
        url: "/abnormal/403",
      },
      {
        id: "11",
        title: "青年一代有我在，不让青春留遗憾",
        description: "2020-03-03	14:58",
        content:
          "湖南信息学院是经湖南省政府批准、国家教育部备案的全日制普通本科高校",
        isRead: true,
        url: "/abnormal/404",
      },
    ],
  };
};

//任务消息
const getTask = () => {
  return {
    success: true,
    data: [
      {
        id: "1",
        title: "疫情无情人有情，志愿服务送温情 疫情无情人有情",
        description: "2020-03-03	14:58 2020-03-03	14:58 2020-03-03	14:58",
        content:
          "湖南信息学院是经湖南省政府批准、国家教育部备案的全日制普通本科高校",
        isRead: true,
        url: "/abnormal/404",
      },
      {
        id: "2",
        title: "疫情无情人有情，志愿服务送温情",
        description: "2020-03-03	14:58",
        content:
          "湖南信息学院是经湖南省政府批准、国家教育部备案的全日制普通本科高校",
        isRead: true,
        url: "/abnormal/403",
      },
      {
        id: "3",
        title: "疫情无情人有情，志愿服务送温情",
        description: "2020-03-03	14:58",
        content:
          "湖南信息学院是经湖南省政府批准、国家教育部备案的全日制普通本科高校",
        isRead: true,
        url: "/dashboard/analyse",
      },
      {
        id: "4",
        title: "疫情无情人有情，志愿服务送温情",
        description: "2020-03-03	14:58",
        content:
          "湖南信息学院是经湖南省政府批准、国家教育部备案的全日制普通本科高校",
        isRead: true,
        url: "/abnormal/500",
      },
      {
        id: "5",
        title: "疫情无情人有情，志愿服务送温情",
        description: "2020-03-03	14:58",
        content:
          "湖南信息学院是经湖南省政府批准、国家教育部备案的全日制普通本科高校",
        isRead: true,
        url: "/dashboard/analyse",
      },
      {
        id: "6",
        title: "疫情无情人有情，志愿服务送温情",
        description: "2020-03-03	14:58",
        content:
          "湖南信息学院是经湖南省政府批准、国家教育部备案的全日制普通本科高校",
        isRead: true,
        url: "/abnormal/403",
      },
      {
        id: "7",
        title: "疫情无情人有情，志愿服务送温情",
        description: "2020-03-03	14:58",
        content:
          "湖南信息学院是经湖南省政府批准、国家教育部备案的全日制普通本科高校",
        isRead: true,
        url: "/dashboard/analyse",
      },
      {
        id: "8",
        title: "疫情无情人有情，志愿服务送温情",
        description: "2020-03-03	14:58",
        content:
          "湖南信息学院是经湖南省政府批准、国家教育部备案的全日制普通本科高校",
        isRead: true,
        url: "/abnormal/404",
      },
      {
        id: "9",
        title: "疫情无情人有情，志愿服务送温情",
        description: "2020-03-03	14:58",
        content:
          "湖南信息学院是经湖南省政府批准、国家教育部备案的全日制普通本科高校",
        isRead: true,
        url: "/abnormal/500",
      },
      {
        id: "10",
        title: "疫情无情人有情，志愿服务送温情",
        description: "2020-03-03	14:58",
        content:
          "湖南信息学院是经湖南省政府批准、国家教育部备案的全日制普通本科高校",
        isRead: true,
        url: "/abnormal/403",
      },
      {
        id: "11",
        title: "疫情无情人有情，志愿服务送温情",
        description: "2020-03-03	14:58",
        content:
          "湖南信息学院是经湖南省政府批准、国家教育部备案的全日制普通本科高校",
        isRead: true,
        url: "/abnormal/404",
      },
    ],
  };
};

//系统消息全部已读
const getAllList = () => {
  return {
    success: true,
    data: [],
  };
};

export default {
  "POST /messages/getSystem": function (req, res) {
    res.json(getSystem());
  },
  "POST /messages/getUser": function (req, res) {
    res.json(getUser());
  },
  "POST /messages/getTask": function (req, res) {
    res.json(getTask());
  },
  "POST /messages/getAllRead": function (req, res) {
    res.json(getAllList());
  },
  "POST /messages/getUnread": function (req, res) {
    res.json(unread());
  },
};
