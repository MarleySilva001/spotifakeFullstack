import Express from "express";
import { pegar_usuario } from "../controlador/controlador_usuario.js";

const rotas_usuarios = Express.Router()

rotas_usuarios.get('/:email', pegar_usuario)

export { rotas_usuarios }