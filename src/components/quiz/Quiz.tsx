"use client"

import React, { useState } from 'react'
import styles from '@/src/app/css-compiled/quiz/quiz.module.css'
import Question from '../question/Question';
import type { IQuestion } from '@/src/lib/types';


const Quiz = ({ questions } : {questions: IQuestion[]}) => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedQuestion, setSelectedQuestion] = useState<IQuestion>(questions[0]);


  const handleAnswer = (isCorrect: boolean) => {
    questions[currentQuestion].isAnswered = true;
    if(isCorrect) setScore(score + 1);
    setCurrentQuestion(prevstate => prevstate + 1);
  }

  const handleClick = (i: number) => {
    setSelectedQuestion(questions[i]);
  }

  return (
    <div className={styles.quiz}>
      {currentQuestion < 10 && 
      <>
        <div className={styles.header}>
          <div className={styles.title}>Country Quizz</div>
          <div className={styles.score}>{score}/10</div>
        </div>
        <div className={styles.card}>
          <div className={styles.buttonList}>{questions.map((q, i) => {
            return <button key={i} onClick={() => handleClick(i)} className={`${styles.button} ${i < currentQuestion ? styles.active : ''}`}>{i + 1}</button>
            })}
          </div>
          <Question isCurrentQuestion={selectedQuestion === questions[currentQuestion]} question={selectedQuestion} handleAnswer={handleAnswer} isAnswered={selectedQuestion.isAnswered}/>
          {selectedQuestion !== questions[currentQuestion] && <button className={styles.buttonNext} onClick={() => setSelectedQuestion(questions[currentQuestion])}>Next Question</button>}
        </div>
      </>}
      {currentQuestion >= 10 && 
      <div className={styles.card}>
        <p>Congrats! You completed the quiz.</p>
        <p>You answer {score}/10 correctly</p>
        <button className={styles.replayButton} onClick={() => window.location.reload()}>Play Again</button>
      </div>}
    </div>
  )
}

export default Quiz