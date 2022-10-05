import fs from "fs";
import { Feed } from 'feed';
import RSS from "rss";
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
        language: "pt-br",
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
          author: [author],
          contributor: episodio.contributor,
          date: new Date(episodio.date),
        });
      });


      feed.addCategory("Technologie");

      fs.mkdirSync("./public/podcast/rss", { recursive: true });
      fs.writeFileSync("./public/podcast/rss/feed.xml", feed.rss2());
      fs.writeFileSync("./public/podcast/rss/atom.xml", feed.atom1());
      fs.writeFileSync("./public/podcast/rss/feed.json", feed.json1());      
}

export const generateRss = async () => {
    const episodios = await getSortedEpisodiosData();
    const siteURL = process.env.NEXT_PUBLIC_SITE_URL;
    const date = new Date();
    const author = {
        name: 'OMNUS TECH',
        email: 'developer@omnus.com.br',
        link: `${siteURL}/podcast`
    }

    
    var feed = new RSS({
        title: 'OMNUS CAST',
        description: 'Podcast da OMNUS para compartilhar conhecimento',
        feed_url: `${siteURL}/rss/feed.xml`,
        site_url: `${siteURL}/podcast`,
        image_url:`${siteURL}/images/omus-cast-logo.png`,
        copyright: `All rights reserved ${date.getFullYear()}, OMNUS`,
        language: 'pt-br',
        categories: ['Tecnologia','Technology','Outsystems'],
        pubDate: date,
        custom_namespaces: {
          'itunes': 'http://www.itunes.com/dtds/podcast-1.0.dtd'
        },
        custom_elements: [
          {'itunes:subtitle': 'Podcast da OMNUS para compartilhar conhecimento'},
          {'itunes:author': author.name},
          {'itunes:summary': 'Podcast da OMNUS para compartilhar conhecimento'},
          {'itunes:owner': [
            {'itunes:name': author.name},
            {'itunes:email': author.email}
          ]},
          {'itunes:category': [
            {_attr: {
              text: 'Technology'
            }},
            {'itunes:category': {
              _attr: {
                text: 'Outsystems'
              }
            }}
          ]}
        ]
    });



      episodios.forEach((episodio) => {
        const url = `${siteURL}/podcast/${episodio.id}`;
        feed.item({
            title: episodio.title,
            description: episodio.summary,
            url: url, // link to the item
            guid: url, // optional - defaults to url
            categories: ['Tecnologia','Technology','Outsystems'],
            author: author.name, // optional - defaults to feed author property
            date: new Date(episodio.date) // any format that js Date can parse.
        });
      });



      fs.mkdirSync("./public/podcast/rss", { recursive: true });
      fs. writeFileSync("./public/podcast/rss/feed.xml", feed.xml({ indent: true }));

}