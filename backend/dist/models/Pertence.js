"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pertence = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../instances/db");
exports.Pertence = db_1.database.define("Pertence", {
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
    id_user: { type: sequelize_1.DataTypes.INTEGER, references: { model: "User", key: "id" } },
    id_car: { type: sequelize_1.DataTypes.INTEGER, references: { model: "Cars", key: "id" } }
}, { tableName: "pertence", timestamps: false });
