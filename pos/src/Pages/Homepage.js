import React, { useEffect, useState } from "react";
import DefaultLayout from "../Components/DefaultLayout";
import axios from "axios";
import Item from "../Components/Item";
import { Row, Col } from "antd";
import "../Resources/items.css";
function Homepage() {
  const [ItemsData, setItemsdata] = useState([]);
  const getAllItems = () => {
    axios
      .get("/api/items/get-all-items")
      .then((response) => {
        setItemsdata(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getAllItems();
  }, []);
  return (
    <DefaultLayout>
      <Row gutter={20}>
        {ItemsData.map((item) => {
          return (
            <Col xs={24} lg={6} sm={6} md={12}>
              <Item item={item} />
            </Col>
          );
        })}
      </Row>
    </DefaultLayout>
  );
}

export default Homepage;
