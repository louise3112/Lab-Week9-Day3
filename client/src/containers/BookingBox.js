import { useEffect, useState } from "react";
import BookingList from "../components/BookingList";

const BookingBox = () => {

    const [listOfBookings, setListOfBookings] = useState([])



    return(
        <>
            <BookingList
            listOfBookings={listOfBookings}/>
        </>
    )
}

export default BookingBox