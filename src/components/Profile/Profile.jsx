// import PropTypes from 'prop-types';
import css from './Profile.module.css'

export const Profile = ({userProfile}) => {
    return <div className={css.profile}>
      <div className={css.description}>
        <img
          src={userProfile.avatar}
          alt="User avatar"
          className={css.avatar}
        />
        <p className={css.name}>{userProfile.username}</p>
        <p className={css.tag}>@{userProfile.tag}</p>
        <p className={css.location}>{userProfile.location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.liItem}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{userProfile.stats.followers}</span>
        </li>
        <li className={css.liItem}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{userProfile.stats.views}</span>
        </li>
        <li className={css.liItem}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{userProfile.stats.likes}</span>
        </li>
      </ul>
    </div>
}
