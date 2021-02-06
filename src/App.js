import logo from './logo.svg';
import './App.css';
import styled from "styled-components";

const SampleArticles = [
  {
    'title': 'article1',
    'date': '11/11/11',
    'recommended': false,
    'body' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim \
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea \
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit \
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat \
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim \
      id est laborum.'
  },
  {
    'title': 'article2',
    'date': '11/11/11',
    'recommended': false,
    'body' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim \
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea \
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit \
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat \
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim \
      id est laborum.'
  },
  {
    'title': 'article3',
    'date': '11/11/11',
    'recommended': false,
    'body' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim \
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea \
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit \
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat \
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim \
      id est laborum.'
  },
  {
    'title': 'article4',
    'date': '11/11/11',
    'recommended': false,
    'body' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim \
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea \
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit \
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat \
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim \
      id est laborum.'
  },
  {
    'title': 'article5',
    'date': '11/11/11',
    'recommended': false,
    'body' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim \
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea \
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit \
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat \
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim \
      id est laborum.'
  },
  {
    'title': 'article6',
    'date': '11/11/11',
    'recommended': false,
    'body' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim \
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea \
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit \
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat \
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim \
      id est laborum.'
  },
  {
    'title': 'article7',
    'date': '11/11/11',
    'recommended': false,
    'body' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim \
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea \
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit \
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat \
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim \
      id est laborum.'
  },
  {
    'title': 'article8',
    'date': '11/11/11',
    'recommended': false,
    'body' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim \
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea \
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit \
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat \
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim \
      id est laborum.'
  },
  {
    'title': 'article9',
    'date': '11/11/11',
    'recommended': false,
    'body' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim \
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea \
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit \
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat \
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim \
      id est laborum.'
  },
  {
    'title': 'article10',
    'date': '11/11/11',
    'recommended': false,
    'body' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim \
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea \
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit \
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat \
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim \
      id est laborum.'
  },
  {
    'title': 'article11',
    'date': '11/11/11',
    'recommended': false,
    'body' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim \
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea \
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit \
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat \
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim \
      id est laborum.'
  },
  {
    'title': 'article12',
    'date': '11/11/11',
    'recommended': true,
    'body' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim \
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea \
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit \
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat \
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim \
      id est laborum.'
  },
  {
    'title': 'article13',
    'date': '11/11/11',
    'recommended': true,
    'body' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim \
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea \
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit \
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat \
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim \
      id est laborum.'
  },
  {
    'title': 'article14',
    'date': '11/11/11',
    'recommended': true,
    'body' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim \
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea \
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit \
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat \
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim \
      id est laborum.'
  },
  {
    'title': 'article15',
    'date': '11/11/11',
    'recommended': true,
    'body' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim \
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea \
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit \
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat \
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim \
      id est laborum.'
  }
]

function App() {
  return (
    <div className="App">
      <HelpCenter/>
    </div>
  );
}

function HelpCenter(){
  return (
    <div>
      <HCHeader>
      </HCHeader>
      <HCBody></HCBody>
    </div>
  )
}

const StyledBackground = styled.div`
  background-color: #0553E6;
  padding: 5%;
`;
const StyledTitle = styled.text`
  font-size: 25px;
  color: white;
  font-weight: bold;
`;

function HCHeader(){
  return (
    <StyledBackground>
      <StyledTitle>Puzzl | Help Center</StyledTitle>
      <div></div>
      <StyledTitle>Advice and Answers from the Puzzl Team</StyledTitle>
      <HCSearchBar></HCSearchBar>
    </StyledBackground>
  )
}

const StyledSearchBar = styled.input`
  font-size: 20px;
  width: 50%;
  height: 40px;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  border: solid white 0;
`;

const StyledSearchButton = styled.button`
  font-size: 20px;
  height: 60px;
  cursor: pointer;
  color: gray;
  background-color: white;
  border: solid white 0;
  font-weight: bold;
  border-radius: 10px;
`;

function HCSearchBar(){
  return (
    <div>
      <StyledSearchBar type='text' placeholder='Search for articles...'></StyledSearchBar>
        <span class="input-group-btn">
          <StyledSearchButton class="btn btn-default" type="button">Search</StyledSearchButton>
        </span>
    </div>
  )
}

const StyledBody = styled.div`
  background-color: #F3F5F7;
`;

const StyledArticlePreviews = styled.div`
  background-color: white;
  margin: 10px;
  width: 50%;
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

function HCArticlePreview(props){
  // const url = '/article?title='.concat(props.title);
  const url = '/article';
  return (
    <a href={url}>
      <StyledArticlePreviewElement>
        {props.title}
      </StyledArticlePreviewElement>
      <StyledArticlePreviewElement>
        {props.date}
      </StyledArticlePreviewElement>
      <StyledArticlePreviewElementBody>
        {props.body.substring(0,150)}
      </StyledArticlePreviewElementBody>
    </a>
  )
}
function HCBody(){
  const articleItems = SampleArticles.map((d) =>
    <StyledArticlePreviews key={d.title}>
      <HCArticlePreview title={d.title} date={d.date} body={d.body}></HCArticlePreview>
    </StyledArticlePreviews>
  );

  return (
    <StyledBody>
      {articleItems}
    </StyledBody>
  )
}

export default App;
