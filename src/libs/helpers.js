import isEqual from "lodash.isequal"

export function checkResult(source, target) {
  return isEqual(source, target)
}

const datasetStruct = {
  todo: `/* This lesson dataset structure
  {
    id: string;
    title: string;
    completed: boolean;
  } */`,
  got: `/* This lesson dataset structure
  {
    characters: [
      {
        _id: number;
        name: string;
        isFemale: boolean;
        culture: string;
        titles: string[];
        aliases: string[];
        born: string;
        died: string;
        father: number | null;
        mother: number | null;
        spouse: number | null;
        children: number[];
        allegiances: number[];
        books: number[];
        povBooks: [];
        playedBy: string[];
        tvSeries: number[];
      },
    ],
  } */`,
  got9: `/* This lesson dataset structure
  {
    characters: [
      {
        _id: string;
        _type: string;
        father: string;

        // no change

        children: string[];
      },
    ],
  } */`,
}

export function showDatasetStruct(id) {
  let data = ""
  if (id < 3) {
    data = "todo"
  } else if (id === 9) {
    data = "got9"
  } else {
    data = "got"
  }
  return datasetStruct[data]
}
