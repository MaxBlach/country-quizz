"use client"

import React, { useState } from 'react'
import {getUniqueRandomNumber} from '@/src/lib/utils'
import Question from './Question';
import Congratulations from './Congratulations'; 

const Quiz = ({ countriesList }) => {

  const getDataFromQuestion = (isCorrect: boolean) => {
    if(isCorrect) setScore(score + 1)
    setCurrentQuestion(currentQuestion + 1);
  }

  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const answers = getUniqueRandomNumber(10, countriesList)
  const questions = answers.map((answer, i) => <Question key={i}  answer={answer} countriesList={countriesList} score={getDataFromQuestion}/>)

  return (
    <div>
      {currentQuestion <= 10 && 
      <div>
        <div>Questions {currentQuestion} of 10</div>
        {questions[currentQuestion]}
      </div>}
      <p>{score}/10</p>
      {currentQuestion > 10 &&
      <Congratulations/>}
    </div>
  )
}

export default Quiz