import {useForm} from "react-hook-form";
import styles from "./FinesCreate.module.scss";

import {Link} from "react-router-dom";
import spinner from "@/assets/gifs/Spinner.gif";
import {FaArrowLeftLong} from "react-icons/fa6";
import {useState} from "react";

export function FinesCreate () {
    const {register, handleSubmit, formState: {errors}, setValue} = useForm({
        criteriaMode: "all"
    });

    const [isLoading, setIsLoading] = useState(false); // Add loading state


    const onSubmit = async (data) => {
        setIsLoading(true);
        setTimeout(async () => {
            try {
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
            }
        }, 2000)
    }

    return(
        <div id={"finesCreate"} className={styles.finesCreate}>
            <div className={styles.contentWrapper}>
                <div className={styles.finesBox}>
                    <form onSubmit={handleSubmit(onSubmit)} className={styles.finesForm}>
                        <div className={styles.formHeader}>
                            <Link to={`/apartment-manager/fines`} className={styles.comeBack}><FaArrowLeftLong/> Back</Link>
                            <h2>Manage Fines</h2>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="residentId">Resident Id</label>
                            <input className={styles.formInput} type="text"
                                   id={'residentId'}
                                   {...register("residentId")}
                                   placeholder="ResidentId"/>
                            {errors.residentId &&
                                <p style={{color: "red", fontSize: "13px"}}>{errors.residentId.message}</p>}
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="amount">Amount</label>
                            <input className={styles.formInput} type={"text"}
                                   id={'amount'}
                                   {...register("amount")}
                                   placeholder="Amount"/>
                            {errors.amount &&
                                <p style={{color: "red", fontSize: "13px"}}>{errors.amount.message}</p>}
                        </div>

                        <div className={`${styles.formGroup} ${styles.formTextArea}`}>
                            <label htmlFor="reason">Reason</label>
                            <textarea className={styles.formInput}
                                      id={'reason'}
                                      {...register("reason")}
                            ></textarea>
                            {errors.reason &&
                                <p style={{color: "red", fontSize: "13px"}}>{errors.reason.message}</p>}
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="fineDate">Fine Date</label>
                            <input className={styles.formInput} type={"date"}
                                   id={'fineDate'}
                                   {...register("fineDate")} />
                            {errors.fineDate &&
                                <p style={{color: "red", fontSize: "13px"}}>{errors.fineDate.message}</p>}
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="dueDate">Due Date</label>
                            <input className={styles.formInput} type={"date"}
                                   id={'dueDate'}
                                   {...register("dueDate")} />
                            {errors.dueDate &&
                                <p style={{color: "red", fontSize: "13px"}}>{errors.dueDate.message}</p>}
                        </div>

                        <div className={`${styles.formGroup} ${styles.formButtonSubmit}`}>
                            <button className={styles.submitBtn} type={"submit"} disabled={isLoading}
                                    style={isLoading ? {background: "#ccc"} : null}>
                                {isLoading ?
                                    <img src={spinner} alt="spinner"/>
                                    :
                                    "Create"
                                }
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}