"use server";
import { Entertainment } from "./definitions";
import { entertainments } from "./data";
import { sql } from "@vercel/postgres";
import { toCamelCase } from "@/app/util/toCamelCase";

export async function fetchMockDatas(): Promise<Entertainment[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([...entertainments as Entertainment[]])
    }, 2000);
  });
}

export async function fetchEntertainments(): Promise<Entertainment[]> {
  try {
    const data = await sql<Entertainment>`SELECT * FROM entertainments`;
    return data.rows.map(toCamelCase);
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch entertainments data.');
  }
}

export async function fetchFilteredEntertainments(query: string): Promise<Entertainment[]> {
  try {
    const data = await sql<Entertainment>`
		SELECT *
		FROM entertainments
		WHERE
      title ILIKE ${`%${query}%`}
	  `;
    return data.rows.map(toCamelCase);
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch entertainments table.');
  }
}

export async function fetchTrendingEntertainments(): Promise<Entertainment[]> {
  try {
    const data = await sql<Entertainment>`SELECT * FROM entertainments WHERE is_trending`;
    return data.rows.map(toCamelCase);
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch entertainments data.');
  }
}
