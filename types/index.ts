export interface VocabularyProps {
  kanji: string | null;
  japanese: string;
  english: string | null;
  french: string | null;
  romaji: string | null;
  categories: string | null;
  level: number;
}

export interface SentenceProps {
  kanji: string | null;
  japanese: string;
  english: string | null;
  french: string;
  romaji: string;
  words: string;
  grammar: string;
  level: number;
}