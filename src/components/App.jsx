// import { Profile } from "./Profile/Profile";
import { ProfileBoard } from "components/ProfileBoard/ProfileBoard";
import users from "../data/profile-user.json";

import { Statistics } from "./Statistics/Statistics";
import datastat from "../data/data.json";
console.log(datastat);

export const App = () => {
  
  return (<div>
    <section>
        <ProfileBoard profiles={users} />   
    </section>
      <Statistics stats={datastat} title="Upload stats" />
    </div>);
};
//