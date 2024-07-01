import { marked } from "marked";
export function renderMarkdown(mdString: string) {
  const renderer = {
    heading(text, level) {
      return `
        <h${level} class="text-[#b4befe] text-xl my-4  md:text-4xl">
          ${text}
        </h${level}>
`;
    },
    image(href, title, text) {
      return `
 <div class="flex flex-col items-center justify-center rounded md:min-h-[500px] md:max-h-[400px]   px-2  my-6">
      <img src="${href}" alt="${title}" class="object-fill rounded-xl h-full w-full">
      </div>
          `;
    },
    strong(text) {
      return `<strong class="text-[#fab387]">${text}</strong>`;
    },
    em(text) {
      return `<em class="text-white">  ${text}</em>`;
    },
    codespan(code) {
      return `<code class="bg-gray-100 text-red-500 p-2 rounded overflow-auto">${code}</code>`;

    },
    br() {
      return `<br />`;
    },
    del(text) {
      return `<del>${text}</del>`;
    },
    link(href, title, text) {
      return `<a  target="_blank" rel="noopener noreferrer"      class="text-[#94e2d5] hover:underline" href="${href}" title="${title}">${text}       </a>`;
    },
    text(text) {
      return text;
    },
    paragraph(string, text) {
      return `<p class=" leading-5  sm:leading-8">${string}</p>`;
    },
        code(token ){

      return `<code class="bg-gray-100 text-red-500 p-4 rounded overflow-auto">${token}</code>`;
        },
            list(body, ordered) {
      const type = ordered ? 'ol' : 'ul';
      const listStyle = ordered ? 'list-decimal' : 'list-disc';
      return `<${type} class="${listStyle} pl-5 my-4 space-y-2">${body}</${type}>`;
    },
         listitem(text) {
      return `<li class="mb-1">${text}</li>`;
    },
  };

  const marker = marked.use({ renderer });
  const html: string = marker.parse(mdString).toString();

  return html;
}
