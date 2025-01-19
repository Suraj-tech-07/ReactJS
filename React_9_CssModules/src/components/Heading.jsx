import styles from '../components/Heading.module.css';
var Title = (props) => {
    var value = props.title;
    return <>
        <h1 className={styles.heading_style}> {value}</h1>
    </>
}
export default Title;