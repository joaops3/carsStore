import { DataTypes, Model, HasManyAddAssociationsMixin, HasManyGetAssociationsMixin } from "sequelize";
import { database } from "../instances/db";
import { User } from "./User"
import { Pertence } from "./Pertence"
import {Carsimg} from "./Carimg"

interface CarsInterface extends Model {
    id: number,
    name_car: string,
    model: string,
    year: number,
    carimg: any[],
    price: number,
    addCarsimg: HasManyAddAssociationsMixin<typeof Carsimg, any>,
    getCars: HasManyGetAssociationsMixin<typeof Carsimg>
}

export const Cars = database.define<CarsInterface>("Cars", {
    id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
    name_car: { type: DataTypes.STRING },
    model: { type: DataTypes.STRING },
    year: { type: DataTypes.INTEGER },
    // carimg: {
        
    //     // type: DataTypes.STRING, get() {
    //     //     return this.getDataValue('carimg').split(';')
    //     // },
    //     // set(val: string[]) {
    //     //     this.setDataValue('carimg', val.join(';'));
    //     // },
    // },
    price: { type: DataTypes.FLOAT(8,2) }

}, { tableName: "cars", timestamps: false })






