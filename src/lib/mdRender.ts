import { marked } from "marked";
import pkg from "isomorphic-dompurify";
const { sanitize } = pkg;

export function santeizeM(mdString: string): string {
  const html: string = marked.parse(mdString).toString();
  const clean: string = sanitize(html);
  return clean;
}
