import { useEffect, useState } from "react";
import BookingList from "../components/BookingList";
import { getBookings } from "../components/BookingFetches";
import BookingForm from "../components/BookingForm";

const BookingBox = () => {

    const [listOfBookings, setListOfBookings] = useState([])

    useEffect(() => {
        getBookings()
            .then(allBookings =>{
                setListOfBookings(allBookings)
            }) 
    }, [])

    const addBooking = (booking) => {
        setListOfBookings([...listOfBookings, booking])
    } 

    const removeBookingFromList = (id) => {
        const bookingsToKeep = listOfBookings.filter(booking => booking._id !== id)
        setListOfBookings(bookingsToKeep)
    }

    return(
        <>
            <BookingForm addBooking={addBooking}/>
            <BookingList listOfBookings={listOfBookings} removeBookingFromList={removeBookingFromList}/>
        </>
    )
}

export default BookingBox