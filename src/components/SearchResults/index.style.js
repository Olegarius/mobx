import styled from '@emotion/styled';

export const SearchPage = styled.div`
  width: 100%;
  padding: 0 30px 20px;
`;

export const SearchBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 20px;
  z-index: 5;
  background: linear-gradient(rgba(256, 256, 256, 1), rgba(256, 256, 256, 0.75));
`;

export const SearchInput = styled.input`
  background-color: #FFF;
  width: 250px;
  height: 40px;
  font-size: 16px;
  font-weight: bold;
  color: #555;
  border-radius: 2px;
`;
