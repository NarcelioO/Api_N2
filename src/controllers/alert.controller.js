import {Alert} from "../models/alert.js";

export const createAlert = async (req, res) => {
    try {
        const { title, message } = req.body;
        const newAlert = new Alert({ title, message });
        await newAlert.save();
        return res.status(201).json(newAlert);
    } catch (error) {
        return res.status(500).json({ error: 'Erro ao criar alerta' });
    }
};