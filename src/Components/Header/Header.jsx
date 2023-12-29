import styles from './Header.module.css'
import igniteLogo from '../../Assets/igniteLogo.svg'
export function Header(){

    return(
        <div className={styles.header}>
            <img src={igniteLogo} alt="Logotipo do Ignite" />
            <strong>Ignite Feed</strong>
            
        </div>
    )
}