import PropTypes from 'prop-types';
import css from "./FriendListItem.module.css"
const getAlertColor = variant => {
    switch (variant) {
        case true:
            return "green";
        case false:
            return "red";
        default:
            return "black";
    }
}

export const FriendsListItem = ({ friendsList } ) => {
    return (
        friendsList.map(el =>
            <li key={el.id} className={css.item}>
                <span className={css.status} style={{ backgroundColor: getAlertColor(el.isOnline) }}></span>
            <img className={css.avatar} src={el.avatar} alt="User avatar" width="48" />
            <p className={css.name}>{el.name}</p>
        </li>)
        )
}

FriendsListItem.propTypes = {
    friendsList: PropTypes.array.isRequired,
}
