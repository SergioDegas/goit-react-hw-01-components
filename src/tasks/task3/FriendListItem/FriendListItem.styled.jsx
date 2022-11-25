import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing(2)}`};
  background-color: ${({ theme }) => `${theme.colors.white}`};
  border: solid 1px lightgrey;
  box-shadow: 10px 10px 20px -9px rgba(89, 70, 70, 17);
`;

export const Status = styled.span`
  margin-right: ${({ theme }) => `${theme.spacing(2)}`};
  border-radius: 50px;
  width: 16px;
  height: 16px;
  background-color: ${({ theme, isOnline }) =>
    `${isOnline ? theme.colors.green : theme.colors.red}`};
`;

export const UserAvatar = styled.img`
  margin-right: ${({ theme }) => `${theme.spacing(2)}`};
`;

export const UserName = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => `${theme.colors.black}`};
`;
