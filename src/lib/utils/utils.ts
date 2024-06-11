export type BlogPost = {
  id: string;
  uuid: string;
  title: string;
  short_desc: string;
  date: string;
  body: string;
};

export function getScrollPercentage() {
  // Get the current scroll position
  var scrollTop = window.scrollY || document.documentElement.scrollTop;
  // Get the total scrollable height
  var scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  // Calculate the scroll percentage
  var scrollPercentage = (scrollTop / scrollHeight) * 100;
  return scrollPercentage;
}
