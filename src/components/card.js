import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  const divCard = document.createElement('div');
  const divHeadline = document.createElement('div')
  const divAuthor = document.createElement('div');
  const divIMGContainer = document.createElement('div');
  const image = document.createElement('img');
  const span = document.createElement('Span');

  divCard.classList.add('card');
  divHeadline.classList.add('headline');
  divAuthor.classList.add('author');
  divIMGContainer.classList.add('img-container');

  divHeadline.textContent = article.headline;
  image.textContent = article.authorPhoto;
  span.textContent = article.authorName;
  image.src = article.authorPhoto;

  divCard.appendChild(divHeadline);
  divCard.appendChild(divAuthor);
  divAuthor.appendChild(divIMGContainer);
  divIMGContainer.appendChild(image);
  divAuthor.appendChild(span);

  let artArray = Array.from(article)

return divCard;

}

let testObject = {headline: 'headline', authorPhoto: 'authorPhoto',authorName: 'authorName' }


Card(testObject);

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  
  axios.get(`http://localhost:5001/api/articles`)
  
  .then((response) => {
    const articles = Object.values(response.data.articles).flat();
    const container = document.querySelector(selector); 
    console.log("article", articles);
    
    articles.forEach(article => {
      
      container.appendChild(Card(article))
    });



  //   console.log(articles,'articles')
  //   const articleArrays = Object.keys(articles);
  //   console.log(articleArrays,'articles array ')

  //   articleArrays.forEach((array) => {
  //     const article = articles[array];
  //     const card = Card(article);
  //     const element = document.querySelector(selector);
  //     element.appendChild(card);
      
  //  });
  })
  .catch((error) => {
    console.error("Error", error);
  });      
};



export { Card, cardAppender }
