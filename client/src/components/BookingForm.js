import { useState } from "react"
import { postBooking } from "./BookingFetches"
// const ObjectId = require('mongodb').ObjectId

const BookingForm = ({addBooking}) => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        checkedin: false
    })


    const inputText = (event) => {
        const newFormData = {...formData}
        newFormData[event.target.name] = event.target.value
        setFormData(newFormData)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        postBooking(formData)
            .then((data) => {
                const formWithId = {...formData}
                formWithId._id = data
                // formWithId._id = ObjectId(data)
                addBooking(formWithId)})
        setFormData({
            name: "",
            email: "",
            checkedin: false
        })


    }


    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input name="name" type="text" onChange={inputText} value={formData.name}/>
            <label htmlFor="email">Email:</label>
            <input name="email" type="text" onChange={inputText} value={formData.email}/>
            <input type="submit" value="Add Booking"/>
        </form>
    )
}

export default BookingForm