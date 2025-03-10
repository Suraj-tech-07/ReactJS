import styles from './Form.module.css';
const ShowDetails = ({ details }) => {
    return <ul className="list-group">
        {
            details.map((detail, index) => {
                return <li key={index}>
                    {console.log(detail.checkBoxValue)}
                    <i>{detail.mail}</i>
                    <b>{detail.password}</b>
                    <p>Your CheckBox is Checked : <strong>{detail.checkBoxValue ? 'Yes' : 'No'}</strong></p>
                </li>
            })
        }
    </ul>
}
export default ShowDetails;