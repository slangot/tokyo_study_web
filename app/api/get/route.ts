
// Next
import { NextRequest, NextResponse } from "next/server";

// Config
import db from "../../../config/db"

// Utils
import { apiAllowedTypes } from "@/utils/api";

export async function GET(req: NextRequest) {

  const count = req.nextUrl.searchParams.get('count')
  let query: string
  const limit = req.nextUrl.searchParams.get('limit')
  const type = req.nextUrl.searchParams.get('type')

  // Check if the request type is allowed
  if (type && !apiAllowedTypes.includes(type)) {
    console.error(`Invalid request type : ${type}`);
    return NextResponse.json(new Error(`Invalid request type : ${type}`));
  }

  try {
    const results: any = await new Promise((resolve, reject) => {
      if (count) {
        query = `SELECT COUNT(*) FROM ${type}`
      } else if (limit) {
        query = `SELECT * FROM ${type} LIMIT ${parseInt(limit)}`
      }

      db.query(query, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });

    if (count) {
      const countResult = results[0]['COUNT(*)']
      return NextResponse.json(countResult);
    } else {
      return NextResponse.json(results);
    }

  } catch (error) {
    console.error('error : ', error);
    return NextResponse.json(new Error(`Failed to get ${type}`));
  }
}