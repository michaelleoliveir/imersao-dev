import { MongoClient } from 'mongodb';

// função para conectar com o banco de dados, conectando com a string do banco de dados
// por ter um EXPORT, a função que acabou de ser criada pode ser utilizada em outr arquivo
export default async function conectarAoBanco(stringConexao) {
    let mongoClient;

    try {
        mongoClient = new MongoClient(stringConexao);
        console.log('Conectando ao cluster do banco de dados...');
        await mongoClient.connect();
        console.log('Conectando ao MongoDB Atlas com sucesso!');

        return mongoClient;
    } catch(erro) {
        console.log('Falha na conexão com o banco!', erro);
        process.exit();
    }
}