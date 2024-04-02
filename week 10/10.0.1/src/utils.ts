import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgres://oqjahpkh:L3CRWr_5mntGEdNNG8TrNPgQCnGFUWGD@flora.db.elephantsql.com/oqjahpkh");
    await client.connect();
    return client;
}