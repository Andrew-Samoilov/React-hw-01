// import { Profile } from "./Profile/Profile";
import { ProfileBoard } from "components/ProfileBoard/ProfileBoard";
import users from "../data/profile-user.json";

import { Statistics } from "./Statistics/Statistics";
import datastat from "../data/data.json";

import { FriendsBoard } from "./FriendsBoard/FriendsBoard";
import friendsLoad from "../data/friends.json";
// console.log(friendsLoad);

export const App = () => {
  
  return (<div>
    <section>
        <ProfileBoard profiles={users} />   
    </section>
    <Statistics stats={datastat} title="Upload stats" />
    <FriendsBoard friends={friendsLoad} />
    </div>);
};
