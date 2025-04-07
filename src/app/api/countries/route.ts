import { listCountries } from "@/src/lib/country-api";
import { getUniqueRandomNumber,shuffle } from "@/src/lib/utils";
import type { ICountry,IQuestion,IAnswer} from "@/src/lib/types";

const generateQuestions = (countryIndex: number, countries: ICountry[]): IQuestion => {
    const badAnswersIndexes = getUniqueRandomNumber(3,countries.length, [countryIndex])
    const correctAnswer: IAnswer = {
        answer: countries[countryIndex].name,
        isCorrect:true,
        isSelected: false
    }
    return {
        flag: countries[countryIndex].flag,
        answers: shuffle([
            correctAnswer,
            ...badAnswersIndexes.map(answerIndex => ({answer: countries[answerIndex].name, isCorrect: false, isSelected: false})),
        ]),
        isAnswered: false,
    }
}

const createQuestions = (number:number,countries:ICountry[] ) => {
    const selectedCountriesIndexes = getUniqueRandomNumber(number, countries.length);
    return selectedCountriesIndexes.map(countryIndex => generateQuestions(countryIndex,countries))
}


export async function GET() {
    const countries = await listCountries()
    const questions = createQuestions(10, countries)
    return Response.json(questions)
}