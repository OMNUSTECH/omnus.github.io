import { GetStaticProps,GetStaticPaths } from 'next'
import Image from "next/image"
import Layout from "../../components/Layout"
import style from "../../styles/Episodio.module.css"
import {Episodios, getAllEpisodiosIds, getEpisodioData} from "../../libs/episodios"
import Date from "../../components/Date"
import Link from "next/link"


type Props = {
    episodio?: Episodios
    erros?: string
}


const Episodio = ( { episodio, erros }: Props ) => {
    if(erros) {
        return (
            <Layout title="Error | Episodio não encontrado">
                <p>
                    <span style={{ color: 'red' }}>Error:</span> {erros}
                </p>
                <Link href="/podcast">{"<- Back to Home"}</Link>
            </Layout>
        )      
    }
    return (
        
        <Layout title={`OMNUS CAST | ${episodio?.title}`} description={episodio?.summary}>
            <div className={style.detail}>
                <div className={style.detail_thumb_box}>
                    <Image src={episodio?.thumbnail} width="212px"height="212px" about="thumbnail" />
                </div>
                <h2 className={style.detail_head_title}>{episodio?.title}</h2>
                <Date dateString={episodio?.date} className={style.detail_head_date}/>
                <div className={style.detail_head_descri} dangerouslySetInnerHTML={{ __html: episodio?.html }} />
                <Link href="/podcast">{"<- Back to Home"}</Link>
            </div>
        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllEpisodiosIds()
  
    return { paths, fallback: false }
  }


export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
      const episodio =  await getEpisodioData(params?.id as string)
      return { props: { episodio } }
    } catch (err: any) {
      return { props: { errors: err.message } }
    }
  }


export default Episodio