/**
 * Created Date: Friday, March 8th 2019, 3:13:19 pm
 * Author: hanjingbo@ysstech.com | jingboup@gmail.com
 * -----
 * Last Modified: Thursday, March 14th 2019, 10:38:41 am
 * Modified By: hanjingbo <hanjingbo@ysstech.com | jingboup@gmail.com>
 * -----
 * Copyright (c) 2019-present, #Lugia#.
 * ------------------------------------
 * JavaScript will save your soul!
 */

import dashboard from "./dashboard";
// import routeMock from "./nav_menu";
import messages from "./messages";
import favorites from "./favorites";
import personalSetting from "./personal_setting";
import login from "./login/login";
import doubleCerify from "./login/double_cerify";
import unlock from "./login/unlock";
import resetPwd from "./login/reset_pwd";
import otherLogin from "./login/other_login";
import navMenu from "./nav_menu/index";
import dicManager from "./dic_manager";
import userManager from "./user_manager";

export default {
  ...dashboard,
  // ...routeMock,
  ...messages,
  ...favorites,
  ...personalSetting,
  ...resetPwd,
  ...otherLogin,
  ...unlock,
  ...login,
  ...doubleCerify,
  ...navMenu,
  ...dicManager,
  ...userManager,
};
