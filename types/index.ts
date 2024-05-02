export interface VocabularyProps {
  id?: number;
  kanji: string | null;
  japanese: string;
  english: string | null;
  french: string | null;
  romaji: string | null;
  categories: string | null;
  level: number;
  reported: boolean;
  isAnswer?: boolean;
}

export interface SentenceProps {
  id?: number;
  kanji: string | null;
  japanese: string;
  english: string | null;
  french: string;
  romaji: string;
  words: string;
  grammar: string;
  level: number;
  reported: boolean;
}