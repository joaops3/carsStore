"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const db_1 = require("../instances/db");
const sequelize_1 = require("sequelize");
const Cars_1 = require("./Cars");
const Pertence_1 = require("./Pertence");
exports.User = db_1.database.define("User", {
    id: { type: sequelize_1.DataTypes.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
    name: { type: sequelize_1.DataTypes.STRING },
    email: { type: sequelize_1.DataTypes.STRING },
    nascimento: { type: sequelize_1.DataTypes.DATE },
    admin: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: false },
    password: { type: sequelize_1.DataTypes.STRING }
}, { tableName: "user", timestamps: false });
exports.User.belongsToMany(Cars_1.Cars, { through: { model: Pertence_1.Pertence }, foreignKey: "id_car", constraints: true, }); //a partir de user saber os carros
Cars_1.Cars.belongsToMany(exports.User, { through: { model: Pertence_1.Pertence }, foreignKey: "id_user", constraints: true, });
