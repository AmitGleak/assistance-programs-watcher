import { MongoClient } from "mongodb";

export default class DatabaseClient {

    constructor() {
        this.client = new MongoClient(process.env.DB_URL);
        this.connect();
        this.db = this.client.db(process.env.DB_NAME);
    }

    async connect() {
        await this.client.connect();
    }

    async disconnect() {
        await this.client.close();
    }

    async getPrograms() {
        const collection = this.db.collection(process.env.DB_COLLECTION_NAME);
        const programs = await collection.find({});
        return programs;
    }

    async updatePrograms(programs) {
        const collection = this.db.collection(process.env.DB_COLLECTION_NAME);
        await collection.deleteMany({});
        await collection.insertMany(programs);
    }
}