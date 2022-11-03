import PropTypes from 'prop-types';
import css from './friendList.module.css';
import clsx from 'clsx';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={css.item}>
      <span
        className={clsx(
          [css.status],

          isOnline ? [css.online] : [css.offline]
        )}
      ></span>
      <img className="avatar" src={avatar} alt="User avatar" width="70" />
      <p className="name">{name}</p>
    </li>
  );
}
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
