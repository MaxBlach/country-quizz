interface IApiCountry {
    flags: {
      png: string;
      svg: string;
      alt: string;
    };
    name: {
      common: string;
      official: string;
      nativeName: {
        eng: {
          official: string;
          common: string;
        };
      };
    };
  };

interface ICountry {
    name:string,
    flag:string
}

interface IAnswer {
  answer: string
  isCorrect: boolean,
  isSelected: boolean,
}

interface IQuestion {
  flag:string,
  answers: IAnswer[],
  isAnswered: boolean,
}

export type {
    IApiCountry,
    ICountry,
    IQuestion,
    IAnswer
}