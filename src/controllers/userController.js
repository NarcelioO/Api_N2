import {User} from "../models/user.js";

const userController = {

    async list(req, res) {
         console.log("Listando alertas...");
    },
    
    async create(req, res) {
        res.json({ message: "Alerta recebido com sucesso!" });
        // try {
        // const { title, message } = req.body;
        // const newAlert = new Alert({ title, message });
        // await newaAlert.save();
        // return res.json(newAlert);
        // } catch (error) {
        //     return res.status(500).json({ error: 'Erro ao criar alerta' });
        // }
    }

};

export default userController;