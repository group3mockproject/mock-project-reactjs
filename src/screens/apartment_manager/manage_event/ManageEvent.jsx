import {UploadImages} from "@/components/upload_images/UploadImages.jsx";
import spinner from "@/assets/gifs/Spinner.gif";
import {useForm} from "react-hook-form";
import {useState} from "react";
import styles from "./ManageEvent.module.scss";

export function ManageEvent() {
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
        <div id={"manageEvent"} className={styles.manageEvent}>
            <div className={styles.contentWrapper}>
                <div className={styles.eventBox}>
                    <form onSubmit={handleSubmit(onSubmit)} className={styles.eventForm}>
                        <div className={styles.formHeader}>
                            <h2>Plan & Manage Event</h2>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="title">Title</label>
                            <input className={styles.formInput} type="text"
                                   id={'title'}
                                   {...register("title")}
                                   placeholder="Title"/>
                            {errors.title &&
                                <p style={{color: "red", fontSize: "13px"}}>{errors.title.message}</p>}
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="purpose">Purpose</label>
                            <input className={styles.formInput} type="text"
                                   id={'purpose'}
                                   {...register("purpose")}
                                   placeholder="Purpose"/>
                            {errors.purpose &&
                                <p style={{color: "red", fontSize: "13px"}}>{errors.purpose.message}</p>}
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

                        <div className={styles.formGroup}>
                            <label htmlFor="leader">Leader</label>
                            <input className={styles.formInput} type={"text"}
                                   id={'leader'}
                                   {...register("leader")}
                                    placeholder={"Leader"}
                            />
                            {errors.leader &&
                                <p style={{color: "red", fontSize: "13px"}}>{errors.leader.message}</p>}

                            <label htmlFor="member">Member</label>
                            <input className={styles.formInput} type={"text"}
                                   id={'member'}
                                   {...register("member")}
                                   placeholder={"Member"}
                            />
                            {errors.member &&
                                <p style={{color: "red", fontSize: "13px"}}>{errors.member.message}</p>}
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="startTime">Start Time</label>
                            <input className={styles.formInput} type={"date"}
                                   id={'startTime'}
                                   {...register("startTime")}
                            />
                            {errors.startTime &&
                                <p style={{color: "red", fontSize: "13px"}}>{errors.startTime.message}</p>}
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="endTime">End Time</label>
                            <input className={styles.formInput} type={"date"}
                                   id={'endTime'}
                                   {...register("endTime")}
                            />
                            {errors.endTime &&
                                <p style={{color: "red", fontSize: "13px"}}>{errors.endTime.message}</p>}
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