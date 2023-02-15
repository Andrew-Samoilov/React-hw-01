import css from "./ProfileBoard.module.css";
import { Profile } from "../Profile/Profile";

export const ProfileBoard = ({profiles}) => {
    // console.log('1',profiles.username);
    return <div className={css.board}>
        <div><Profile userProfile={profiles} /></div>  
    </div>;
}