import styles from './app.module.css'
import { UserCard } from './components/user-card/User-card.tsx'
import { CustomInput } from './components/custom-input/custom-input.tsx'

export const App = () => {
  return (
    <div className={styles.container}>
      <CustomInput/>
      <UserCard name={'name'} phone={'4356436432'} email={'aegraegreger@ergre'}/>
      <UserCard name={'name'} phone={'4356436432'} email={'aegraegreger@ergre'}/>
      <UserCard name={'name'} phone={'4356436432'} email={'aegraegreger@ergre'}/>
      <UserCard name={'name'} phone={'4356436432'} email={'aegraegreger@ergre'}/>
      <UserCard name={'name'} phone={'4356436432'} email={'aegraegreger@ergre'}/>
      <UserCard name={'name'} phone={'4356436432'} email={'aegraegreger@ergre'}/>
    </div>
  )
}
