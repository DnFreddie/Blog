export type BlogPost=  {
  id: string; // Unique identifier for the blog post
  uuid: string; // Universally unique identifier for the blog post
  title: string; // Title of the blog post (usually the filename)
  short_desc: string; // Short description of the blog post
  date: string; // ISO 8601 formatted date of the blog post
  body: string; // URL to the body content of the blog post
  cover_img: string; // URL to the cover image of the blog post
}
    export function getScrollPercentage() {
  // Get the current scroll position
  var scrollTop = window.scrollY || document.documentElement.scrollTop;
  // Get the total scrollable height
  var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  // Calculate the scroll percentage
  var scrollPercentage = (scrollTop / scrollHeight) * 100;
        return scrollPercentage
}
