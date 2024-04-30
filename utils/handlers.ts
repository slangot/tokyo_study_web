import { VocabularyProps } from "@/types";

const randomizeNumber = (length: number): number[] => {
  const randomNumbers: number[] = [];

  while (randomNumbers.length < 4) {
    const randomNum = Math.floor(Math.random() * length);
    if (!randomNumbers.includes(randomNum)) {
      randomNumbers.push(randomNum);
    }
  }
  return randomNumbers;
}

const randomizeData = (data: VocabularyProps[]): VocabularyProps[] => {
  for (const item of data) {
    item.isAnswer = false;
  }
  data[0].isAnswer = true;
  const randomData: VocabularyProps[] = data.sort(() => Math.random() - 0.5);
  return randomData;
}

export { randomizeData, randomizeNumber }