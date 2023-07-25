import styles from './loading.module.scss'

function Loading() {
  return (
    <div className={styles["loading-bar-spinner"]}>
      <div className={styles["spinner-icon"]}>
      </div>
    </div>

  )
}

export default Loading

