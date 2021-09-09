/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, CSSProperties } from 'react';
import { useTypeSelector } from "../hooks/useTypeSelector";
import { useActions } from "../hooks/useActions";
import { List, Card, Spin, Space, Modal, Button } from "antd";

const { Meta } = Card;

const wrapperStyle: CSSProperties = {
  position: "fixed",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
};

export const RickRender:React.FC = () => {
  const [state, setState] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [charInfo, setCharInfo] = useState({
    created: "",
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
  });

  const showModal = (info: any):void => {
    setIsModalVisible(true);
    setCharInfo(info);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const { character, error, loading, info, filters } = useTypeSelector(
    (state) => state.rick
  );
  const { fetchCharacter } = useActions();

  const changePagination = (page: number) => {
    setState(page);
    fetchCharacter(page, filters);
  }

  useEffect(() => {
    fetchCharacter(1, filters);
  }, []);



  if (loading) {
    return (
      <div style={wrapperStyle}>
        <Space size="large">
          <Spin size="large" />
        </Space>
      </div>
    ); 
  }

  if (error) {
    return <h1>{error}</h1>
  }
  
  return (
    <div style={{ padding: "0px 20px 20px 20px" }}>
      <Modal
        title="Character details"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            OK
          </Button>,
        ]}
      >
        <p>Date created: {charInfo.created.replace(/T/gi, " ").slice(0, -5)}</p>
        <p>name: {charInfo.name}</p>
        <p>status: {charInfo.status}</p>
        <p>species: {charInfo.species}</p>
        {(() => (charInfo.type === "" ? null : <p>type: {charInfo.type}</p>))()}
        <p>gender: {charInfo.gender}</p>
      </Modal>
      <List
        itemLayout="horizontal"
        grid={{ gutter: 16, column: 4 }}
        dataSource={character}
        pagination={{
          onChange: changePagination,
          pageSize: 20,
          total: info.count,
          current: state,
          showSizeChanger: false,
        }}
        renderItem={(char) => (
          <List.Item>
            <Card
              onClick={() => showModal(char)}
              key={char.id.toString()}
              hoverable
              cover={<img alt="example" src={char.image} />}
            >
              <Meta
                title={char.name}
                description={(() =>
                  char.origin.name === "unknown" ? <br/> : char.origin.name
                )()}
              />
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
}
