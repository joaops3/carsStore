import { DataTypes, Model } from "sequelize/types";
import { database } from "../instances/db";

interface CarsInterface extends Model {
    id: number,
    name_car: string,
    model: string,
    year: number,
    img: string,
}

const Cars = database.define<CarsInterface>("Cars",{
    id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
    name_car: {type: DataTypes.STRING},
    model: {type: DataTypes.STRING},
    year: {type: DataTypes.INTEGER},
    img: {type: DataTypes.STRING}

}, {tableName: "cars", timestamps: false})
