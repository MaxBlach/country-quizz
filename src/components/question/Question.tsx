'use client'

import Image from 'next/image';
import type { IQuestion } from '@/src/lib/types';

const Question = ({ question, handleAnswer, isCurrentQuestion }: { 
  question: IQuestion; 
  handleAnswer: (isCorrect: boolean) => void;
  isCurrentQuestion: boolean;
}) => {

  return (
    <div>
      <div>
        <p>Which country this does flag 
        <Image 
          src={question.flag}
          width={50}
          height={50}
          alt='Rigth flag'
        />
      belong to ?
      </p> 
      </div>
      {question.answers.map((a) => {
        return <button disabled={!isCurrentQuestion} onClick={() => handleAnswer(a.isCorrect)} key={a.answer}>{a.answer}</button>
      })}
    </div>
  )
}

export default Question