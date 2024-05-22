"use server";
import { Entertainment } from "./definitions";
import { entertainments } from "./data";
import { sql } from "@vercel/postgres";
import { toCamelCase } from "@util/toCamelCase";

export async function fetchMockDatas(): Promise<Entertainment[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([...entertainments as Entertainment[]])
    }, 2000);
  });
}

async function getFilteredEntertainments(query: string): Promise<Entertainment[]> {
  const data = await sql<Entertainment>`
    SELECT *
    FROM entertainments
    WHERE
      title ILIKE ${`%${query}%`}
  `;
  return data.rows.map(toCamelCase);
}

export async function fetchTrendingEntertainments(): Promise<Entertainment[]> {
  try {
    const data = await sql<Entertainment>`
      SELECT *
      FROM entertainments
      WHERE is_trending
    `;
    return data.rows.map(toCamelCase);
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch entertainments data.');
  }
}

async function getFilteredEntertainmentsByCategory(category: 'ALL' | 'Movie' | 'TV Series', query: string): Promise<Entertainment[]> {
  const data = await sql<Entertainment>`
		SELECT *
		FROM entertainments
		WHERE
      title ILIKE ${`%${query}%`}
    AND
      category = ${category}
	  `;
  return data.rows.map(toCamelCase);
}

async function getBookmarkedEntertainments(query: string): Promise<Entertainment[]> {
  const data = await sql<Entertainment>`
    SELECT * 
    FROM entertainments
    WHERE 
      title ILIKE ${`%${query}%`}
    AND
      is_bookmarked`;
  return data.rows.map(toCamelCase);
}

export async function fetchEntertainments(category: 'ALL' | 'Movie' | 'TV Series' | 'Bookmarked', query?: string) {
  try {
    switch (category) {
      case 'ALL':
        return await getFilteredEntertainments(query as string);
      case 'Movie':
        return await getFilteredEntertainmentsByCategory('Movie', query as string);
      case 'TV Series':
        return await getFilteredEntertainmentsByCategory('TV Series', query as string);
      case 'Bookmarked':
        return await getBookmarkedEntertainments(query as string);
      default:
        break;
    }
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch entertainments table.');
  }
}
