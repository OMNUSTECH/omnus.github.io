import Layout from "../../components/Layout";
import Image from "next/image";
import { GetStaticProps } from "next";
import styles from "../../styles/Podcast.module.css";
import { getSortedEpisodiosData, Episodios } from "../../libs/episodios";
import {generateRss} from "../../libs/rss";
import Date from "../../components/Date";
import Link from "next/link";


type Props = {
  allEpisodiosData: Episodios[];
};

const Podcast = ({ allEpisodiosData }: Props) => {
  return (
    <Layout
      title="OMNUS CAST"
      description="Podcast da OMNUS"
      mainStyle={styles.omnus}
    >
      <div className={styles.app}>
        <aside className={styles.brand}>
          <img
            src="/images/omnus-cast-fone.png"
            className={styles.brand_logo}
            alt="Omnus Cast logo"
          />
        </aside>

        <div className={styles.podcast}>
          {allEpisodiosData?.map((episodio) => {
            return (
              <article key={episodio.podcast} className={styles.pod_article}>
                <aside className={styles.pod_art_thumb}>
                  <div className={styles.pod_art_thumb_box}>
                    <Image
                      src={episodio.thumbnail}
                      height="112px"
                      width="112px"
                      alt="thumbnail"
                    />
                  </div>
                </aside>
                <header className={styles.pod_art_header}>
                  <Date dateString={episodio.date} className={styles.pod_art_head_date} />
                  <h2 className={styles.pod_art_head_title}>
                    {episodio.title}
                  </h2>
                  <Link href={`/podcast/${episodio.id}`}>
                    <a href="">
                    <p  className={styles.pod_art_head_descri}>
                      {episodio.summary}
                    </p>
                    </a>
                  </Link>
                </header>
              </article>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allEpisodiosData: Episodios[] = getSortedEpisodiosData();

  generateRss()

  return {
    props: {
      allEpisodiosData,
    },
  };
};

export default Podcast;
