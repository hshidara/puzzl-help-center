import './Article.css';
import styled from "styled-components";
import React from 'react';
import algoliasearch from 'algoliasearch/lite';

const searchClient = algoliasearch(
  '0RI1GYB5BY',
  'd64702d8a0775a9b1ae77975c547d43c'
);

const index = searchClient.initIndex('SampleArticles');

/*
TODO: This is an unoptimal way of rendering articles for 2 reasons:
1. Using Components instead of React Hooks, esp. the use of componentDidMount.
2. We can also store queries globally using Redux and access them from different
components like Article or App.js. Once traffic increases, we can add a caching layer
to the requests. Notice that we're initializing index in this file and App.js.
This is redundant, only one instance is needed and we can store that instance
in a global store using redux.
 */

class Article extends React.Component {
  constructor(props){
    super(props);
    const title = window.location.pathname.split('/')[2];
    this.state = {current_title: title,article: {}};
  }
  componentDidMount(){
    index.search('').then(({ hits }) => {
      const obj = hits.filter( x => x.title == this.state.current_title);
      if (obj){
        this.setState({
          article: obj[0]
        })
      }
    });
  }

  render() {
    return (
      <div>

        <div>{this.state.article.title}</div>
        <div>{this.state.article.date}</div>
        <div>{this.state.article.body}</div>
      </div>
    )
  }
}

export default Article;
