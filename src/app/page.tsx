import Quiz  from '@/src/components/quiz/Quiz';
import styles from '@/src/app/css-compiled/scss/page.module.css'
import type { IQuestion } from '../lib/types';


export default async function Home() {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/countries`, {
    cache: 'no-store'
  })
  const questions: IQuestion[] = await res.json()

  return (
    <div className={styles.center}>
      <Quiz questions={questions}/>
    </div>
  );
}
