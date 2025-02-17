import React, { useState } from 'react'
import { Card, CardBody, CardTitle, CardFooter } from "reactstrap"
import "../Resources/TicketBooking.css"
import PaymentModal from './PaymentModal';

const Sidebar = ({ basketinfo, ticketalert }) => {

    const toggleHidden = () => {

        setPayModal(!payModal);
    }


    const [payModal, setPayModal] = useState(false);

    const purchaseTickets = () => {
        if (basketinfo.moviename == null) {
            ticketalert(true);
            ticketAlertOff();
        } else {
            toggleHidden();
            console.log(basketinfo);
        }
    }

    const ticketAlertOff = () => {
        setTimeout(() => {
            ticketalert(false);
        }, 4000);
    }


    return (
        <>
            <div className=" border-right" id="bookingside" style={{ backgroundColor: "black" }}>
                <Card style={{ backgroundColor: "gold" }}>
                    <CardBody style={{ backgroundColor: "gold" }}>
                        <CardTitle><h2>My Basket:</h2></CardTitle>
                        <hr className="basketHr" />
                        <div>
                            <div className="row">
                                <div className="col-6">
                                    <h6 style={{ backgroundColor: "" }}><b>Ticket Holder Name:</b></h6>
                                </div>
                                <div className="col-6">
                                    <p className="shoppingPara" >{basketinfo.bookername}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <h6 style={{ backgroundColor: "" }}><b>Movie Title:</b></h6>
                                </div>
                                <div className="col-6">
                                    <p className="shoppingPara">{basketinfo.moviename}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <h6 style={{ backgroundColor: "" }}><b>Adult Tickets:</b></h6>
                                </div>
                                <div className="col-6">
                                    <p className="shoppingPara">{basketinfo.adultseats}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <h6 style={{ backgroundColor: "" }}><b>Child Tickets:</b></h6>
                                </div>
                                <div className="col-6">
                                    <p className="shoppingPara">{basketinfo.childseats}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <h6 style={{ backgroundColor: "" }}><b>Deluxe Seats:</b></h6>
                                </div>
                                <div className="col-6">
                                    <p className="shoppingPara">{basketinfo.deluxe}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <h6 style={{ backgroundColor: "" }}><b>Screening Time:</b></h6>
                                </div>
                                <div className="col-6">
                                    <p className="shoppingPara">{basketinfo.time}</p>
                                </div>
                            </div>
                            <hr className="basketHr" />
                            <div className="row">
                                <div className="col-6">
                                    <h6 style={{ backgroundColor: "" }}><b>Total cost:</b></h6>
                                </div>
                                <div className="col-6">
                                    <p className="shoppingPara">£{basketinfo.totalCost}</p>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                    <CardFooter className="text-muted">
                        <div className="row">
                            <div className="offset-md-8">
                                <button className="btn btn-warning" onClick={purchaseTickets} style={{ borderColor: "black", display: "flex", justifyContent: "flex-end", }}>Purchase
                    </button>
                            </div>
                        </div>

                    </CardFooter>
                </Card>
            </div>
            <PaymentModal hidden={payModal} sethidden={setPayModal} />
        </>
    )
}

export default Sidebar
