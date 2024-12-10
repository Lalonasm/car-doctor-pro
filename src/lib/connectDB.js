export const connectDB = async () => {
    if (db) return db;
    try {

        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true
            }
        })
        db = client.db('');
        return db;
    } catch (error) {
        console.log(error);
    }
}
