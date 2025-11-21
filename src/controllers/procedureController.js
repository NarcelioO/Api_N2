import {DeviceProcedure} from '../models/DeviceProcedure.js'

const procedureController = {

    async list(req, res) {
        try{
            const procedures = await DeviceProcedure.find({})
            
            res.status(200).json(procedures)
        }catch(err){
            res.status(500).send({"Erro":"Erro ao listar procedimentos"})
        }
    },
    
    async create(req, res) {
        try {
        const { title, device, procedures } = req.body;

        if (!title || !device || !procedures) {
            return res.status(400).json({ error: 'Campos obrigatórios não enviados.' });
        }

        const newProcedure = new DeviceProcedure({ title, device, procedures});
        await newProcedure.save();
        return res.json(newProcedure);

        } catch (error) {
            return res.status(500).json({ error: 'Erro ao criar procedimento' });
        }
    }

};

export default procedureController;
