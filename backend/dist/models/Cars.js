"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cars = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../instances/db");
exports.Cars = db_1.database.define("Cars", {
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
    name_car: { type: sequelize_1.DataTypes.STRING },
    model: { type: sequelize_1.DataTypes.STRING },
    year: { type: sequelize_1.DataTypes.INTEGER },
    // carimg: {
    //     // type: DataTypes.STRING, get() {
    //     //     return this.getDataValue('carimg').split(';')
    //     // },
    //     // set(val: string[]) {
    //     //     this.setDataValue('carimg', val.join(';'));
    //     // },
    // },
    price: { type: sequelize_1.DataTypes.FLOAT(8, 2) }
}, { tableName: "cars", timestamps: false });
