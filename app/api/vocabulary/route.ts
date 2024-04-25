// Next
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

// Config
import db from "../../../config/db"

// Types
import { VocabularyProps } from "@/types";

export async function GET() {
  try {
    const results = await new Promise((resolve, reject) => {
      db.query('SELECT * FROM vocabulary LIMIT 10', (error, results) => {
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
    return NextResponse.json(new Error("Failed to get vocabulary"));
  }
}

export async function POST(req: NextApiRequest, res: NextResponse) {
  const body: VocabularyProps = await req.body

  try {
    const results = await new Promise((resolve, reject) => {
      db.query('INSERT INTO vocabulary(kanji, japanese, english, french, romaji, categories, level) VALUES (?,?,?,?,?,?,?)', [
        body.kanji,
        body.japanese,
        body.english,
        body.french,
        body.romaji,
        body.categories,
        body.level
      ], (error, results) => {
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
    return NextResponse.json(new Error("Failed to insert vocabulary"));
  }
}