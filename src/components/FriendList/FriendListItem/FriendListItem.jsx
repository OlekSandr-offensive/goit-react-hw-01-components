import PropTypes from 'prop-types';
import '../FriendList.scss';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="item">
      <span
        className="status"
        style={isOnline ? { background: 'green' } : { background: 'red' }}
      ></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
