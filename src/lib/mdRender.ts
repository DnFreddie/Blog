import { marked } from 'marked';
import { sanitize } from "isomorphic-dompurify";


export function teset(){
    const html = marked.parse('# Marked in Node.js\n\nRendered by **marked**.').toString();
    const clean = sanitize(html);

    console.log(clean)




}
