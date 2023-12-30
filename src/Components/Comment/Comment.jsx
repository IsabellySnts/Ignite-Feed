import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from '../Avatar/Avatar'
import { useState } from 'react'
export function Comment({ content, deleteComment }) {

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        deleteComment(content)
    }

    function handleLikeComment(){
        setLikeCount(likeCount + 1);
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/94193803?v=4" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Isabelly dos Santos</strong>
                            <time title='29 de dezembro de 2023' dateTime='2023-12-29'>Cerca de 1h atrás</time>
                        </div>
                        <button
                            onClick={handleDeleteComment}
                            title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}