import styled from "styled-components";

export const PaginationDiv = styled.div`
  .page {
    padding: 10px;
    border: 1px solid #dcdcdc;
    border-radius: 6px;
    margin-right: 10px;
    cursor: pointer;
  }

  .disabled {
    cursor: not-allowed;
  }

  .active {
    border: 2px solid #000;
    font-weight: bold;
  }

  .previous {
    padding: 10px;
    border-radius: 6px;
    margin-right: 10px;
    cursor: pointer;
  }

  .break {
    padding: 10px;
  }

  .next {
    padding: 10px;
    border-radius: 6px;
    margin-right: 10px;
    cursor: pointer;
  }

  .pagination-field {
    display: flex;
    list-style: none;
    justify-content: center;
    padding-top: 25px;
    padding-bottom: 25px;
  }
`;
