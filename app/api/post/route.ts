// Next
import { NextRequest, NextResponse } from "next/server";

// Config
import db from "../../../config/db"

export async function POST(req: NextRequest, res: NextResponse, tableName: string, columns: string[]) {
  const body = await req.json();
  const type = req.nextUrl.searchParams.get('type')

  const ObjectKeys = Object.keys(body);
  const ObjectValues = Object.values(body);

  try {
    const results = await new Promise((resolve, reject) => {
      const query = `INSERT INTO ${type}(${ObjectKeys.join(',')}) VALUES (${ObjectValues.map(() => '?').join(',')})`;
      db.query(query, ObjectValues, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });

    return NextResponse.json(results);
  } catch (error) {
    console.error('error : ', error);
    return NextResponse.json(new Error(`Failed to insert into ${type}`));
  }
}
