import "dotenv/config.js";
import express from "express";
import cors from "cors";
import { connectDB } from "../src/config/database.js"
import router from "./routes/routes.js";

const app = express();
app.use(cors());
app.use(express.json());


app.use("/api", router);

async function start() {
    await connectDB();

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
}

start();
