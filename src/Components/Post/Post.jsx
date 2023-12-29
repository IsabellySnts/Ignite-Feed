import styles from './Post.module.css'
export function Post(){

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img src="https://avatars.githubusercontent.com/u/94193803?v=4" />
                    <div className={styles.authorInfo}>
                        <strong>Isabelly dos Santos</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title='29 de dezembro de 2023' dateTime='2023-12-29'>Públicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p> 👉 <a href="">jane.design/doctorcare</a></p>
                <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
            </div>
        </article>
    )
}