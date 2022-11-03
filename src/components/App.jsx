import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
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
    </div>
  );
};
