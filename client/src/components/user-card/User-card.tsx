import styles from './user-card.module.css'
import fontStyles from '../../styles/fonts.module.css'
import phoneIcon from '../../assets/images/phoneImg.svg'
import messageIcon from '../../assets/images/messageImg.svg'

export const UserCard = (props: { name: string, phone: string, email: string }) => {
  return (
    <div className={styles.card}>
      <h3 className={`${fontStyles.headingFont}`}>
        {props.name}
      </h3>
      <ul className={styles.infoBox}>
        <li className={styles.item}>
          <img src={phoneIcon} alt='phone icon'/>
          <p className={fontStyles.tinyFont}>{props.phone}</p>
        </li>
        <li className={styles.item}>
          <img src={messageIcon} alt='message icon'/>
          <p className={fontStyles.tinyFont}>{props.email}</p>
        </li>
      </ul>
    </div>
  )
}