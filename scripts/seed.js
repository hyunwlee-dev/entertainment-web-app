const { db } = require('@vercel/postgres');
const { users, entertainments } = require('../app/lib/data.js');
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
    console.log(`Created "users" table`);
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (id, email, password)
        VALUES (${user.id}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );
    console.log(`Seeded ${insertedUsers.length} users`);
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function seedEntertainments(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`
      CREATE TABLE IF NOT EXISTS entertainments (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        img_src VARCHAR(50) NOT NULL,
        title VARCHAR(50) NOT NULL,
        year INT NOT NULL,
        category VARCHAR(10) NOT NULL,
        rating VARCHAR(10) NOT NULL,
        is_bookmarked BOOLEAN NOT NULL,
        is_trending BOOLEAN NOT NULL
      );
    `;
    console.log(`Created "entertainments" table`);
    const insertedEntertainments = await Promise.all(
      entertainments.map(
        ({ imgSrc, title, year, category, rating, isBookmarked, isTrending }) => client.sql`
        INSERT INTO entertainments (img_src, title, year, category, rating, is_bookmarked, is_trending)
        VALUES (${imgSrc}, ${title}, ${year}, ${category}, ${rating}, ${isBookmarked}, ${isTrending})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );
    console.log(`Seeded ${insertedEntertainments.length} invoices`);
  } catch (error) {
    console.error('Error seeding entertainments:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();
  await seedUsers(client);
  await seedEntertainments(client);
  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
