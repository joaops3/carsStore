import { DataTypes, Model } from "sequelize";
import { database } from "../instances/db";
import {User} from "./User"
import {Cars} from "./Cars"

interface PertenceInterface extends Model {
    id: number,
    
}

export const Pertence = database.define<PertenceInterface>("Pertence",{
    id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
    id_user: {type: DataTypes.INTEGER, references: {model: "User", key: "id"}, onUpdate: "CASCATE", onDelete: "CASCATE"},
    id_car: {type: DataTypes.INTEGER, references: {model: "Cars", key: "id"}, onUpdate: "CASCATE", onDelete: "CASCATE"}
   

}, {tableName: "pertence", timestamps: false})


Cars.belongsToMany(User, {through: {model: Pertence}, foreignKey: "id_user", constraints: true,})
User.belongsToMany(Cars, {through: {model: Pertence}, foreignKey: "id_cars", constraints: true,})




