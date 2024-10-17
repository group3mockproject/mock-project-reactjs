import styles from "./ApartmentList.module.scss";
import {useEffect, useState} from "react";
import {apartmentList} from "@/data/apartment.js";
import {IoBedOutline} from "react-icons/io5";
import {FaShower} from "react-icons/fa";
import {Link} from "react-router-dom";


export function ApartmentList() {
    const [apartments, setApartments] = useState([]);

    useEffect(() => {
        setApartments(apartmentList);
    }, [])

    return (
        <div id='rentAnApartment' className={styles.rentAnApartment}>
            <div className={styles.apartmentList}>
                { apartments && apartments.map((apartment, index) => (
                    <div className={styles.apartmentCard} key={index}>
                        <div className={styles.listImages}>
                            <img src={apartment.images[0]} alt={`apartment${index}`} />
                        </div>
                        <div className={styles.apartmentInfo}>
                            {apartment.discount ?
                                <div className={styles.apartmentFee}>
                                    <p className={`${styles.fee} ${styles.old}`}>{apartment.rentFee}</p>
                                    <p className={styles.discount}>{apartment.rentFee*(1-apartment.discount)}</p>
                                </div>
                                :
                                <div className={styles.apartmentFee}>
                                    <p className={styles.fee}>{apartment.rentFee}</p>
                                </div>
                            }
                            <span className={styles.numbed}><IoBedOutline /> {apartment.bedNum}</span>
                            <span className={styles.numbad}><FaShower /> {apartment.badNum}</span>
                            <p className={styles.apartmentName}>{apartment.name}</p>
                            <p className={styles.apartmentLocation}>{apartment.location}</p>
                        </div>
                        <div className={styles.availability}>
                            <Link to={`/residents/rent-apartment/${index}`}>Check Availability</Link>
                        </div>
                    </div>
                ))}
            </div>
            {apartments && apartments.length > 10 &&
                <div className={styles.loadMore}>
                    <button>Load More</button>
                </div>
            }
        </div>
    );
}