import BookingItem from "./BookingItem"

const BookingList = ({listOfBookings}) => {

    const listOfBookingItems = listOfBookings.map((booking) => {
        return (
            <BookingItem
            booking = {booking}
            key = {booking._id}
            />
        )
    })


    return(
        <ul>
            {listOfBookingItems}
        </ul>
    )
}

export default BookingList