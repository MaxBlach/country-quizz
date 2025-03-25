'use client'

import Quiz  from '@/src/components/Quiz';
import styles from "./page.module.css";

const response = await fetch('http://localhost:3000/api/countries').then(res => res.json())
const data = await response

export default function Home() {

  return (
    <div className={styles.page}>
      <Quiz countriesList={data}/>
    </div>
  );
}
