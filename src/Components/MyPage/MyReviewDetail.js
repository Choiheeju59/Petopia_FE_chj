import React from "react";
import styled from "styled-components";

const ReviewDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MyReviewDetail = ({
  rating,
  compareOption,
  shopType,
  totalCost,
  reviewContent,
}) => {
  return (
    <ReviewDetailContainer>
      <p>별점: {rating}</p>
      <p>가격대비: {compareOption}</p>
      <p>상점 종류: {shopType}</p>
      <p>총 비용: {totalCost}</p>
      <p>리뷰 내용: {reviewContent}</p>
    </ReviewDetailContainer>
  );
};

export default MyReviewDetail;
