import styles from './Todo_Heading.module.css'
const Heading = (props) => {
    return <h1 className='text-center fs-1 fw-bold'>{props.Title}</h1>
};
export default Heading;
