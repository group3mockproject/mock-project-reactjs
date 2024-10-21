import styles from "./FinesList.module.scss";
import {IoTrashSharp} from "react-icons/io5";
import {useState} from "react";
import {Link} from "react-router-dom";

const finesList = [
    {
        fineId: 1,
        fineCode: "FI0001",
        reason: "littering",
        fineAmount: 3000,
        fineDate: "2023/10/10",
        dueDate: "2023/10/11",
        status: "Paid",
        resident: {
            id: 1,
            code: "CD0001",
            name: "John"
        }
    },
    {
        fineId: 2,
        fineCode: "FI0002",
        reason: "littering",
        fineAmount: 3000,
        fineDate: "2023/10/10",
        dueDate: "2023/10/11",
        status: "Paid",
        resident: {
            id: 2,
            code: "CD0002",
            name: "Alex"
        }
    },
    {
        fineId: 3,
        fineCode: "FI0003",
        reason: "littering",
        fineAmount: 3000,
        fineDate: "2023/10/10",
        dueDate: "2023/10/11",
        status: "Paid",
        resident: {
            id: 3,
            code: "CD0003",
            name: "Suzy"
        }
    },
];

export function FinesList() {
    const [message, setMessage] = useState(null);
    const [totalPages, setTotalPages] = useState(5);
    const [pageNumber, setPageNumber] = useState(0);

    const showPageNo = () => {
        let pageNoTags = [];
        for (let i = 0; i < totalPages; i++) {
            pageNoTags.push(<a key={i} className={styles.pageA} onClick={() => handlePage(i)}>{i + 1}</a>);
        }
        return pageNoTags;
    }

    const handlePage = (pageNo) => {
        setPageNumber(pageNo);
    }

    return (
        <div id={'manageFines'} className={styles.manageFines}>
            <div className={styles.finesContainer}>
                <div className={styles.finesHeader}>
                    <div className={styles.leftElement}></div>
                    <h2>Manage Fines List</h2>
                    <Link to={"/apartment-manager/fines/create"}>New Fines</Link>
                </div>
                <div className={styles.finesTableContainer}>
                    <table className={styles.finesList}>
                        <thead>
                        <tr>
                            <th className={styles.fineId}>Fine Id</th>
                            <th className={styles.resident}>Resident Id</th>
                            <th className={styles.reason}>Reason</th>
                            <th className={styles.amount}>Amount</th>
                            <th className={styles.fineDate}>Fine Date</th>
                            <th className={styles.dueDate}>Due Date</th>
                            <th className={styles.status}>Status</th>
                            <th className={styles.edit}>Edit</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            finesList && finesList.map((fine, index) => (
                                <tr key={index}>
                                    <td className={styles.fineId}>{fine.fineCode}</td>
                                    <td className={styles.resident}>{fine.resident.code}</td>
                                    <td className={styles.reason}>{fine.reason}</td>
                                    <td className={styles.amount}>{fine.fineAmount}</td>
                                    <td className={styles.fineDate}>{new Date(fine.fineDate).toLocaleDateString()}</td>
                                    <td className={styles.dueDate}>{new Date(fine.dueDate).toLocaleDateString()}</td>
                                    <td className={styles.status}>{fine.status}</td>
                                    <td className={styles.edit}>
                                        <button className={styles.delete}><IoTrashSharp/></button>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>

                {message === null &&
                    <div className={styles.page}>
                        <div className={styles.pageBox}>
                            {pageNumber !== 0 &&
                                <a className={styles.pageA} onClick={() => handlePage(pageNumber - 1)}>Prev Page</a>
                            }
                            <span>
                                    {showPageNo()}
                                </span>
                            {pageNumber < (totalPages - 1) &&
                                <a className={styles.pageA} onClick={() => handlePage(pageNumber + 1)}>Next Page</a>
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}