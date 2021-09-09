import React from 'react';
import { Form, Select, Input, Button } from "antd";
import { useTypeSelector } from '../hooks/useTypeSelector';
import { useActions } from '../hooks/useActions';
import {  RickFilters } from "../types/rick";

const { Option } = Select;

export const FilterCharacters:React.FC = () => {

  const { filters } = useTypeSelector(
    (state) => state.rick
  );

  const { fetchCharacter, changeFilters } = useActions();

  const onValuesChangeHandler = (values: RickFilters) => {
    changeFilters({
      ...filters,
      ...values,
    });
  };

  const onFinish = () => {
    fetchCharacter(1, filters);
  };

  return (
    <div style={{ padding: "20px 20px 0px 20px" }}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onValuesChange={onValuesChangeHandler}
        autoComplete="off"
      >
        <Input.Group compact>
          <Form.Item
            name="name"
            style={{ display: "inline-block", marginRight: "10px" }}
          >
            <Input style={{ width: 200 }} placeholder="insert name"></Input>
          </Form.Item>
          <Form.Item
            name="type"
            style={{ display: "inline-block", marginRight: "10px" }}
          >
            <Input style={{ width: 200 }} placeholder="insert type"></Input>
          </Form.Item>
          <Form.Item
            name="status"
            style={{ display: "inline-block", marginRight: "10px" }}
          >
            <Select style={{ width: 200 }} placeholder="select status">
              <Option value="">not selected</Option>
              <Option value="alive">alive</Option>
              <Option value="dead">dead</Option>
              <Option value="unknown">unknown</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="species"
            style={{ display: "inline-block", marginRight: "10px" }}
          >
            <Input style={{ width: 200 }} placeholder="insert species" />
          </Form.Item>
          <Form.Item
            name="gender"
            style={{ display: "inline-block", marginRight: "10px" }}
          >
            <Select style={{ width: 200 }} placeholder="select gender">
              <Option value="">not selected</Option>
              <Option value="female">female</Option>
              <Option value="male">male</Option>
              <Option value="genderless">genderless</Option>
              <Option value="unknown">unknown</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Input.Group>
      </Form>
    </div>
  );
}
