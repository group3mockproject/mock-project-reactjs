import styles from "./BuildingEdit.module.scss";
import spinner from "@/assets/gifs/Spinner.gif";
import {useFieldArray, useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {IoTrashOutline} from "react-icons/io5";
import {FaArrowLeftLong} from "react-icons/fa6";

export function BuildingEdit() {
    const {id} = useParams();
    const {register, handleSubmit, formState: {errors}, setValue, control} = useForm({
        defaultValues: {
            blockList: [],
        }
    });


    const {fields, append, remove} = useFieldArray({
        control,
        name: "blockList"
    });

    const [isLoading, setIsLoading] = useState(false); // Add loading state

    useEffect(() => {

    }, [id])

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

    const handleAddBlockRow = async () => {
        append({});
    };

    const handleRemoveBlockRow = (index) => {
        remove(index);
    };

    return (
        <div id={"EditBuilding"} className={styles.EditBuilding}>
            <div className={styles.contentWrapper}>
                <div className={styles.buildingBox}>
                    <form onSubmit={handleSubmit(onSubmit)} className={styles.buildingForm}>
                        <div className={styles.formHeader}>
                            <Link to={`/landlord/manage-buildings`} className={styles.comeBack}><FaArrowLeftLong/> Back</Link>
                            <h2>{id === undefined ? "Add new Building" : "Edit Building"}</h2>
                        </div>
                        <div className={styles.formGroup}>
                            <input className={styles.formInput} type="text"
                                   id={'name'}
                                   {...register("name")}
                                   placeholder="Name"/>
                            {errors.name &&
                                <p style={{color: "red", fontSize: "13px"}}>{errors.name.message}</p>}
                        </div>
                        <div className={styles.formGroup}>
                            <input className={styles.formInput} type="text"
                                   id={'floors'}
                                   {...register("floors")}
                                   placeholder="Number of Floors"/>
                            {errors.floors &&
                                <p style={{color: "red", fontSize: "13px"}}>{errors.floors.message}</p>}
                        </div>

                        <div className={styles.formGroup}>
                            <select className={styles.formInput}
                                    id={'buildingManager'}
                                    {...register("buildingManager")}
                            >
                                <option value="">Building Manager</option>
                                <option value="1">Building</option>
                                <option value="2">Manager</option>
                            </select>
                            {errors.buildingManager &&
                                <p style={{color: "red", fontSize: "13px"}}>{errors.buildingManager.message}</p>}
                        </div>

                        <div className={styles.formGroup}>
                            <input className={styles.formInput} type="text"
                                   id={'size'}
                                   {...register("size")}
                                   placeholder="Size"/>
                            <span className={styles.sizeUnit}>(m<sup>2</sup>)</span>
                            {errors.size &&
                                <p style={{color: "red", fontSize: "13px"}}>{errors.size.message}</p>}
                        </div>
                        <div className={styles.formGroup}>
                            <input className={styles.formInput} type="text"
                                   id={'year'}
                                   {...register("year")}
                                   placeholder="Year"/>
                            {errors.year &&
                                <p style={{color: "red", fontSize: "13px"}}>{errors.year.message}</p>}
                        </div>

                        <div className={styles.formGroup}>
                            <select className={styles.formInput}
                                    id={'status'}
                                    {...register("status")}
                            >
                                <option value="">Status</option>
                                <option value="0">Paid</option>
                                <option value="1">Sent</option>
                            </select>
                            {errors.status &&
                                <p style={{color: "red", fontSize: "13px"}}>{errors.status.message}</p>}
                        </div>

                        <div className={styles.formGroup}>
                            <input className={styles.formInput} type="text"
                                   id={'commonArea'}
                                   {...register("commonArea")}
                                   placeholder="Common Area"/>
                            <button className={styles.buttonNewCommon} type="button"
                            >+
                            </button>
                            {errors.commonArea &&
                                <p style={{color: "red", fontSize: "13px"}}>{errors.commonArea.message}</p>}
                        </div>

                        <div className={`${styles.formGroup} ${styles.blockGroup}`}>
                            <label>Blocks</label>
                            {fields.map((item, index) => (
                                <div className={styles.blockElement} key={index}>
                                    <input className={styles.blockInput} type="text"
                                           id={'numOfApartment'}
                                           {...register(`blockList[${index}].numOfApartment`)}
                                           placeholder="Number of Aparment"/>
                                    <select className={styles.blockInput}
                                            id={'blockManager'}
                                            {...register(`blockList[${index}].blockManager`)}
                                    >
                                        <option value="">Block Manager</option>
                                        <option value="0">Block</option>
                                        <option value="1">Manager</option>
                                    </select>
                                    <button className={styles.blockDeleteButton}
                                            type="button"
                                            style={index === 0 ? {visibility: 'hidden'} : {visibility: 'visible'}}
                                            onClick={() => handleRemoveBlockRow(index)}
                                    ><IoTrashOutline/>
                                    </button>
                                </div>
                            ))}
                            <div className={styles.blockAddNew}>
                                <button className={styles.blockNewButton}
                                        type="button"
                                        onClick={handleAddBlockRow}
                                >+
                                </button>
                            </div>
                        </div>

                        <div className={`${styles.formGroup} ${styles.formButtonSubmit}`}>
                            <button className={styles.submitBtn} type={"submit"} disabled={isLoading}
                                    style={isLoading ? {background: "#ccc"} : null}>
                                {isLoading ?
                                    <img src={spinner} alt="spinner"/>
                                    :
                                    id === undefined ? "Create" : "Update"
                                }
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}