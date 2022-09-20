"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var loginController_1 = __importDefault(require("../controllers/loginController"));
var auth_1 = __importDefault(require("../middlewares/auth"));
var jwt_1 = __importDefault(require("../middlewares/jwt"));
var state_1 = __importDefault(require("../middlewares/state"));
var router = (0, express_1["default"])();
router.post('/login', auth_1["default"].validateUser, jwt_1["default"].generateToken, state_1["default"].checkState, loginController_1["default"]);
exports["default"] = router;
