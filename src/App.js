
import { Row, Spinner } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import News from './Components/News/News';
import { useEffect, useState } from 'react';

function App() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-09-01&sortBy=publishedAt&apiKey=fdcca13ce19e4e4c931957c2114c1699')
      .then(res => res.json())
      .then(data => setNews(data.articles))
  }, []);

  return (

    < div className="App" >

      {news.length === 0 ? <Spinner animation="border" />
        : <Row xs={1} md={4} className="g-4">
          {news.map(nw => <News

            news={nw}
          ></News>)}
        </Row>}
    </div >
  );
}

export default App;
