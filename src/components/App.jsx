import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import FriendList from './friendList/FriendList';
import TransactionHistory from './transactionHistory/TransactionHistory';
import transactions from './transactionHistory/transactions.json';

import friends from './friendList/friends.json';

import data from './statistics/data.json';
import user from './profile/user.json';
export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics stats={data} title="Upload stats" />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
