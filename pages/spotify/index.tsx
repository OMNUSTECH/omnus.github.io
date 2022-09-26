import Layout from "../../components/Layout"
import Image from "next/image"
import styles from '../../styles/Spotify.module.css'


const Spotify = () => {
    return (
        <Layout title="OMNUS CAST" description="Podcast da OMNUS" mainStyle={styles.omnus}>
            <div className={styles.app}>
                <aside className={styles.brand}>

                        <Image src="/images/omnus-cast-fone.png" className={styles.brand_logo}  layout='fill' objectFit='contain' alt="Omnus Cast logo" />

                    
                </aside> 
                <div className={styles.podcast}>
                    <article className={styles.pod_article}>
                        <aside className={styles.pod_art_thumb}>
                            <div className={styles.pod_art_thumb_box}>
                                <Image src="/images/omnus-thumb-podcast.png" height="112px" width="112px"  alt="thumbnail" />
                            </div>                    
                        </aside>
                        <header className={styles.pod_art_header}>
                            <time dateTime="2017-10-04" className={styles.pod_art_head_date}>4 October 2017</time>
                            <h2 className={styles.pod_art_head_title}>The Planet Earth</h2>
                            <p className={styles.pod_art_head_descri}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aperiam necessitatibus error architecto dolorum saepe minus eaque, libero magnam beatae rerum enim, accusamus natus eos ullam unde cumque ut tenetur.</p>
                        </header>               
                    </article>
                    
                </div>
            </div>            
        </Layout>
    )
}

export default Spotify