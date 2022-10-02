import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const episodiosDirectory = path.join(process.cwd(),'episodios');

export type Episodios = {
    id: string
    [key: string]: any
}

export function getSortedEpisodiosData(): Episodios[] {
     // Get file names under /posts
     const fileNames = fs.readdirSync(episodiosDirectory);
    

     const allEpisodiosData: Episodios[]  = fileNames.map((fileName) => {
        
        //  Remove ".md" from file name to get id        
        const id = fileName.replace(/\.md$/,'');

        // Read markdown file as string
        const fullPath = path.join(episodiosDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);


        return {
            id,
            ...matterResult.data
        }

    });

    return allEpisodiosData.sort(( {date: a}, {date:b}) => {
        if(a < b) {
            return 1;
        } else if (a > b) {
            return -1;
        } else {
            return 0;
        }
    })

}