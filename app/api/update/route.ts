// Next
import { NextRequest, NextResponse } from "next/server";

// Config
import db from "../../../config/db"

// Utils
import { apiAllowedColumns, apiAllowedTypes } from "@/utils/api";

export async function PUT(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  const type = req.nextUrl.searchParams.get('type')
  const ObjectValues = Object.values(body);
  const column: any = ObjectValues[0]
  const value = ObjectValues[1]
  const id = ObjectValues[2]

  // Check if the request type is allowed
  if (type && !apiAllowedTypes.includes(type)) {
    console.error(`Invalid request type : ${type}`);
    return NextResponse.json(new Error(`Invalid request type : ${type}`));
  }

  // Check if the request column to update is allowed
  if (type && !apiAllowedColumns.includes(column)) {
    console.error(`Invalid request column : ${column}`);
    return NextResponse.json(new Error(`Invalid request column : ${column}`));
  }

  const sqlData = [value, id]
  const query = `UPDATE ${type} SET ${column} = ? WHERE id = ?`;

  try {
    const results = await new Promise((resolve, reject) => {
      db.query(query, sqlData, (error, results) => {
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
    return NextResponse.json(new Error(`Failed to update ${type}`));
  }
}
