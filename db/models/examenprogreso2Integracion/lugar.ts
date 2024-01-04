import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface lugarAttributes {
  id: number;
  ciudad?: string;
  pais?: string;
}

export type lugarPk = "id";
export type lugarId = lugar[lugarPk];
export type lugarOptionalAttributes = "id" | "ciudad" | "pais";
export type lugarCreationAttributes = Optional<lugarAttributes, lugarOptionalAttributes>;

export class lugar extends Model<lugarAttributes, lugarCreationAttributes> implements lugarAttributes {
  id!: number;
  ciudad?: string;
  pais?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof lugar {
    return lugar.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ciudad: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    pais: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'lugar',
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
