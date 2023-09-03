import React, { useContext } from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Context } from "../contex";

const HomePage = () => {
  const { weather } = useContext(Context);
  return (
    <div className="App d-flex align-items-center">
      <Container className="homepage">
        <Col className="text-center mt-4">
          <h1>{weather.city}</h1>
        </Col>
        <Col className="mx-3">
          <select className="search-bar rounded-pill"></select>
        </Col>
        <Col className="d-flex justify-content-center mt-3">
          <Row className="status-container bg-body d-flex justify-content-center align-items-center">
            <Col className="status-left m-1 d-flex align-items-center">
              <Col className="ms-4 fs-2 text">{weather.heat}°C</Col>
              <Col className="fs-5">
                <div>Yağış:{weather.precipitation}</div>
                <div>Nem:{weather.moisture}</div>
                <div>Rüzgar:{weather.wind}</div>
              </Col>
            </Col>
            <Col className="status-right m-1 fs-5">
              <h3>Hava Durumu</h3>
              <div>{weather.day}</div>
              <div>{weather.weather}</div>
            </Col>
          </Row>
        </Col>
        <Col className="d-flex justify-content-center align-items-center mt-2">
          <div className="days bg-body">
            <div className="pt-4 fs-3 d-flex justify-content-center align-items-center">
              {weather.weekdays.map((day, index) => (
                <div className="m-3" key={index}>
                  {day}
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Container>
    </div>
  );
};

export default HomePage;
