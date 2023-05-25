import style from './Loading.module.css'

const Loading = () => {
  return (
    <div className={style.spinnerContainer}>
      <span className={style.spinner}></span>
    </div>
  )
}

export default Loading
