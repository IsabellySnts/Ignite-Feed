import { format, formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import { Avatar } from '../Avatar/Avatar';
import { Comment } from '../Comment/Comment';
import styles from './Post.module.css';
import { useState } from 'react';


export function Post({ author, publishedAt, content }) {

    const [comments, setComment] = useState([
        "Post muito bacana"
    ]);

    const [newCommentText, setNewCommentText] = useState('');

    const publlishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBr,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBr,
        addSuffix: true
    })


    function handleNewCreatedComment() {
        event.preventDefault();
        //copiando os valores ja existentes no array e adicionando mais 1
        setComment([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange() {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);

    }

    function deleteComment(commentToDelete) {
        const commentsDeleted = comments.filter(comment =>{
            return comment != commentToDelete
        })
        setComment(commentsDeleted);
        
    }

    function handleNewCommentInvalid (){
        event.target.setCustomValidity('Esse campo é obrigatório');
    }


    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publlishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>
            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    } {

                    }
                })}
            </div>
            <form onSubmit={handleNewCreatedComment} className={styles.commentForm}>
                <strong>Deixe seu Feedback</strong>
                <textarea
                    name='comment'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    placeholder='Deixe um comentário'
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button type='submit' disabled={newCommentText.length === 0}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment
                            key={comment}
                            content={comments}
                            deleteComment={deleteComment} />
                    )
                })}

            </div>
        </article>
    )
}