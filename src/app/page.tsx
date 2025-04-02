import Quiz  from '@/src/components/quiz/Quiz';
import styles from '@/src/app/css-compiled/page.module.css'
import type { IQuestion } from '../lib/types';

const response = await fetch('http://localhost:3000/api/countries').then(res => res.json());
const questions:IQuestion[] = await response

export default function Home() {

  return (
    <div className={styles.center}>
      <Quiz questions={questions}/>
    </div>
  );
}
