import BookingItem from "./BookingItem"

const BookingList = ({listOfBookings, removeBookingFromList}) => {

    const listOfBookingItems = listOfBookings.map((booking) => {
        return (
            <BookingItem booking = {booking} key = {booking._id} removeBookingFromList={removeBookingFromList}/>
        )
    })


    return(
        <ul>
            {listOfBookingItems}
        </ul>
    )
}

export default BookingList