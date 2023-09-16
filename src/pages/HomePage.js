import React, { useContext, useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Context } from "../contex";
import getCityWeather from "../apis/weather-api";

const HomePage = () => {
  const { weather, setWeather } = useContext(Context);
  const [city, setCity] = useState("London");

  useEffect(() => {
    const fetchWeather = async () => {
      const cityWeather = await getCityWeather(city);
      setWeather(cityWeather);
      console.log(cityWeather);
    };

    fetchWeather();
  }, [city, setWeather]);

  return (
    <div className="App d-flex align-items-center">
      <Container className="homepage">
        <Col className="text-center mt-4">
          <h1>{weather.name}</h1>
        </Col>
        <Col className="mx-3">
          <select className="search-bar rounded-pill"></select>
        </Col>
        <Col className="d-flex justify-content-center mt-3">
          <Row className="status-container bg-body d-flex justify-content-center align-items-center">
            <Col className="status-left m-1 d-flex align-items-center">
              <Col className="ms-4 fs-2 text"></Col>
              <Col className="fs-5">
                <div></div>
                <div></div>
                <div></div>
              </Col>
            </Col>
            <Col className="status-right m-1 fs-5">
              <h3>Hava Durumu</h3>
              <div></div>
              <div></div>
            </Col>
          </Row>
        </Col>
        <Col className="d-flex justify-content-center align-items-center mt-2">
          <div className="days bg-body">
            <div className="pt-4 fs-3 d-flex justify-content-center align-items-center"></div>
          </div>
        </Col>
      </Container>
    </div>
  );
};

export default HomePage;
