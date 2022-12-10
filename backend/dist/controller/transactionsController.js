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
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchItem = exports.sellCar = exports.seeowned = exports.buyCar = exports.registerCard = void 0;
const User_1 = require("../models/User");
const Cards_1 = require("../models/Cards");
const Cars_1 = require("../models/Cars");
const sequelize_1 = require("sequelize");
const registerCard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { card_number, card_code } = req.body;
    if (!card_number) {
        return res.status(400).json({ message: "numero de cartao obrigatorio" });
    }
    if (!card_code) {
        return res.status(400).json({ message: "numero de cartao obrigatorio" });
    }
    const card = yield Cards_1.Cards.create({ card_number, card_code, user_id: id });
    res.status(201).json({ message: "cartao criado com sucesso" });
});
exports.registerCard = registerCard;
const buyCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, idcar } = req.params;
    const user = yield User_1.User.findByPk(id);
    const car = yield Cars_1.Cars.findByPk(idcar);
    if (!user) {
        return res.status(404).json({ message: "usuario nao encontrado" });
    }
    if (!car) {
        return res.status(404).json({ message: "carro nao encontrado" });
    }
    yield user.addCars([car]);
    res.status(201).json({ message: "compra feita com sucesso" });
});
exports.buyCar = buyCar;
const seeowned = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //GET CARS OWNED BY USER
    const { id } = req.params;
    //const user = await User.findOne({ include: { model: Cars, attributes: [], through: { attributes: [] } }, where: { id } })
    const user = yield User_1.User.findByPk(id);
    if (!user) {
        return res.status(404).json({ message: "usuario nao encontrado" });
    }
    const cars = yield user.getCars();
    res.status(200).json({ cars });
});
exports.seeowned = seeowned;
const sellCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //REMOVE A CAR FROM THE USER
    const { id, idcar } = req.params;
    const user = yield User_1.User.findByPk(id);
    const car = yield Cars_1.Cars.findByPk(idcar);
    if (!user) {
        return res.status(404).json({ message: "usuario nao encontrado" });
    }
    if (!car) {
        return res.status(404).json({ message: "carro nao encontrado" });
    }
    yield user.removeCars([car]);
    res.status(200).json({ message: "carro vendido com sucesso" });
});
exports.sellCar = sellCar;
const searchItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // find item by seach, name or brand
    const { item } = req.params;
    if (!item)
        return res.json({});
    const cars = yield Cars_1.Cars.findAll({ where: { [sequelize_1.Op.or]: [{ name_car: { [sequelize_1.Op.like]: `%${item}%` } }, { model: { [sequelize_1.Op.like]: `%${item}%` } }] } });
    if (!cars) {
        return res.json({ error: "nenhum carro encontrado" });
    }
    res.status(200).json({ cars });
});
exports.searchItem = searchItem;
