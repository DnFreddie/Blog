import { marked } from 'marked';
import { sanitize } from "isomorphic-dompurify";

export function santeizeM(mdString:string): string{
    const html :string = marked.parse(mdString).toString();
    const clean: string = sanitize(html);
    return clean
}
