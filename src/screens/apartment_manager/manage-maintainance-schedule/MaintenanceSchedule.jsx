import styles from "./MaintenanceSchedule.module.scss";
import spinner from "@/assets/gifs/Spinner.gif";
import {useForm} from "react-hook-form";
import {useState} from "react";
import {FaImage} from "react-icons/fa";
import {UploadImages} from "@/components/upload_images/UploadImages.jsx";


export function MaintenanceSchedule() {
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

    return (
        <div id={"maintenanceSchedule"} className={styles.maintenanceSchedule}>
            <div className={styles.contentWrapper}>
                <div className={styles.scheduleBox}>
                    <form onSubmit={handleSubmit(onSubmit)} className={styles.scheduleForm}>
                        <div className={styles.formHeader}>
                            <h2>Maintenance Schedule</h2>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="apartmentName">Apartment Name</label>
                            <input className={styles.formInput} type="text"
                                   id={'apartmentName'}
                                   {...register("apartmentName")}
                                   placeholder="Apartment Name"/>
                            {errors.apartmentName &&
                                <p style={{color: "red", fontSize: "13px"}}>{errors.apartmentName.message}</p>}
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="dateTime">Date and Time</label>
                            <input className={styles.formInput} type={"datetime-local"}
                                   id={'dateTime'}
                                   {...register("dateTime")}
                                   placeholder="dateTime"/>
                            {errors.dateTime &&
                                <p style={{color: "red", fontSize: "13px"}}>{errors.dateTime.message}</p>}
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="preferredContract">Preferred Contract method</label>
                            <input className={styles.formInput} type="text"
                                   id={'preferredContract'}
                                   {...register("preferredContract")}
                                   placeholder="Preferred Contract"/>
                            {errors.preferredContract &&
                                <p style={{color: "red", fontSize: "13px"}}>{errors.preferredContract.message}</p>}
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="estimatedTime">Estimated Time</label>
                            <input className={styles.formInput} type={"date"}
                                   id={'estimatedTime'}
                                   {...register("estimatedTime")}
                                   placeholder="Estimated Time"/>
                            {errors.estimatedTime &&
                                <p style={{color: "red", fontSize: "13px"}}>{errors.estimatedTime.message}</p>}
                        </div>

                        <div className={`${styles.formGroup} ${styles.formTextArea}`}>
                            <label htmlFor="issue">Issue Description</label>
                            <textarea className={styles.formInput}
                                      id={'issue'}
                                      {...register("issue")}
                            ></textarea>
                            {errors.issue &&
                                <p style={{color: "red", fontSize: "13px"}}>{errors.issue.message}</p>}
                        </div>

                        <div className={`${styles.formGroup} ${styles.fileUploadForm}`}>
                            <label>Building Image</label>
                            <UploadImages

                            />
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