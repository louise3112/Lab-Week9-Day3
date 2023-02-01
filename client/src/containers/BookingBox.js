import { useEffect, useState } from "react";
import BookingList from "../components/BookingList";
import { getBookings } from "../components/BookingFetches";

const BookingBox = () => {

    const [listOfBookings, setListOfBookings] = useState([])

    useEffect(() => {
        getBookings()
            .then(allBookings =>{
                setListOfBookings(allBookings)
            }) 
    }, [])



    return(
        <>
            <BookingList
            listOfBookings={listOfBookings}/>
        </>
    )
}

export default BookingBox