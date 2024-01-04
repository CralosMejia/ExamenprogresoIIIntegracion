import type { Sequelize } from "sequelize";
import { lugar as _lugar } from "./lugar";
import type { lugarAttributes, lugarCreationAttributes } from "./lugar";
import { usuario as _usuario } from "./usuario";
import type { usuarioAttributes, usuarioCreationAttributes } from "./usuario";

export {
  _lugar as lugar,
  _usuario as usuario,
};

export type {
  lugarAttributes,
  lugarCreationAttributes,
  usuarioAttributes,
  usuarioCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const lugar = _lugar.initModel(sequelize);
  const usuario = _usuario.initModel(sequelize);


  return {
    lugar: lugar,
    usuario: usuario,
  };
}
