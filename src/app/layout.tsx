import Image from "next/image";
import styles from '@/src/app/css-compiled/scss/layout.module.css'
import type { Metadata } from "next";
import background from '../../public/bg.jpg'

export const metadata: Metadata = {
  title: "Country Quiz",
  description: "Country Quiz of the zion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <div className={styles.background}>
        <Image 
        src={background}
        alt='Background Image'/>
        </div>
        {children}
      </body>
    </html>
  );
}
