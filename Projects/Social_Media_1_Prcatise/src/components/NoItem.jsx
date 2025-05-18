const NoItem = ({ handleOnServerPost }) => {
    return <div className="flex-column d-flex gap-3">
        <h2>
            Sorry No Post yet...
        </h2>
        <button className="btn btn-primary" style={{ marginLeft: '20px' }} onClick={handleOnServerPost}>Get From Server</button>
    </div>
}
export default NoItem;