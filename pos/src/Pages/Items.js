import DefaultLayout from "../Components/DefaultLayout";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Form, Input, message, Modal, Select, Table } from "antd";

function Items() {
  const [ItemsData, setItemsdata] = useState([]);
  const [addEditModalVisibility, setAddEditModalVisibility] = useState(false);
  const dispatch = useDispatch();
  const getAllItems = () => {
    dispatch({ type: "showLoading" });
    axios
      .get("/api/items/get-all-items")
      .then((response) => {
        dispatch({ type: "hideLoading" });
        setItemsdata(response.data);
      })
      .catch((error) => {
        dispatch({ type: "hideLoading" });
        console.log(error);
      });
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Image",
      dataIndex: "image",
      render: (image, record) => (
        <img src={image} alt="" height="60" width="60" />
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Category",
      dataIndex: "category",
    },

    {
      title: "Actions",
      dataIndex: "_id",
      render: (id, record) => (
        <div>
          <DeleteOutlined className="mx-2" />
          <EditOutlined className="mx-2" />
        </div>
      ),
    },
  ];

  useEffect(() => {
    getAllItems();
  }, []);
  const onFinish = (values) => {
    dispatch({ type: "showLoading" });
    axios
      .post("/api/items/add-item", values)
      .then((response) => {
        dispatch({ type: "hideLoading" });
        message.success("Item Added Successfully");
        setAddEditModalVisibility(false);
        getAllItems();
      })
      .catch((error) => {
        dispatch({ type: "hideLoading" });
        message.error("Something went wrong");
        console.log(error);
      });
  };
  return (
    <DefaultLayout>
      <div className="d-flex justify-content-between">
        <h3>Items</h3>
        <Button type="Primary" onClick={() => setAddEditModalVisibility(true)}>
          Add Item
        </Button>
      </div>
      <Table columns={columns} dataSource={ItemsData} bordered />
      <Modal
        onCancel={() => setAddEditModalVisibility(false)}
        visible={addEditModalVisibility}
        title="Add New Item"
        footer={false}
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item name="name" label="Name">
            <Input />
          </Form.Item>

          <Form.Item name="price" label="Price">
            <Input />
          </Form.Item>

          <Form.Item name="image" label="Image URL">
            <Input />
          </Form.Item>

          <Form.Item name="category" label="Category">
            <Select>
              <Select.Option value="Dupattas">Dupattas</Select.Option>
              <Select.Option value="Saree">Saree</Select.Option>
              <Select.Option value="kurta">kurta</Select.Option>
            </Select>
          </Form.Item>

          <div className="d-flex justify-content-end">
            <Button htmlType="submit" type="primary">
              save
            </Button>
          </div>
        </Form>
      </Modal>
    </DefaultLayout>
  );
}
export default Items;
