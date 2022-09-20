"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var userController_1 = __importDefault(require("../controllers/userController"));
var admin_1 = __importDefault(require("../middlewares/admin"));
var auth_1 = require("../middlewares/auth");
var jwt_1 = __importDefault(require("../middlewares/jwt"));
var canDelete_1 = __importDefault(require("../middlewares/canDelete"));
var router = (0, express_1["default"])();
router.post('/user', auth_1.encryptPassword, userController_1["default"].saveUser);
router.get('/users', userController_1["default"].getAllUsers);
router.get('/users/:id_usuaria', userController_1["default"].getUserById);
router.get('/admin/user', jwt_1["default"].validateToken, admin_1["default"].checkRol, userController_1["default"].getAllUsers);
//router.put('/admin/user/:user_id', jwt.validateToken, admin.checkRol, userController.modifUser)
router["delete"]('/user/:id_usuaria', jwt_1["default"].validateToken, canDelete_1["default"].checkCanDelete, userController_1["default"].deleteUser);
exports["default"] = router;
