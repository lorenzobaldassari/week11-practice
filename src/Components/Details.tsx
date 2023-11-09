import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";


interface propsDetail {
  id: string | undefined;
}
const Details = (props: propsDetail) => {
  const [news, setNews] = useState({
    image_url: ``,
    title: ``,
    summary: ``,
  });

  const getData = () => {
    fetch(`https://api.spaceflightnewsapi.net/v4/articles/${props.id}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(`errore nel recuper dati`);
        }
      })
      .then((data) => {
        console.log(data);
        setNews(data);
      })
      .catch((err) => {
        console.log(err, `errore`);
      });
  };

  useEffect(() => {
    getData();
  }, [props.id]);

  return (
    <>
      {news.title && (
        <Col xs={12}>
          <Card>
            <Card.Img variant="top" src={news.image_url} className="w-100" />
            <Card.Body>
              <Card.Title>{news.title}</Card.Title>
              <Card.Text className="text-length">{news.summary}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      )}
    </>
  );
};

export default Details;
