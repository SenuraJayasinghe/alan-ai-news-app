import './App.css';
import { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import wordsToNumbers from 'words-to-numbers'
import NewsCards from './components/NewsCards/NewsCards';


const alanKey = 'fb71fbef48ffae072328d34a56f45c3d2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App =() => {
  const [newsArticles, setNewsArticles] = useState([]);
   const [activeArticle, setActiveArticle] = useState([-1]);
  useEffect(() => {
    function updateScreen(time) {
        // Make visual updates here.
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles, number }) => {
                if (command === 'newHeadLines') {
                  setNewsArticles (articles);
                   setActiveArticle(-1);
                 
                }
                 else if(command === 'highlight') {
                     setActiveArticle((prevActiveArticle)=> prevActiveArticle + 1 );
                }
                else if(command === 'open') {
                 const parsedNumber = number.length > 2 ? wordsToNumbers(number, {fuzzy: true}) : number;
                 const article = articles[parsedNumber - 1];

                 if (parsedNumber > articles.length) {
                  alanBtn.playText('Please try that again...');
                } else if (article) {
                  window.open(article.url, '_blank');
                  alanBtn.playText('Opening...');
                } else {
                  alanBtn.playText('Please try that again...');
                
                 }
                }
            }
        })
    }

    requestAnimationFrame(updateScreen);
}, [])

  return (
    <div className='bg-img'>
    <div className='heading'>
     <h1>Alan AI Web App Integration</h1>
    </div>
    <div className='instructions'>
     <h3>Say "open article number *number* to visit article page</h3>
     <h4>(Enable popups if page does not open)</h4>
    </div>
    <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
    
    
  )
}

export default App;

//  line 39
