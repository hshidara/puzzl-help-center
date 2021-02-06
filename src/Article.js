import './Article.css';
import styled from "styled-components";
import React from 'react';
import algoliasearch from 'algoliasearch/lite';

const searchClient = algoliasearch(
  process.env.REACT_APP_ALGOLIA_APPLICATION_ID,
  process.env.REACT_APP_ALGOLIA_API_KEY
);

const index = searchClient.initIndex('Articles');

/*
TODO: This is an unoptimal way of rendering articles for 2 reasons:
1. Using Components instead of React Hooks, esp. the use of componentDidMount.
2. We can also store queries globally using Redux and access them from different
components like Article or App.js. Once traffic increases, we can add a caching layer
to the requests. Notice that we're initializing index in this file and App.js.
This is redundant, only one instance is needed and we can store that instance
in a global store using redux.
 */

 const StyledBackgroundHeader = styled.div`
   background-color: #0553E6;
   padding: 5%;
   padding-right: 25%;
   padding-left: 25%;
 `;
 const StyledBackgroundBody = styled.div`
   padding-right: 20%;
   padding-left: 20%;
   margin: 10%;
   font-size: 20px;
 `;
 const StyledTitle = styled.text`
   font-size: 25px;
   color: white;
   font-weight: bold;
 `;

class Article extends React.Component {
  constructor(props){
    super(props);
    const title = window.location.pathname.split('/')[2].replace(/%20/g, " ");
    console.log(title);
    this.state = {current_title: title, article: {}};
  }
  componentDidMount(){
    index.search('').then(({ hits }) => {
      const obj = hits.filter( x => x.title == this.state.current_title);
      console.log(obj)
      if (obj){
        obj[0].title = obj[0].title.toUpperCase();
        this.setState({
          article: obj[0]
        })
      }
    });
  }

  render() {
    return (
      <div>
        <StyledBackgroundHeader>
          <StyledTitle>"{this.state.article.title}"</StyledTitle>
          <div></div>
          <StyledTitle>Created {this.state.article.date}</StyledTitle>
        </StyledBackgroundHeader>
        <StyledBackgroundBody>{this.state.article.body}</StyledBackgroundBody>
      </div>
    )
  }
}

export default Article;
