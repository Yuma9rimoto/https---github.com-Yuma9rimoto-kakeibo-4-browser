import styled from "styled-components";
export const Header = () => {
  return (
    <div>
      <PageTitle>家計簿アプリ</PageTitle>
    </div>
  );
};

const PageTitle = styled.h1`
  text-align: center;
  color: blue;
`;
