const { db } = require('@vercel/postgres');
const { users } = require('../app/lib/data.js');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;
    console.log('users: ', users);
    await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (id, email, password)
        VALUES (${user.id}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );
    console.log(`Created "users" table`);
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}
async function main() {
  const client = await db.connect();
  await seedUsers(client);
  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
