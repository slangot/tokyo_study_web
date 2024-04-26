// Next
import { NextResponse } from "next/server";

// Config
import db from "../../../config/db"

// Types
import { SentenceProps } from "@/types";

export async function GET() {
  try {
    const results = await new Promise((resolve, reject) => {
      db.query('SELECT * FROM sentence LIMIT 10', (error, results) => {
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
    return NextResponse.json(new Error("Failed to get sentences"));
  }
}

export async function POST(req: any, res: NextResponse) {
  const body: SentenceProps = await req.json()
  const { kanji, japanese, english, french, romaji, words, grammar, level } = body

  try {
    const results = await new Promise((resolve, reject) => {
      db.query('INSERT INTO sentence(kanji, japanese, english, french, romaji, words, grammar, level) VALUES (?,?,?,?,?,?,?,?)', [
        kanji,
        japanese,
        english,
        french,
        romaji,
        words,
        grammar,
        level
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
    return NextResponse.json(new Error("Failed to insert a sentence"));
  }
}