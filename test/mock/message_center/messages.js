const messages = [
    {
        id: "1",
        person: "admin",
        type: "系统消息",
        title: "校党委理论学习中心组（扩大）召开2020年第六次学习会议。",
        time: "2020-05-13",
        status: true
    },
    {
        id: "2",
        person: "张三",
        type: "用户消息",
        title: "金鹰奖改革“轻流量重演技” 取消人气奖增设最佳演员",
        time: "2020-05-13",
        status: true
    },
    {
        id: "3",
        person: "admin",
        type: "系统消息",
        title: "时政微纪录丨穿越千年的凝眸",
        time: "2020-05-13",
        status: false
    },
    {
        id: "4",
        person: "小李",
        type: "用户",
        title: "午饭是顶顶顶十大士大夫额我热热热热",
        time: "2020-05-12",
        status: false
    },
    {
        id: "5",
        person: "admin",
        type: "系统消息",
        title: "任务",
        time: "2020-05-12",
        status: true
    },
    {
        id: "6",
        person: "admin",
        type: "系统消息",
        title: "通知",
        time: "2020-05-12",
        status: true
    },
    {
        id: "7",
        person: "admin",
        type: "系统消息",
        title: "任务",
        time: "2020-05-13",
        status: true
    },
    {
        id: "8",
        person: "admin",
        type: "系统消息",
        title: "通知",
        time: "2020-05-13",
        status: true
    },
    {
        id: "9",
        person: "admin",
        type: "系统消息",
        title: "任务",
        time: "2020-05-13",
        status: true
    },
    {
        id: "10",
        person: "拉利",
        type: "用户消息",
        title: "日志",
        time: "2020-05-13",
        status: true
    },
    {
        id: "11",
        person: "admin",
        type: "系统消息",
        title: "任务",
        time: "2020-05-13",
        status: true
    },
    {
        id: "12",
        person: "admin",
        type: "系统消息",
        title: "任务",
        time: "2020-05-13",
        status: true
    },
    {
        id: "13",
        person: "admin",
        type: "系统消息",
        title: "任务",
        time: "2020-05-13",
        status: true
    },
    {
        id: "14",
        person: "admin",
        type: "系统消息",
        title: "任务",
        time: "2020-05-13",
        status: true
    },
    {
        id: "15",
        person: "admin",
        type: "系统消息",
        title: "任务",
        time: "2020-05-13",
        status: true
    },
    {
        id: "16",
        person: "admin",
        type: "系统消息",
        title: "任务",
        time: "2020-05-13",
        status: true
    },
    {
        id: "17",
        person: "admin",
        type: "系统消息",
        title: "任务",
        time: "2020-05-13",
        status: true
    },
    {
        id: "18",
        person: "admin",
        type: "系统消息",
        title: "任务",
        time: "2020-05-13",
        status: true
    },
    {
        id: "19",
        person: "admin",
        type: "系统消息",
        title: "任务",
        time: "2020-05-13",
        status: true
    },
    {
        id: "20",
        person: "admin",
        type: "系统消息",
        title: "任务",
        time: "2020-05-13",
        status: true
    },
    {
        id: "21",
        person: "admin",
        type: "系统消息",
        title: "任务",
        time: "2020-05-13",
        status: true
    },
    {
        id: "22",
        person: "admin",
        type: "系统消息",
        title: "任务",
        time: "2020-05-13",
        status: true
    },
    {
        id: "23",
        person: "admin",
        type: "系统消息",
        title: "任务",
        time: "2020-05-13",
        status: true
    },
    {
        id: "24",
        person: "admin",
        type: "系统消息",
        title: "任务",
        time: "2020-05-13",
        status: true
    },
    {
        id: "25",
        person: "admin",
        type: "系统消息",
        title: "通知",
        time: "2020-05-13",
        status: true
    },
    {
        id: "26",
        person: "admin",
        type: "系统消息",
        title: "任务",
        time: "2020-05-13",
        status: true
    },
    {
        id: "27",
        person: "admin",
        type: "系统消息",
        title: "任务",
        time: "2020-05-13",
        status: true
    },
    {
        id: "28",
        person: "admin",
        type: "系统消息",
        title: "任务",
        time: "2020-05-13",
        status: true
    },
    {
        id: "29",
        person: "admin",
        type: "系统消息",
        title: "任务",
        time: "2020-05-13",
        status: true
    },
    {
        id: "30",
        person: "admin",
        type: "用户消息",
        title: "任务",
        time: "2020-05-13",
        status: true
    },
    {
        id: "31",
        person: "admin",
        type: "系统消息",
        title: "任务",
        time: "2020-05-13",
        status: true
    },
    {
        id: "32",
        person: "admin",
        type: "系统消息",
        title: "任务",
        time: "2020-05-13",
        status: true
    },
    {
        id: "33",
        person: "admin",
        type: "系统消息",
        title: "任务",
        time: "2020-05-13",
        status: true
    },
    {
        id: "34",
        person: "admin",
        type: "系统消息",
        title: "任务",
        time: "2020-05-13",
        status: true
    },
    {
        id: "35",
        person: "admin",
        type: "系统消息",
        title: "任务",
        time: "2020-05-13",
        status: true
    },
    {
        id: "36",
        person: "admin",
        type: "系统消息",
        title: "任务",
        time: "2020-05-13",
        status: true
    },
    {
        id: "37",
        person: "王五",
        type: "系统消息",
        title: "任务",
        time: "2020-05-13",
        status: true
    },
    {
        id: "38",
        person: "admin",
        type: "系统消息",
        title: "任务",
        time: "2020-05-13",
        status: true
    },
    {
        id: "39",
        person: "admin",
        type: "系统消息",
        title: "任务",
        time: "2020-05-13",
        status: true
    },
    {
        id: "40",
        person: "admin",
        type: "系统消息",
        title: "任务",
        time: "2020-05-13",
        status: true
    },
    {
        id: "41",
        person: "admin",
        type: "系统消息",
        title: "任务",
        time: "2020-05-13",
        status: true
    },
    {
        id: "42",
        person: "里斯",
        type: "系统消息",
        title: "任务",
        time: "2020-05-13",
        status: true
    },
];

export default messages;