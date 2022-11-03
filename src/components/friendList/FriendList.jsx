import FriendListItem from './FriendListItem';
import css from './friendList.module.css';
export default function FriendList({ friends }) {
  return (
    <ul className={css.friendsList}>
      {friends.map(item => (
        <FriendListItem
          key={item.id}
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
        />
      ))}
    </ul>
  );
}
