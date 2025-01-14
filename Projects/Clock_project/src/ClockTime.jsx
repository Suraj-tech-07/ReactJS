var Time = () => {

    const date = new Date();

    // Helper function to add a leading zero if needed
    function formatWithLeadingZero(value) {
        return String(value).padStart(2, "0");
    }

    // Extract components of the date and time
    const day = formatWithLeadingZero(date.getDate());
    const month = formatWithLeadingZero(date.getMonth() + 1); // Months are zero-based
    const year = date.getFullYear();

    const hour = date.getHours();
    const minutes = formatWithLeadingZero(date.getMinutes());
    const seconds = formatWithLeadingZero(date.getSeconds());

    // Determine AM or PM
    const postfix = hour >= 12 ? "PM" : "AM";

    // Convert hour to 12-hour format
    const formattedHour = formatWithLeadingZero(hour % 12 || 12);

    return <div className="time">
        <p className="showTime">
            This is the current time : {day}/{month}/{year} - {formattedHour}:{minutes}:{seconds} {postfix}
        </p>
    </div>
}
export default Time;