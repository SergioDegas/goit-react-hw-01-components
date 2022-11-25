import PropTypes from 'prop-types';

import {
  FriendItem,
  Status,
  UserAvatar,
  UserName,
} from './FriendListItem.styled';

export default function FriendListItem({avatar, name, isOnline}) {
  return (
    <FriendItem>
      <Status isOnline={isOnline}></Status>
      <UserAvatar src={avatar} alt="User avatar" width="48" />
      <UserName>{name}</UserName>
    </FriendItem>
  );
}


FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}