import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Result from "../Interfaca/interface";
import SingleArtilce from "./SingleArticle";
import Details from "./Details";

const Home = () => {
  const a=1
  const [news, setNews] = useState([]);
  const [id, setId] = useState();
  const getData = () => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(`errore nel recuper dati`);
        }
      })
      .then((data) => {
        console.log(data.results);
        setNews(data.results);
      })
      .catch((err) => {
        console.log(err, `errore`);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const setStateId = (par: any) => {
    setId(par);
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={4}>
            <Row className="g-3 mt-2 scroll">
              {news.map((y: Result) => {
                return (
                  <SingleArtilce
                    title={y.title}
                    key={y.id}
                    id={y.id}
                    image={y.image_url}
                    description={y.summary}
                    setId={setStateId}
                  />
                );
              })}
            </Row>
          </Col>
          <Col xs={8}>
            <Details id={id} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
