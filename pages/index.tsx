import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

const Home = () => {
  return (
    <Layout title='O M N U S { TECH }' description='OMNUS Dev Web Site' mainStyle={styles.omnus}>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
          👊🏻😎 O M N U S {` { TECH } `} <br/>by Next.js!
          </h1>

          <p className={styles.description}>
            {' '}
            <code className={styles.code}>OMNUS/Home: 🏠</code>
          </p>

          <div className={styles.grid}>
            <Link  href="/podcast"  passHref>              
              <Card title='OMNUS CAST' description='Podcast da Omnus com foco em Desenvolvimento ⭕️ (Outsystems)' />
            </Link>
          </div>
        </main>

        <footer className={styles.footer}>
          ✌🏻 Feito por nós para você 
        </footer>
      </div>
    </Layout>

  )
}

type Props = {
  title: string;
  description: string; 
  href?: string
}

const Card = ( {title, description ,href:passHref  } : Props ) => {
  return ( 
    <a href={passHref} className={styles.card} >
      <h2>{title}</h2>
      <p>{description}</p>  
    </a>
  )
}

export default Home
