import styles from './custom-input.module.css'
import fontStyles from '../../styles/fonts.module.css'
import searchIcon from '../../assets/images/searchImg.svg'
import { ChangeEventHandler } from 'react'

export const CustomInput = (props: {
  onChange: ChangeEventHandler<HTMLInputElement>,
  value: string,
  onClick: () => void
}) => {
  return (
    <div className={styles.inputContainer}>
      <input type='text' className={fontStyles.inputFont} onChange={(e) => props.onChange(e)} value={props.value} />
      <button onClick={props.onClick}><img src={searchIcon} alt='search icon' /></button>
    </div>
  )
}