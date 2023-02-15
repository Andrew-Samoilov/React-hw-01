// import { Profile } from "./Profile/Profile";
import { ProfileBoard } from "components/ProfileBoard/ProfileBoard";
import users from "../data/profile-user.json";
// console.log(users);

export const App = () => {
  
  return (
    <section>
      <ProfileBoard profiles={users}/>
    </section>
  );
};
