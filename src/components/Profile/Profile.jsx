import PropTypes from 'prop-types';
import css from './Profile.module.css'

export const Profile = ({ userProfile: { avatar, username, tag, location, stats: { followers, views, likes } } }) => {
  return <div className={css.profile}>
    <div className={css.description}>
      <img
        src={avatar}
        alt="User avatar"
        className={css.avatar}
      />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </div>

    <ul className={css.stats}>
      <li className={css.liItem}>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>{followers}</span>
      </li>
      <li className={css.liItem}>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{views}</span>
      </li>
      <li className={css.liItem}>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{likes}</span>
      </li>
    </ul>
  </div>
}

// console.log(avatar);

Profile.propTypes = {
  userProfile: { avatar: PropTypes.string.isRequired, username: PropTypes.string.isRequired, tag: PropTypes.string.isRequired, location: PropTypes.string.isRequired, stats: { followers: PropTypes.number.isRequired, views: PropTypes.number.isRequired, likes: PropTypes.number.isRequired } },
  userProfile: PropTypes.object,

}