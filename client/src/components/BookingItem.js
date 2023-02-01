const BookingItem = ({booking}) => {

    const bookingStatus = () => {
        if (booking.checkedin){
            return(
                "Checked-in"
            )
        }
        else {
            return(
                "Not checked-in"
            )
        }
    }

    return(
        <li>
            <p>Name: {booking.name}</p>
            <p>Email: {booking.email}</p>
            <p>Booking Status: {bookingStatus()}</p>
        </li>
    )
}

export default BookingItem