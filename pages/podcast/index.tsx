import Layout from "../../components/Layout";
import Image from "next/image";
import { GetStaticProps } from "next";
import styles from "../../styles/Podcast.module.css";
import { getSortedEpisodiosData, Episodios } from "../../libs/episodios";
import Date from "../../components/date";

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
              <article className={styles.pod_article}>
                <aside className={styles.pod_art_thumb}>
                  <div className={styles.pod_art_thumb_box}>
                    <Image
                      src="/images/omnus-thumb-podcast.png"
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
                  <p className={styles.pod_art_head_descri}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    aperiam necessitatibus error architecto dolorum saepe minus
                    eaque, libero magnam beatae rerum enim, accusamus natus eos
                    ullam unde cumque ut tenetur.
                  </p>
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
  return {
    props: {
      allEpisodiosData,
    },
  };
};

export default Podcast;
