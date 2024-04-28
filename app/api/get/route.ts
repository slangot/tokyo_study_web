
// Next
import { NextRequest, NextResponse } from "next/server";

// Config
import db from "../../../config/db"

// Utils
import { apiAllowedTypes } from "@/utils/api";

export async function GET(req: NextRequest) {
  const count = req.nextUrl.searchParams.get('count')
  let query: string
  const level = req.nextUrl.searchParams.get('level')
  const limit = req.nextUrl.searchParams.get('limit')
  const type = req.nextUrl.searchParams.get('type')

  // Check if the request type is allowed
  if (type && !apiAllowedTypes.includes(type)) {
    console.error(`Invalid request type : ${type}`);
    return NextResponse.json(new Error(`Invalid request type : ${type}`));
  }

  // Create the query
  if (count) {
    query = `SELECT COUNT(*) FROM ${type}`
  } else {
    query = `SELECT * FROM ${type}`
  }

  if (level !== null) {
    level && (query = query.concat(` WHERE level = ${parseInt(level)}`))
  }

  if (limit) {
    limit && (query = query.concat(` LIMIT ${parseInt(limit)}`))
  }

  try {
    const results: any = await new Promise((resolve, reject) => {
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