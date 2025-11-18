import {Alert} from "../models/Alert.js";

const alertController = {

    async list(req, res) {
        try{
            const alerts = await Alert.find({})
            
        res.status(200).send({alerts})
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
