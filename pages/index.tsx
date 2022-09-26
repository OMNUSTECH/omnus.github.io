import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

const Home = () => {
  return (
    <Layout title='O M N U S { D E V }' description='OMNUS Dev Web Site' mainStyle={styles.omnus}>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
          👊🏻😎 O M N U S {` { Dev } `} <br/>by Next.js!
          </h1>

          <p className={styles.description}>
            {' '}
            <code className={styles.code}>OMNUS/Home: 🏠</code>
          </p>

          <div className={styles.grid}>
            <a href="/spotify" className={styles.card}>
              <h2>OMNUS CAST</h2>
              <p>Podcast da Omnus com foco em Desenvolvimento ⭕️ (Outsystems) </p>
            </a>
          </div>
        </main>

        <footer className={styles.footer}>
          ✌🏻 Feito por nós para para nós 
        </footer>
      </div>
    </Layout>

  )
}

export default Home
