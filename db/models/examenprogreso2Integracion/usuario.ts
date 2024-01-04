import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface usuarioAttributes {
  id: number;
  Nombre?: string;
  apellido?: string;
  Usuario?: string;
  ciudad?: string;
}

export type usuarioPk = "id";
export type usuarioId = usuario[usuarioPk];
export type usuarioOptionalAttributes = "id" | "Nombre" | "apellido" | "Usuario" | "ciudad";
export type usuarioCreationAttributes = Optional<usuarioAttributes, usuarioOptionalAttributes>;

export class usuario extends Model<usuarioAttributes, usuarioCreationAttributes> implements usuarioAttributes {
  id!: number;
  Nombre?: string;
  apellido?: string;
  Usuario?: string;
  ciudad?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof usuario {
    return usuario.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Nombre: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    apellido: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    ciudad: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'usuario',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
