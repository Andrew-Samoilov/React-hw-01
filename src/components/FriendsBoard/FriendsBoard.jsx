import PropTypes from 'prop-types';
import css from "./FriendsBoard.module.css"
import { FriendsListItem } from "../FriendListItem/FriendListItem";

export const FriendsBoard = ( {friends} ) => {
    return <div className={css.friends}>
            <ul className={css.friendList}>
          <FriendsListItem friendsList={friends}/>
            </ul>
        </div>;
}

FriendsBoard.propTypes = {
  friends: PropTypes.array.isRequired,
}
