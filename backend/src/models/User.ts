import { database } from "../instances/db"
import { DataTypes, Model, HasManyAddAssociationsMixin, HasManyRemoveAssociationsMixin, HasManyGetAssociationsMixin } from "sequelize"
import { Cars } from "./Cars"
import { Cards } from "./Cards"
import { Pertence } from "./Pertence"
import Sequelize from "sequelize"



interface UserInterface extends Model {
    id: number,
    name: string,
    email: string
    nascimento: Date,
    admin: boolean,
    password: string,
    addCars: HasManyAddAssociationsMixin<typeof Cars, any>
    removeCars: HasManyRemoveAssociationsMixin<typeof Cars, any>
    getCars: HasManyGetAssociationsMixin<typeof Cars>

}


export const User = database.define<UserInterface>("User", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
    name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    nascimento: { type: DataTypes.DATE },
    admin: { type: DataTypes.BOOLEAN, defaultValue: false },
    password: { type: DataTypes.STRING }
}, { tableName: "user", timestamps: false })


User.belongsToMany(Cars, { through: { model: Pertence }, foreignKey: "id_car", constraints: true, }); //a partir de user saber os carros
Cars.belongsToMany(User, { through: { model: Pertence }, foreignKey: "id_user", constraints: true, })