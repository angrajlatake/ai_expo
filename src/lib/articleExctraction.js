import { Readability } from "@mozilla/readability";
import { JSDOM } from "jsdom";

export default async function extractArticle(url) {
  try {
    const response = await fetch(url);
    const html = await response.text();
    const dom = new JSDOM(html, {
      url,
    });

    // Initialize readability
    const reader = new Readability(dom.window.document);
    const article = reader.parse();

    return article.content;
  } catch (error) {
    console.error("Error fetching or processing page:", error);
    return null;
  }
}

// // Example URL
// const url =
//   "https://www.si.com/nba/timberwolves/news/wolves-anderson-in-suns-allen-out-for-game-3-of-first-round-series"; // Replace with the URL you want to test

// extractArticle(url).then((article) => {
//   if (article) {
//     console.log("Title:", article.title);
//     console.log("Content:", article.content);
//   } else {
//     console.log("Failed to extract article.");
//   }
// });
