'use client'

import Image from 'next/image';
import type { IQuestion } from '@/src/lib/types';
import styles from '@/src/app/css-compiled/question/question.module.css'
import validIcon from '../../../public/Check_round_fill.svg';
import invalidIcon from '../../../public/Close_round_fill.svg'

const Question = ({ question, handleAnswer, isCurrentQuestion, isAnswered }: { 
  question: IQuestion; 
  handleAnswer: (isCorrect: boolean) => void;
  isCurrentQuestion: boolean;
  isAnswered: boolean;
}) => {

  return (
    <div className={styles.question}>
      <div className={styles.questionTitle}>
        <p>Which country does this flag </p><Image 
          src={question.flag}
          width={100}
          height={75}
          alt='Right flag'
        /><p> belong to ?</p> 
      </div>
      <div className={styles.buttonList}>
        {question.answers.map((a) => {
          return <button className={styles.button} 
                          disabled={!isCurrentQuestion} 
                          onClick={() => {
                            a.isSelected = true
                            return handleAnswer(a.isCorrect)}} 
                          key={a.answer}
                          >{isAnswered && a.isCorrect && (<Image src={validIcon} alt='validIcon'/>)}{a.isSelected && !a.isCorrect && (<Image src={invalidIcon} alt='invalidIcon'/>)}{a.answer}</button>
        })}
      </div>
    </div>
  )
}

export default Question