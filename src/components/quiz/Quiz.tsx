"use client"

import React, { useState } from 'react'
import styles from '@/src/components/quiz/quiz.module.scss'
import Question from '../question/Question';
import Congratulations from '../congratulations/Congratulations'; 
import type { IQuestion } from '@/src/lib/types';


const Quiz = ({ questions } : {questions: IQuestion[]}) => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedQuestion, setSelectedQuestion] = useState<IQuestion>(questions[0]);


  const handleAnswer = (isCorrect: boolean) => {
    if(isCorrect) setScore(score + 1);
    setCurrentQuestion(prevstate => prevstate + 1);
    setSelectedQuestion(questions[currentQuestion + 1]);
  }

  const handleClick = (i: number) => {
    setSelectedQuestion(questions[i]);
  }

  return (
    <div className={styles.quiz}>
      {currentQuestion < 10 && 
      <>
        <div className={styles.card}>
        <div>{questions.map((q, i) => {
          return <button key={i} onClick={() => handleClick(i)} className={`styles.questions ${selectedQuestion ? styles.current : ''}`}>{i + 1}</button>
        })}</div>
          <Question isCurrentQuestion={selectedQuestion === questions[currentQuestion]} question={selectedQuestion} handleAnswer={handleAnswer}/>
        </div>
      </>}
      <p>{score}/10</p>
      {currentQuestion >= 10 &&
      <Congratulations/>}
    </div>
  )
}

export default Quiz