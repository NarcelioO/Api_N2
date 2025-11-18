import {Alert} from "../models/alert.js";

const alertController = {

    async list(req, res) {
    },
    
    async create(req, res) {
        try {
        const { title, message } = req.body;
        const newAlert = new Alert({ title, message });
        await newAlert.save();
        return res.json(newAlert);
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao criar alerta' });
        }
    }

};

export default alertController;