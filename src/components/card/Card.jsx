import styles from './Card.module.css'

const Card = ({title, image, content}) => {
  return (
    <div className={styles.card}>
        <img src={ image } alt="" style={{width: '70px'}}/>
          <h4>{ title }</h4>
          <p>{ content }</p>
    </div>
  )
}

export default Card
