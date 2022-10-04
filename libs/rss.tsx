import fs from "fs";
import { Feed } from 'feed';
import { getSortedEpisodiosData } from './episodios';
import dotenv from "dotenv"
dotenv.config()


export const generateRssFeed = async () => {
    const episodios = await getSortedEpisodiosData();
    const siteURL = process.env.NEXT_PUBLIC_SITE_URL;
    const date = new Date();
    const author = {
        name: 'OMNUS TECH',
        email: 'developer@omnus.com.br',
        link: siteURL
    }

    const feed = new Feed({
        title: 'OMNUS CAST',
        description: 'Podcast da OMNUS para compartilhar conhecimento',
        id: `${siteURL}`,
        link: siteURL,
        image: `${siteURL}/images/omus-cast-logo.png`,
        favicon: `${siteURL}/images/favicon.ico`,
        copyright: `All rights reserved ${date.getFullYear()}, OMNUS`,
        updated: date,
        generator: 'Next.js using Feed',
        feedLinks: {
          rss2: `${siteURL}/rss/feed.xml`,
          json: `${siteURL}/rss/feed.json`,
          atom: `${siteURL}/rss/atom.xml`,
        },
        author,
      });

      episodios.forEach((episodio) => {
        const url = `${siteURL}/podcast/${episodio.id}`;
        feed.addItem({
          title: episodio.title,
          id: url,
          link: url,
          description: episodio.summary,
          content: episodio.summary,
          author: [author],
          contributor: [author],
          date: new Date(episodio.date),
        });
      });

      fs.mkdirSync("./public/podcast/rss", { recursive: true });
      fs.writeFileSync("./public/podcast/rss/feed.xml", feed.rss2());
      fs.writeFileSync("./public/podcast/rss/atom.xml", feed.atom1());
      fs.writeFileSync("./public/podcast/rss/feed.json", feed.json1());      
}


console.log(process.env)