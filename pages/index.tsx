import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>O M N U S {'{ D E V }'}</title>
        <meta name="description" content="OMNUS Dev Web Site" />        
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />        
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        👊🏻😎 O M N U S {` { Dev } `} <br/>by Next.js!
        </h1>

        <p className={styles.description}>
           {' '}
          <code className={styles.code}>OMNUS/Home: 🏠</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Omnus Cast &rarr;</h2>
            <p>Podcast da Omnus com foco em Desenvolvimento ⭕️ (Outsystems) </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
          Feito por nós para para nós ✌🏻
      </footer>
    </div>
  )
}

export default Home
