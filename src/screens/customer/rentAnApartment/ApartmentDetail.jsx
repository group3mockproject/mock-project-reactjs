import styles from "./ApartmentDetail.module.scss";
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {apartmentList} from "@/data/apartment.js";
import {FaImages, FaRegCalendar} from "react-icons/fa";
import {MdOutlineOutdoorGrill, MdPets} from "react-icons/md";
import {TiThermometer} from "react-icons/ti";
import {TbParkingCircleFilled} from "react-icons/tb";
import {IoWaterSharp} from "react-icons/io5";
import {BsQuestionCircle} from "react-icons/bs";

export function ApartmentDetail() {
    const { id } = useParams();
    const [apartment, setApartment] = useState(null);

    useEffect(() => {
        setApartment(apartmentList[id]);
    },[id])

    return (
        <div id='apartmentDetail' className={styles.apartmentDetail}>
            {apartment &&
                <>
                    <div className={styles.apartmentInfo}>
                        <div className={styles.listImages}>
                            <div className={styles.mainImage}>
                                <img src={apartment.images[0]} alt={`apartment${id}`}/>
                            </div>
                            <div className={styles.childImages}>
                                <img className={styles.imgSecond} src={apartment.images[1]} alt={`apartment${id}`}/>
                                <img className={styles.imgThird} src={apartment?.images[2]} alt={`apartment${id}`}/>
                                <div className={styles.showMore}>
                                    <FaImages/> {apartment.images.length - 3}+
                                </div>
                            </div>
                        </div>
                        <div className={styles.information}>
                            <p className={styles.apartmentName}>{apartment.name}</p>
                            {apartment.discount ?
                                <div className={styles.apartmentFee}>
                                    <p className={`${styles.fee} ${styles.old}`}>{apartment.rentFee}$</p>
                                    <p className={styles.discount}>{apartment.rentFee * (1 - apartment.discount)}$</p>
                                </div>
                                :
                                <div className={styles.apartmentFee}>
                                    <p className={styles.fee}>{apartment.rentFee}</p>
                                </div>
                            }
                            <p className={styles.apartmentLocation}>{apartment.location}</p>
                        </div>

                        <div className={styles.highlight}>
                            <p className={styles.title}>Home Highlight</p>
                            <div className={styles.highlightList}>
                                <div className={styles.highlightItem}>
                                    <p><MdPets/> Pets</p>
                                    <p className={styles.highlightContent}>No</p>
                                </div>
                                <div className={styles.highlightItem}>
                                    <p><TiThermometer/> A/C</p>
                                    <p className={styles.highlightContent}>Contact manager</p>
                                </div>
                                <div className={styles.highlightItem}>
                                    <p><TbParkingCircleFilled/> Parking</p>
                                    <p className={styles.highlightContent}>Contact manager</p>
                                </div>
                                <div className={styles.highlightItem}>
                                    <p><IoWaterSharp/> Utilities Included</p>
                                    <p className={styles.highlightContent}>Contact manager</p>
                                </div>
                                <div className={styles.highlightItem}>
                                    <p><MdOutlineOutdoorGrill/> Outdoor</p>
                                    <p className={styles.highlightContent}>Contact manager</p>
                                </div>
                                <div className={styles.highlightItem}>
                                    <p><FaRegCalendar/> Listed</p>
                                    <p className={styles.highlightContent}>111 days ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.rentApartment}>
                        <form action="#" className={styles.rentForm}>
                            <div className={`${styles.formGroup} ${styles.btnSubmit}`}>
                                <button>Rent</button>
                            </div>
                            <div className={styles.formGroup}>
                                <div className={styles.apartmentName}>
                                    <p className={styles.name}>{apartment.name}</p>
                                    <p>(385) 758-5621</p>
                                </div>
                                <div className={`${styles.formElement} ${styles.elementName}`}>
                                    <input type="text" placeholder='Name'/>
                                </div>
                                <div className={`${styles.formElement} ${styles.elementPhone}`}>
                                    <input type="text" placeholder='Phone'/>
                                </div>
                                <div className={styles.formElement}>
                                    <input type="email" placeholder='Email'/>
                                </div>
                                <div className={styles.formElement}>
                                    <label htmlFor="message" className={styles.labelMessage}>Message</label>
                                    <textarea id='message'></textarea>
                                </div>
                                <div className={styles.formElement}>
                                    <input type="checkbox" id="checkbox"/>
                                    <label htmlFor="checkbox">Enable 1-Click Request <BsQuestionCircle/></label>
                                </div>
                            </div>
                            <div className={styles.availability}>
                                <Link>Check Availability</Link>
                            </div>
                            <div className={styles.rules}>
                                <p>
                                    You agree to Trulia's <Link>Terms of Use</Link> & <Link> Privacy Policy</Link>
                                    By choosing to contact a property, you also agree that Zillow Group, landlords,
                                    and property managers may call or text you about any inquiries you submit through
                                    our services, which may involve use of automated means and prerecorded/artificial
                                    voices. You don't need to consent as a condition of renting any property, or buying
                                    any other goods or services. Message/data rates may apply.
                                </p>
                            </div>
                        </form>
                    </div>
                </>
            }

        </div>
    );
}