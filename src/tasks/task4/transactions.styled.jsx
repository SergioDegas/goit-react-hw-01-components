import styled from 'styled-components';

export const Table = styled.table`
  margin-left: auto;
  margin-right: auto;
  width: 550px;
  border-radius: 5px;
  margin-bottom: ${({ theme }) => `${theme.spacing(10)}`};
  background-color: ${({ theme }) => `${theme.colors.white}`};
  border: solid 1px lightgrey;
  box-shadow: 10px 10px 20px -9px rgba(89, 70, 70, 17);
`;
export const Thead = styled.thead`

  padding: ${({ theme }) => `${theme.spacing(2)}`};
`;

export const Th = styled.th`
  background-color: ${({ theme }) => `${theme.colors.grey}`};
  padding: ${({ theme }) => `${theme.spacing(2)}`};
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  color: ${({ theme }) => `${theme.colors.white}`};

`;
export const Tr = styled.tr`

  :nth-child(2n) {
    background-color: ${({ theme }) => `${theme.colors.background}`};
  }
  :last-child {
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }
`;
export const Td = styled.td`

  text-align: center;
  padding: ${({ theme }) => `${theme.spacing(2)}`};
  color: ${({ theme }) => `${theme.colors.black}`};
`;
