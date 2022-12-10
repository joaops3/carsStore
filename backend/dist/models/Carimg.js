"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carsimg = void 0;
const db_1 = require("../instances/db");
const sequelize_1 = require("sequelize");
const Cars_1 = require("./Cars");
exports.Carsimg = db_1.database.define("Carimg", {
    id: { type: sequelize_1.DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
    key: { type: sequelize_1.DataTypes.STRING },
    url: { type: sequelize_1.DataTypes.STRING },
    car_id: { type: sequelize_1.DataTypes.INTEGER, references: { model: "Cars", key: "id" } }
}, { tableName: "carimg", timestamps: false });
exports.Carsimg.belongsTo(Cars_1.Cars, { foreignKey: "car_id", constraints: true, }); // onDelete: "CASCATE"
Cars_1.Cars.hasMany(exports.Carsimg, { foreignKey: "car_id" });
