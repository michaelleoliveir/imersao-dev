import express from "express"
import { listarPosts } from "../controller/postsController.js";

const routes = (app) => {
    //falando para o express que ele vai usar json
    app.use(express.json()); 

    //pode acessar a requisição no navegador usando o "/posts"
    app.get("/posts", listarPosts);
}

export default routes;