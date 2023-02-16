import { ProfileBoard } from "components/ProfileBoard/ProfileBoard";
import users from "../data/profile-user.json";

import { Statistics } from "./Statistics/Statistics";
import datastat from "../data/data.json";

import { FriendsBoard } from "./FriendsBoard/FriendsBoard";
import friendsLoad from "../data/friends.json";

import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import transactionLoad from "../data/transactions.json"
// console.log(transactionLoad);

export const App = () => {
  
  return (<div>
    <section>
        <ProfileBoard profiles={users} />   
    </section>
    <Statistics stats={datastat} title="Upload stats" />
    <FriendsBoard friends={friendsLoad} />
    <TransactionHistory items={transactionLoad} />
    </div>);
};
