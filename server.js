import express from "express";
import routes from "./src/routes/postsRoutes.js";

const app = express();
app.use(express.static("uploads"))
routes(app)

//ouvindo a requisição
app.listen(3000, () => {
    console.log("Servidor escutando...");
});

// function buscarPost(ID){
//     return posts.findIndex((post) => {
//         return post.id === Number(ID)
//     })
// }

// app.get("/posts/:id", (req, res) => {
//     const index = buscarPost(req.params.id);
//     res.status(200).json(posts[index]);
// });