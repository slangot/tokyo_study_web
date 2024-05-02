// Next
import { NextRequest, NextResponse } from "next/server";

// Config
import db from "../../../config/db"

// Utils
import { apiAllowedTypes } from "@/utils/api";

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  const type = req.nextUrl.searchParams.get('type')

  // Check if the request type is allowed
  if (type && !apiAllowedTypes.includes(type)) {
    console.error(`Invalid request type : ${type}`);
    return NextResponse.json(new Error(`Invalid request type : ${type}`));
  }

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
