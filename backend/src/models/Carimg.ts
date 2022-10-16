import {database} from "../instances/db"
import {Model, DataTypes} from "sequelize"
import {Cars} from "./Cars"

interface CarimgInterface extends Model {
    id: number
    key: string,
    url: string,
    car_id: number,
}


export const Carsimg = database.define<CarimgInterface>("Carimg",{
    id: {type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true},
    key: {type: DataTypes.STRING},
    url: {type: DataTypes.STRING},
    car_id: {type: DataTypes.INTEGER, references: {model: "Cars", key: "id"}}
}, {tableName: "carimg", timestamps: false})


Carsimg.belongsTo(Cars, {foreignKey: "car_id", constraints: true,}) // onDelete: "CASCATE"
Cars.hasMany(Carsimg, {foreignKey: "car_id"})