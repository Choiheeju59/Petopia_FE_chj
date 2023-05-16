import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CardList from "./CardList";
import SearchBarcm from "./SearchBarcm";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Paginationcm from "./Paginationcm";
import { Link } from "react-router-dom";

const NoticeContainer = styled.div`
  padding: 0 15px;
  max-height: 100%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const BoardWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  margin-top: 10px;
  flex-direction: column;
`;

const TitleSearchWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 5px;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 25px;
  font-weight: bold;
  margin: 0;
  text-align: center;
`;

function NoticeBoard() {
  const [session, setSession] = useState("admin"); //버튼 보이게 하기 위해 작성 추후 삭제
  //const session = sessionStorage.getItem("id"); 로그인 id 받아올 때 쓰면 됨
  const [lists, setLists] = useState([
    {
      id: 1,
      title: "테스트입니다.",
      content: "테스트입니다.",
      date: "2023-04-25",
      author: "홍길동",
      views: 10,
      comments: 3,
      thumbnailUrl:
        "https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      recommends: 10,
    },
    {
      id: 2,
      title: "테스트입니다",
      content: "테스트",
      date: "2023-04-25",
      author: "홍길동",
      views: 10,
      comments: 2,
      thumbnailUrl:
        "https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      recommends: 10,
    },
    {
      id: 3,
      title: "테스트입니다",
      content: "테스트",
      date: "2023-04-25",
      author: "admin",
      views: 10,
      comments: 5,
      thumbnailUrl:
        "https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      recommends: 10,
    },

    {
      id: 4,
      title: "테스트입니다",
      content: "테스트",
      date: "2023-04-25",
      author: "관리자",
      views: 10,
      comments: 2,
      thumbnailUrl:
        "https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      recommends: 10,
    },

    {
      id: 5,
      title: "테스트입니다",
      content: "테스트",
      date: "2023-04-25",
      author: "관리자2",
      views: 10,
      comments: 2000,
      thumbnailUrl:
        "https://images.pexels.com/photos/46024/pexels-photo-46024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      recommends: 10,
    },
  ]);

  const [filteredLists, setFilteredLists] = useState([]);

  useEffect(() => {
    axios
      .get("/lists")
      .then((response) => {
        setLists(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSearch = (query) => {
    const filteredLists = lists.filter((list) => {
      const title = list.title.toLowerCase();
      const content = list.content.toLowerCase();
      const author = list.author.toLowerCase();
      return (
        title.includes(query) ||
        content.includes(query) ||
        author.includes(query)
      );
    });
    setFilteredLists(filteredLists);
  };

  return (
    <NoticeContainer>
      <BoardWrapper>
        <TitleSearchWrap>
          <Title>공지사항</Title>
          <SearchBarcm />
        </TitleSearchWrap>
        <CardList lists={filteredLists.length > 0 ? filteredLists : lists} />
        <Link to="/write">
          {session === "admin" && (
            <Button className="mt-2" variant="primary" size="sm">
              글쓰기
            </Button>
          )}
        </Link>
        <Paginationcm />
      </BoardWrapper>
    </NoticeContainer>
  );
}

export default NoticeBoard;
