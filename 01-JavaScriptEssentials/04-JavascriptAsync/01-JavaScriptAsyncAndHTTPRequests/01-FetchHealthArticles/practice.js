/**
 * == Practice Task ==
 * 1) In this task, you need to create XMLHttpRequest to fetch data for news
 * article.
 * 2) For this you need to create one json file for news article just like you
 * have worked with health.json.
 * 3) Create javaScript code using XMLHttpRequest. For this you need to create
 * object for xhr and define variable named url and assign link for json file.
 * 4) Create javascript code to fetch news article from step 3 to step 6
 * provided in the previous lab instructions.
 */


let xhr = new XMLHttpRequest();
const url = "articles.json";
xhr.open("GET", url, true);
xhr.responseType = "json";

xhr.onload = function () {
  const articles = xhr.response.articles;
  const articlesDiv = document.getElementById("articlesDiv");

  articles.forEach(article => {

    const section = document.createElement('section');

    const title = document.createElement('h2');
    title.textContent = article.title;
    section.appendChild(title);

    const byLine = document.createElement('h3');
    byLine.innerHTML =
      `by <strong>${article.author}</strong>, <em>${article.date}</em`;
    section.appendChild(byLine);

    article.text.forEach(paragraph => {
      const para = document.createElement('p');
      let paraText = "";
      paragraph.forEach(sentence => {
        paraText += sentence + ' ';
      });
      para.textContent = paraText;
      section.appendChild(para);
    });

    articlesDiv.appendChild(section);
  });
};

xhr.send();
