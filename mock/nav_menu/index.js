/**
 * 菜单mock数据
 */
import navData from "./navData";

const getNavMenu = () => {
  return {
    success: true,
    data: navData,
  };
};

export default {
  "POST /navMenu": function (req, res) {
    res.json(getNavMenu());
  },
};
