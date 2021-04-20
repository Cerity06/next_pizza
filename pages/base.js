import styles from '../styles//Home.module.css'
import Base from '../components/Base'

const base = () => {
    return (
        <div className={styles.base}>
            <h4>Step 1: Choose Your Base</h4>
            <Base />
        </div>
    )
}

export default base
