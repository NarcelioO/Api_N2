import {Alert} from "../models/Alert.js";

const alertController = {

    async list(req, res) {
        return res.json({"message":"OK"})
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
