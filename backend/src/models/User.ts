import {database} from "../instances/db"
import { DataTypes, Model } from "sequelize"
import {Cars} from "./Cars"
import {Cards} from "./Cards"


interface UserInterface extends Model {
    id:number,
    name: string,
    email: string
    nascimento: Date,
    admin: boolean,
    password: string
}


export const User = database.define<UserInterface>("User", {
    id: {type: DataTypes.INTEGER , allowNull: false, primaryKey: true},
    name: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    nascimento: {type: DataTypes.DATE},
    admin: {type: DataTypes.BOOLEAN, defaultValue: false},
    password: {type: DataTypes.STRING}
}, {tableName: "user",timestamps: false})


User.hasMany(Cards,{constraints: true, foreignKey: "user_id "})