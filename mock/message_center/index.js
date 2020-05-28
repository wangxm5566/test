/**
 * 菜单mock数据
 */
import messages from "./messages";

const getMessage = () => {
    return {
        success: true,
        data: messages,
    };
};

export default {
    "POST /message": function (req, res) {
        res.json(getMessage());
    },
};
