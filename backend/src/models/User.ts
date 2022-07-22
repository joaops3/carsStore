import {database} from "../instances/db"
import { DataTypes, Model } from "sequelize/types"

interface UserInterface extends Model {
    id:number,
    name: string,
    admin: true,
}


const User = database.define<UserInterface>("User", {
    id: {type: DataTypes.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true},
    name: {type: DataTypes.STRING},
    admin: {type: DataTypes.BOOLEAN, defaultValue: false}

}, {tableName: "user",timestamps: false})