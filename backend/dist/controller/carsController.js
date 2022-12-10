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
exports.deleteCar = exports.updateCar = exports.getCarsId = exports.register = exports.getCars = void 0;
const Cars_1 = require("../models/Cars");
const Carimg_1 = require("../models/Carimg");
const upload_1 = require("../middlewares/upload");
const getCars = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, limit } = (req.query);
    if (!page && !limit) {
        const cars = yield Cars_1.Cars.findAll({ include: { model: Carimg_1.Carsimg, attributes: { exclude: ["id", "car_id"] } } });
        if (!cars) {
            res.status(404).json({ message: "nenhum carro encontrado" });
        }
        return res.status(200).json({ cars });
    }
    //PAGINATION QUERY
    let offset = page ? ((Number(page) - 1) * Number(limit)) : 0;
    let totalPages = 0;
    yield Cars_1.Cars.findAndCountAll({ limit: Number(limit), offset: offset, include: { model: Carimg_1.Carsimg, attributes: { exclude: ["id", "car_id"] } } })
        .then((data) => {
        if (!data) {
            res.status(404).json({ message: "nenhum carro encontrado" });
        }
        else {
            totalPages = Math.ceil(data.count / Number(limit)),
                res.status(200).json({ cars: data, totalPages, totalItems: data.count, currentPage: page });
        }
    })
        .catch((e) => console.log(e));
});
exports.getCars = getCars;
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    if (!req.body.name_car) {
        return res.status(404).json({ message: "nome é obrigatorios" });
    }
    if (!req.body.year) {
        return res.status(404).json({ message: "ano é obrigatorios" });
    }
    if (!req.body.model) {
        return res.status(404).json({ message: "modelo é obrigatorios" });
    }
    if (!req.body.price) {
        return res.status(404).json({ message: "preco é obrigatorios" });
    }
    if (((_a = req.files) === null || _a === void 0 ? void 0 : _a.length) === 0 || req.files === undefined) {
        return res.json({ message: "envie uma imagem" });
    }
    //GERENCIAR IMAGENS
    const files = req.files;
    const filesDb = [];
    // files.forEach(async (file) => {
    //     filesDb.push(file.filename)
    //     try {
    //         await sharp(file.path)
    //             .toFile(`./public/img/${file.filename}`)
    //         await unlink(file.path)
    //     } catch (e) { console.log(e)}
    // })
    try {
        let newCar = yield Cars_1.Cars.create({ name_car: req.body.name_car, model: req.body.model, year: req.body.year, price: req.body.price });
        files.forEach((file) => __awaiter(void 0, void 0, void 0, function* () {
            const { location = "error" } = file;
            let carimg = yield Carimg_1.Carsimg.create({ key: file.key, url: location, car_id: newCar.id });
            filesDb.push(carimg);
        }));
        newCar.save();
    }
    catch (e) {
        console.log(e);
    }
    res.status(200).json({ sucesso: "carro cadastrado com sucesso" });
});
exports.register = register;
const getCarsId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const cars = yield Cars_1.Cars.findByPk(id, { include: { model: Carimg_1.Carsimg, attributes: { exclude: ["id", "car_id"] } } }).catch(e => console.log(e));
    if (!cars) {
        return res.status(400).json({ message: "nenhum carro encontrado" });
    }
    res.status(200).json({ cars });
});
exports.getCarsId = getCarsId;
const updateCar = (req, res) => {
    res.status(200).json();
};
exports.updateCar = updateCar;
const deleteCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    let cars = yield Cars_1.Cars.findByPk(id).catch(e => console.log(e));
    let carsimg = yield Carimg_1.Carsimg.findAll({ where: { car_id: id } });
    if (!cars) {
        return res.status(404).json({ message: "car not found" });
    }
    if (carsimg.length > 0) {
        carsimg.forEach((img) => __awaiter(void 0, void 0, void 0, function* () {
            yield upload_1.deleteaws.deleteObject({ Bucket: process.env.AWS_BUCKET, Key: img.key }, function (err, data) {
                if (err)
                    console.log(err, err.stack); // error
                else
                    console.log("sucesso"); // Sucess
            });
        }));
    }
    yield Carimg_1.Carsimg.destroy({ where: { car_id: id } });
    yield cars.destroy();
    res.status(200).json({ sucesso: "carro deletado" });
});
exports.deleteCar = deleteCar;
