"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cards = void 0;
const db_1 = require("../instances/db");
const sequelize_1 = require("sequelize");
const User_1 = require("./User");
exports.Cards = db_1.database.define("Cards", {
    id: { type: sequelize_1.DataTypes.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false },
    card_number: { type: sequelize_1.DataTypes.INTEGER },
    card_code: { type: sequelize_1.DataTypes.INTEGER },
    user_id: { type: sequelize_1.DataTypes.INTEGER, references: { model: "User", key: "id" } }
}, { tableName: "cards", timestamps: false });
exports.Cards.belongsTo(User_1.User, { foreignKey: "user_id", constraints: true });
User_1.User.hasMany(exports.Cards, { foreignKey: "user_id" });
