import { deleteBooking } from "./BookingFetches"

const BookingItem = ({booking, removeBookingFromList}) => {

    const bookingStatus = () => {
        if (booking.checkedin){
            return "Checked-in"
        } else {
            return "Not checked-in"
        }
    }

    const handleDelete = () => {
        deleteBooking(booking._id)
            .then(removeBookingFromList(booking._id))
    }

    return(
        <li>
            <p>Name: {booking.name}</p>
            <p>Email: {booking.email}</p>
            <p>Booking Status: {bookingStatus()}</p>
            <button onClick={handleDelete}>Delete Booking</button>
        </li>
    )
}

export default BookingItem