import styles from './OuterBox.module.css';
const OuterBox = ({ Clickcount, handleOnClick }) => {
    return (
        <div className={styles.container}>
            <h3 >The Count is </h3>
            <h2 className='text-center' >{Clickcount}</h2>
            <button className='btn btn-success' onClick={handleOnClick}>Click</button>
        </div>
    )
}
export default OuterBox;