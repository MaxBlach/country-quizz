'use client'

import React, { useState, useEffect } from 'react'
import { shuffle } from '@/src/lib/utils'
import Image from 'next/image';

const getDisplayedAnswers = (countriesList: Array<object>, goodAnswer: number) => {
  const answers: Array<number> = [goodAnswer];
  for(let i = 0; answers.length < 4; i++){
  const num = Math.floor(Math.random() * countriesList.length)
    if (!answers.includes(num)){ 
      answers.push(num)
    }
  }
  return shuffle(answers)
}


const Question = ({answer, countriesList, score}) => {

  const handleClick = (choosenAnswer: number) => {
    score(choosenAnswer === answer)
  }

   // État initial vide pour éviter les incohérences SSR/CSR
   const [displayedAnswers, setDisplayedAnswers] = useState<number[]>([]);
   const [isClient, setIsClient] = useState(false);

   // Générer la réponse seulement après le rendu initial
   useEffect(() => {
    setIsClient(true);
    setDisplayedAnswers(getDisplayedAnswers(countriesList, answer));
   }, [countriesList, answer]);

  if (!isClient) return null;

  return (
    <div>
      <div>
        <p>Which country this flag 
        <Image 
          src={countriesList[answer].flag}
          width={50}
          height={50}
          alt='Rigth flag'
        />
      belong to ?
      </p> 
      </div>
      {displayedAnswers?.map((a: number, i: number) => {
        return <button onClick={() => handleClick(a)} key={i}>{countriesList[a].name}</button>
      })}
    </div>
  )
}

export default Question