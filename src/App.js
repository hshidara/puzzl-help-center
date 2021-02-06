import logo from './logo.svg';
import './App.css';
import styled from "styled-components";

import algoliasearch from 'algoliasearch/lite';
import React, { Component } from 'react';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Highlight,
  Configure,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import './App.css';

const searchClient = algoliasearch(
  process.env.REACT_APP_ALGOLIA_APPLICATION_ID,
  process.env.REACT_APP_ALGOLIA_API_KEY
);

const index = searchClient.initIndex('Articles');

const StyledBackgroundHeader = styled.div`
  background-color: #0553E6;
  padding: 5%;
  padding-right: 25%;
  padding-left: 25%;
`;
const StyledBackgroundSearch = styled.div`
  background-color: #0553E6;
  padding-right: 25%;
  padding-left: 25%;
  padding-bottom: 5%;
`;
const StyledBackgroundBody = styled.div`
  padding-right: 20%;
  padding-left: 20%;
`;
const StyledTitle = styled.text`
  font-size: 25px;
  color: white;
  font-weight: bold;
`;

function App(){
  return (
    <div>
      <StyledBackgroundHeader>
        <StyledTitle>Puzzl | Help Center</StyledTitle>
        <div></div>
        <StyledTitle>Advice and Answers from the Puzzl Team</StyledTitle>
      </StyledBackgroundHeader>
        <HCSearch></HCSearch>
    </div>
  )
}

function HCSearch(){
  return (
    <div className="ais-InstantSearch">
      <InstantSearch indexName="SampleArticles" searchClient={searchClient}>
        <div className="right-panel">
          <StyledBackgroundSearch>
            <SearchBox />
          </StyledBackgroundSearch>
          <StyledBackgroundBody>
            <Hits hitComponent={Hit} />
          </StyledBackgroundBody>
        </div>
        <div className="left-panel">
            <Configure hitsPerPage={5} />
        </div>
      </InstantSearch>
    </div>
  )
}

const StyledBody = styled.div`
  background-color: #F3F5F7;
`;

const StyledPreview = styled.a`
  background-color: gray;
  width: 50%;
  text-decoration: none;
`;

const StyledArticlePreviewElement = styled.div`
  margin: 15px;
  font-weight: bold;
  font-size: 18px;
`;
const StyledArticlePreviewElementBody = styled.div`
  margin: 15px;
  font-size: 15px;
  color: gray;
`;

function Hit(props) {
  const url = "/article".concat('/',props.hit.title)
  return (

    <StyledPreview href={url}>
      <StyledArticlePreviewElement className="hit-title">
        {props.hit.title}
      </StyledArticlePreviewElement>

      <StyledArticlePreviewElement className="hit-date">Date: {props.hit.date}</StyledArticlePreviewElement>

      <StyledArticlePreviewElementBody className="hit-body">
        {props.hit.body.substring(0,50).concat('...')}
      </StyledArticlePreviewElementBody>
    </StyledPreview>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
