import styles from "./Payments.module.scss";
import room1 from "@/assets/images/room1.jpg";
// import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {IoIosArrowBack} from "react-icons/io";

export function ConfirmPay() {
    // const { state } = useLocation();
    // const [chooseRequests, setChooseRequests] = useState([]);
    // useEffect(()=>{
    //     setChooseRequests(state.chooseRequests);
    // }, [state]);

    return (
        <div id="payments" className={styles.payments}>
            <div className={styles.maintenance}>
                <div className={styles.formPay}>
                    <div className={styles.formHeader}>
                        <Link to={'/residents/payments'}><IoIosArrowBack/> Back</Link>
                        <h2>Confirm & Pay</h2>
                    </div>
                    <form action='#' method='post' className={styles.formBox}>
                        <div className={styles.formGroup}>
                            <p>Date</p>
                            <div className={styles.formElement}>
                                <div className={styles.date}>
                                    <label className={styles.labelDate} htmlFor="dateFrom">From</label>
                                    <input type="date" id='dateFrom'/>
                                </div>
                                <div className={styles.date}>
                                    <label className={styles.labelDate} htmlFor="dateTo">To</label>
                                    <input type="date" id='dateTo'/>
                                </div>
                            </div>

                        </div>

                        <div className={styles.formGroup}>
                            <p>Pay with</p>
                            <div className={styles.selectPay}>
                                <button className={styles.active}>Credit card</button>
                                <button>Paypal</button>
                                <button>Google pay</button>
                            </div>
                            <div className={styles.formElement}>
                                <input type="text" placeholder='Card number'/>
                                <input type="text" placeholder='Card holder'/>
                                <input type="text" className={styles.expirationDate} placeholder='Expiration date'/>
                                <input type="text" className={styles.eW} placeholder='eW'/>
                            </div>
                            <div className={styles.formElement}>
                                <input type="checkbox" id="saveCard"/>
                                <label className={styles.labelSaveCard} htmlFor="saveCard">Save my card for future reservation</label>
                            </div>
                        </div>
                    </form>
                    <div className={styles.formFooter}>
                        <p>By selecting the button below, i agree to the Property Rules, Terms and Conditions, Private
                            Policy and COviD-19 <br/>Safety Requirements</p>
                    </div>
                </div>
            </div>
            <div className={styles.pay}>
                <div className={styles.overall}>
                    <div className={styles.headerOverall}>
                        <h2>Payment Overall</h2>
                    </div>
                    <div className={styles.roomReview}>
                        <div className={styles.roomImg}>
                            <img src={room1} alt="room"/>
                        </div>
                        <div className={styles.reviewInfo}>
                            <span>Hotel room in US</span>
                            <p>Superior Family Room</p>
                            <div className={styles.roomNumber}>
                                <small>6 guests.</small>
                                <small>4 beds:</small>
                                <small>1 private bath</small>
                            </div>
                            <p>4.84 (324 reviews)</p>
                        </div>
                    </div>
                    <div className={styles.priceDetail}>
                        <p>Price details</p>

                    </div>
                    <div className={styles.discount}>
                        <div className={styles.discountElement}>
                            <p>New user discount</p>
                            <p style={{color: 'green'}}>$87</p>
                        </div>
                        <div className={styles.discountElement}>
                            <p>Service fee</p>
                            <p>$12</p>
                        </div>
                    </div>
                    <div className={styles.totalFee}>
                        <p>Total(USD)</p>
                        <p></p>
                    </div>
                    <div className={styles.feeDescription}>
                        <p>Free cancellation until 3:00 PM on Nov 31, 2020. More info</p>
                    </div>
                </div>
                <div className={styles.btnPayment}>
                    <button>Confirm And Pay</button>
                </div>
            </div>
        </div>
    );
}