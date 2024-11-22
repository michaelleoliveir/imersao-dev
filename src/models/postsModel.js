import conectarAoBanco from "../config/dbConfig.js";
// conecta com o banco de dados
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)

export async function getTodosPosts() {
    const db = conexao.db("imersao-instabytes"); //acessando o banco de dados
    const colecao = db.collection("posts") //acessando a coleção
    return colecao.find().toArray(); //converte objetos em array
}