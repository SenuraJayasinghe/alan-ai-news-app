import React from 'react';
import {Grid, Grow, Typography} from '@mui/material'
import NewsCard from '../NewsCard/NewsCard';
import useStyles from './styles'

import './style1.css'

const infoCards = [
    { color: '#5e35b1', title: 'Latest News', text: 'Give me the latest news' },
    { color: '#4527a0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
    { color: '#303f9f', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
    { color: '#311b92', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
  ];

const NewsCards = ( {articles, activeArticle} ) => {
    const classes = useStyles();

      if(!articles.length){
          return (
            <Grow in>
            <Grid className="container" container alignItems="stretch" spacing={3}>
              {infoCards.map((infoCard) => (
                <Grid item xs={12} sm={6} md={4} lg={3} className="infoCard">
                  <div className="card1" style={{ backgroundColor: infoCard.color }}>
    
                    <Typography variant="h5" component="h5">{infoCard.title}</Typography>
                    {infoCard.info ? <Typography variant="h6" component="h6"><strong>{infoCard.title.split(' ')[2]}</strong>: <br />{infoCard.info}</Typography> : null}
                    <Typography variant="h6" component="h6">Try saying: <br /> <i>{infoCard.text}</i></Typography>
                    
                  </div>
                </Grid>
              ))}
            </Grid>
          </Grow>
        );
      }
    return (
        <Grow in>
            <Grid  className= 'container' container alignItems= "stretch" spacing={3}>
            {articles.map((article, i) => (
                <Grid  item xs = {12} sm={6} md={4} lg={3} >
                <NewsCard article={article} activeArticle={activeArticle} i={i}  />
                </Grid>
            ))}
            </Grid>
          
        </Grow>
    );
} 

export default NewsCards;