import express from "express";

const posts = [
    { 
        descricao: "Uma foto teste", 
        imagem: "https://placecats.com/millie/300/150", 
        id: 1 
    },
    { 
        descricao: "Gato fofo dormindo", 
        imagem: "https://placecats.com/millie/300/150", 
        id: 2 
    },
    { 
        descricao: "Gato fazendo panqueca", 
        imagem: "https://placecats.com/millie/300/150", 
        id: 3 
    },
];

const app = express();
app.use(express.json()); //falando para o express que ele vai usar json

//ouvindo a requisição
app.listen(3000, () => {
    console.log("Servidor escutando...");
});

//url para acessar a requisição
app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPost(ID){
    return posts.findIndex((post) => {
        return post.id === Number(ID)
    })
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPost(req.params.id);
    res.status(200).json(posts[index]);
});