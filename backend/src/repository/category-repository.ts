import { ResultSetHeader } from "mysql2";
import { connect } from "../database";
import { Category, toCategory } from "../model";

interface ICategory extends ResultSetHeader {
  category_id: string;
  name: string;
  created_at: string;
  updated_at: string;
}

export async function getCategory(categoryId: string) {
  try {
    const connection = await connect();

    const sql = `
    SELECT * 
    FROM category
    WHERE category_id = ?
    ORDER BY created_at
    `;

    return await new Promise<Category>((resolve, reject) => {
      connection.query<ICategory>(sql, [categoryId], (err, result) => {
        if (err) {
          return reject(err);
        }

        const category = toCategory(
          result.category_id,
          result.name,
          result.created_at,
          result.updated_at
        );

        resolve(category);
      });
    });
  } catch (e) {
    console.error(e);
    throw new Error("Failed to get category.");
  }
}
