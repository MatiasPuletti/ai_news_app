import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import alanBtn from '@alan-ai/alan-sdk-web';

import wordsToNumbers from 'words-to-numbers';

import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles.js';

const alanKey = 'e56e264dfd2b9a6d0985e467b6d2d9152e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
    const [newsArticles, setNewsArticles] = useState([]);
    const [activeArticle, setActiveArticle] = useState(-1);
    const classes = useStyles ();

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles, number }) => {
                if(command === 'newHeadlines') {
                    setNewsArticles(articles);
                    setActiveArticle(-1);
                } else if(command === 'highlight') {
                    setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
                } else if (command === 'open') {
                    const parsedNumber = number.length > 2 ? wordsToNumbers(number, { fuzzy: true }) : number;
                    const article = articles[parsedNumber - 1];

                    if(parsedNumber > 20) {
                        alanBtn().playText('Please try that again.')
                    } else if(article) {
                        window.open(article.url, '_blank');
                        alanBtn().playText('Opening... ');
                    }
                }
            }
        })
    }, [])
    return (
        <div>
            <div>
                <div className={classes.logoContainer}>
                    <img src="https://i.imgur.com/RY6Ct5D.jpg" className={classes.alanLogo} alt="alan logo" />
                    </div>
                <NewsCards articles={newsArticles} activeArticle={activeArticle}/>
            </div>
            <div className={classes.footer}>

            <Typography variant="body1" component="h2">
            Created by
            <a className={classes.link} href="https://www.linkedin.com/in/matiaspuletti/"> Matías Puletti</a>  </Typography> </div>
        </div>
    );
}

export default App;