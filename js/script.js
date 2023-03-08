'use strict';
function titleClickHandler(event){
    console.log('Link was clicked!');
  
    /* remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
        activeLink.classList.remove('active');
    }
  
    /* add class 'active' to the clicked link */
    const clickedElement = this;
    event.preventDefault();
    clickedElement.classList.add('active');
    
    /* remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.post');

    for(let activeArticle of activeArticles){
        activeArticle.classList.remove('active');
    }
  
    /* get 'href' attribute from the clicked link */
    const articleSelector = clickedElement.getAttribute('href');
    console.log(articleSelector);
  
    /* find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(articleSelector);
    console.log(targetArticle);

    /* add class 'active' to the correct article */
    targetArticle.classList.add('active');
  }
  
  

  const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list';

function generateTitleLinks(){

  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';
  /* find all the articles and save them to variable: articles */
  const articles = document.querySelectorAll(optArticleSelector);
  
  let html = '';

  for(let article of articles){
    console.log(articles)

    /* get the article id */
    const articleId = article.getAttribute('id');
    console.log(articleId)

    /* find and get the title from the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log(linkHTML)

    /* insert link into titleList */
    titleList.innerHTML = titleList.innerHTML + linkHTML;

     /* insert link into html variable */
     html = html + linkHTML;
    }
    
  
    titleList.innerHTML = html;
  }
  

 generateTitleLinks();

 const links = document.querySelectorAll('.titles a');
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
    console.log(links)
  }

  function generateTags(){
    /* find all articles */
  
    /* START LOOP: for every article: */
  
      /* find tags wrapper */
  
      /* make html variable with empty string */
  
      /* get tags from data-tags attribute */
  
      /* split tags into array */
  
      
  
      /* START LOOP: for each tag */
  
        /* generate HTML of the link */
  
        /* add generated code to html variable */
  
      /* END LOOP: for each tag */
  
      /* insert HTML of all the links into the tags wrapper */
  
    /* END LOOP: for every article: */
  }
  
  generateTags();