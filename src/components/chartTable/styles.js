import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  text-align: center;
  border: 1px solid #ddd;
  border-spacing: 0;
  th,
  td {
    padding: 10px 0;
  }
`;
export const Thead = styled.thead`
  background: #ddd;
`;
export const Tbody = styled.tbody`
  background: #eee;
`;

export const ColorPickerWrapper = styled.div`
  position: relative;
`;
export const Symbol = styled.i`
  border-radius: 50%;
  display: inline-block;
  padding: 10px;
  background: ${(props) => props.color};
`;
