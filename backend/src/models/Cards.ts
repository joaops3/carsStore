import { database } from "../instances/db"
import { Model , DataTypes } from "sequelize"
import {User} from "./User"

interface CardsInterface extends Model{
    card_id: number,
    card_number: number,
    card_code: number,
    user_id: number
}

export const Cards = database.define<CardsInterface>("Cards", {
    id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
    card_number: {type: DataTypes.INTEGER},
    card_code: {type: DataTypes.INTEGER},
    user_id: {type: DataTypes.INTEGER, references: {model: "User", key: "id"}, onUpdate: "CASCATE", onDelete: "CASCATE"}

}, {tableName: "cards", timestamps: false} )

Cards.belongsTo(User, {foreignKey: "user_id", constraints: true})
