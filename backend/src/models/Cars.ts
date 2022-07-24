import { DataTypes, Model } from "sequelize";
import { database } from "../instances/db";
import {User} from "./User"

interface CarsInterface extends Model {
    id: number,
    name_car: string,
    model: string,
    year: number,
    img: string,
}

export const Cars = database.define<CarsInterface>("Cars",{
    id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
    name_car: {type: DataTypes.STRING},
    model: {type: DataTypes.STRING},
    year: {type: DataTypes.INTEGER},
    img: {type: DataTypes.STRING}

}, {tableName: "cars", timestamps: false})



//Cars.belongsTo(Fabricante, {foreignKey: "id_fabricante", constraints: true})



