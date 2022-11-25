import PropTypes from 'prop-types';


import {
  StatsList,
  UserProfile,
  Description,
  UserImg,
  NameUser,
  UserInfo,
  StatsItem,
  Label,
  Quantity,
} from './task1.styled';
export default function Profile({ username, avatar, tag, location, stats, UserName }) {
  return (
    <UserProfile>
      <Description>
        <UserImg
          style={{ backgroundColor: randomHexColor() }}
          src={avatar}
          alt="User avatar"
        />
        <NameUser>{username}</NameUser>
        <UserInfo>@{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </Description>

      <StatsList>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsItem>
      </StatsList>
    </UserProfile>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};


function randomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
