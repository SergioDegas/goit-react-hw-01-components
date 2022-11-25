import styled from 'styled-components';

export const Section = styled.section`
  padding: ${({ theme }) => `${theme.spacing(4)}`};
  width: 366px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${({ theme }) => `${theme.spacing(10)}`};
  border: solid 1px lightgrey;
  box-shadow: 10px 10px 20px -9px rgba(89, 70, 70, 17);
  border-radius: 10px;
`;

export const Title = styled.h2`
  padding: ${({ theme }) => `${theme.spacing(4)}`};
  text-align: center;
  color: ${({ theme }) => `${theme.colors.grey}`};
`;

export const StatList = styled.ul`
  padding: 0px;
  display: flex;
  justify-content: space-between;
`;

export const StatItem = styled.li`
padding: 0px;
  display: flex;
flex-direction: column;
  justify-content: center;
  align-items: center;
  width:100%;
  padding: ${({ theme }) => `${theme.spacing(2)}`};
`;

export const Label = styled.span`
  font-size: 20px;
  color: ${({ theme }) => `${theme.colors.black}`};
`;

export const Percentage = styled.span`
  font-size: 40px;
  color: ${({ theme }) => `${theme.colors.black}`};
`;
