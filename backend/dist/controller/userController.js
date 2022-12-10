"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.updateUser = exports.deleteUser = exports.getUsersId = exports.createUser = exports.getUsers = void 0;
const User_1 = require("../models/User");
const Cards_1 = require("../models/Cards");
const privateRoute_1 = require("../middlewares/privateRoute");
const bcrypt_1 = __importDefault(require("bcrypt"));
// export const ping =(req:Request, res:Response) => {
//     try{database.authenticate()
//         console.log("funciono")
//     }catch(e){console.log(e)}
//     res.status(200).json({sucess: "sucesso"})
// }
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.User.findAll({ attributes: { exclude: ["password"] } });
    if (!user) {
        return res.status(404).json({ message: "nenhum usuario" });
    }
    res.status(200).json({ users: user });
});
exports.getUsers = getUsers;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body.email) {
        return res.status(400).json({ message: "email é obrigatorio" });
    }
    if (!req.body.name) {
        return res.status(400).json({ message: "name é obrigatorio" });
    }
    if (!req.body.password) {
        return res.status(400).json({ message: "password é obrigatorio" });
    }
    if (!req.body.nascimento) {
        return res.status(400).json({ message: "nascimento é obrigatorio" });
    }
    //search for user
    const { name, email, password, nascimento, admin } = req.body;
    const hasUser = yield User_1.User.findOne({ where: { email }, }).catch((e) => { console.log(e); });
    if (hasUser) {
        return res.json({ message: "email ja cadastrado" });
    }
    try {
        //generate password
        const salt = yield bcrypt_1.default.genSalt(12); // gera 12 caracteres aleatorios para colocar dps da senha
        const hash = yield bcrypt_1.default.hash(password, salt);
        const newUser = yield User_1.User.create({ name, email, nascimento, admin, password: hash });
        const token = yield (0, privateRoute_1.generateToken)({ id: newUser.id, email: newUser.email });
        res.status(201).json({ id: newUser.id, token });
    }
    catch (e) {
        res.status(500).json({ message: "erro: " + e });
    }
});
exports.createUser = createUser;
const getUsersId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const user = yield User_1.User.findOne({ include: Cards_1.Cards, where: { id }, attributes: { exclude: ["password"] } });
    //const card = await user.getCards()
    if (!user) {
        return res.status(404).json({ message: "usuario nao encontrado" });
    }
    res.status(201).json({ user: user });
});
exports.getUsersId = getUsersId;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield User_1.User.findByPk(id);
    if (!user) {
        return res.status(404).json({ message: "usuario nao encontrado" });
    }
    yield User_1.User.destroy({ where: { id } });
    res.status(200).json({ sucesso: "deletado users" });
});
exports.deleteUser = deleteUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield User_1.User.findByPk(id);
    if (!user) {
        return res.status(404).json({ message: "usuario nao encontrado" });
    }
    else {
        const { id, email } = req.body;
        user.email = email;
        yield user.save();
    }
    res.status(200).json({ sucesso: "atualizado users" });
});
exports.updateUser = updateUser;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body.email && !req.body.password) {
        return res.status(400).json({ message: "enviar email e senha" });
    }
    const { email, password } = req.body;
    const user = yield User_1.User.findOne({ where: { email } });
    if (!user) {
        return res.status(404).json({ message: "usuario nao cadastrado no sistema" });
    }
    //check password and email
    const checkpassword = yield bcrypt_1.default.compare(password, user.password);
    if (!checkpassword) {
        res.status(400).json({ message: "senha invalida!" });
        return;
    }
    const token = yield (0, privateRoute_1.generateToken)({ id: user.id, email: user.email });
    res.status(201).json({ id: user.id, token, type: user.admin });
});
exports.login = login;
