import { renderMarkdown } from "$lib/mdRender"
//#53FFEB]
//#211C2D
//<img src="${href}" alt="${text}" title="${title}" class="max-w-full" />


import { redirect } from '@sveltejs/kit';


export async function load() {
	throw redirect(302,"/")
// const text = `

// `

// const md = renderMarkdown(text)


//   return {
//     mRender:md ,
//   };
 }


