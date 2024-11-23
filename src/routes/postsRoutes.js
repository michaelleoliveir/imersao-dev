import express from "express"
import multer from "multer";
import cors from "cors";
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from "../controller/postsController.js";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

// o multer está criando uma pasta onde as fotos serão inseridas
const upload = multer({ dest: "./uploads" , storage})

const routes = (app) => {
    // falando para o express que ele vai usar json
    app.use(express.json()); 

    app.use(cors(corsOptions))

    // rota para acessar a requisição no navegador usando o "/posts"
    app.get("/posts", listarPosts);

    // rota para criar um post
    app.post("/posts", postarNovoPost);

    // rota para inserir uma imagem
    app.post("/upload", upload.single("imagem"), uploadImagem)

    // rota para atualizar um arquivo
    app.put("/upload/:id", atualizarNovoPost)
}

export default routes;