import { NowRequest, NowResponse } from '@vercel/node'
import { MongoClient, Db } from 'mongodb'
import url from 'url';

let cachedDb: Db;

async function connectToDatabase(uri: string) {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(uri);

  const dbName = url.parse(uri).pathname?.substr(1);

  const db = client.db(dbName);

  cachedDb = db;

  return db;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default async (request: NowRequest, response: NowResponse) => {
  const { informs } = request.body;

  const db = await connectToDatabase(process.env.MONGODB_URI!);

  const collection = db.collection('subscribers');

  await collection.insertOne({
    informs,
    subscribedAt: new Date(),
  })

  return response.status(201).json({ ok: true });
}