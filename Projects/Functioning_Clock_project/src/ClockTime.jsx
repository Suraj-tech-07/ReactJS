var Time = ({ timeToShow, UpadteTime }) => {


    setInterval(() => {
        const time = Date();
        const checkTime = time.replace("GMT+0530 (India Standard Time)", "");
        if (timeToShow !== checkTime) {
            UpadteTime(checkTime);
        }
    }, 1000);
    return <div className="time">
        <p className="showTime">
            <strong className="fs-4">{timeToShow}</strong>
        </p>
    </div>
}
export default Time;