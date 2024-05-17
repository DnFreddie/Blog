import { marked } from "marked";

export function santeizeM(mdString: string): string {
  const html: string = marked.parse(mdString).toString();
  return html;
}
