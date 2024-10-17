import styles from "./Payments.module.scss";
import {AiFillSetting} from "react-icons/ai";
import {LineChart, lineElementClasses} from '@mui/x-charts/LineChart';
import mastercard from "../../../assets/images/mastercard.png";
import visa from "../../../assets/images/visa.png";
import room1 from "../../../assets/images/room1.jpg";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const uData = [4000, 3550, 1500, 2780, 1890, 2390, 3490];
const xLabels = [
    'S',
    'M',
    'T',
    'W',
    'G',
    'F',
    'H',
];

export function Payments() {
    const transactionList = [
        {
            id: 1,
            type: 0,
            name: 'October renting fee',
            fee: 300,
        },
        {
            id: 2,
            type: 0,
            name: 'Clean Carpets',
            fee: 50,
        },
        {
            id: 3,
            type: 1,
            name: 'Repaint rooms',
            fee: 69,
        },
        {
            id: 4,
            type: 0,
            name: 'Replace water pipes',
            fee: 59,
        },
    ];

    const maintenanceRequest = [
        {
            id: 1,
            request: "Check and Clean Heating Systems",
            date: new Date("2020/12/13"),
            quantity: 1,
            costs: 60,
        },
        {
            id: 2,
            request: "Seal Windows and Doors",
            date: new Date("2020/12/14"),
            quantity: 2,
            costs: 100,
        },
        {
            id: 3,
            request: "Check Roof for Damage",
            date: new Date("2020/12/07"),
            quantity: 1,
            costs: 19.5,
        },
        {
            id: 4,
            request: "Clean Carpets",
            date: new Date("2020/12/06"),
            quantity: 1,
            costs: 50,
        },
        {
            id: 5,
            request: "November rent fee",
            date: new Date("2020/11/31"),
            quantity: 1,
            costs: 300,
        },
    ]

    const [chooseRequests, setChooseRequests] = useState([]);
    const navigate = useNavigate();

    const handleSetRequests = (event) => {
        const index = Number.parseInt(event.target.value);
        if (event.target.checked) {
            setChooseRequests([...chooseRequests, maintenanceRequest[index]]);
        } else {
            setChooseRequests(chooseRequests.filter((_, i) => i !== index));
        }
    }

    const handleMovePayPage = () => {
        navigate("/residents/payments/pay", {state: {chooseRequests: chooseRequests}});
    }

    return (
        <div id="payments" className={styles.payments}>
            <div className={styles.maintenance}>
                <div className={styles.paymentHistory}>
                    <div className={styles.headerHistory}>
                        <h2>Payment History</h2>
                        <button><AiFillSetting/></button>
                    </div>
                    <div className={styles.historyBox}>
                        <div className={styles.charts}>
                            <div className={styles.totalSpending}>
                                <span>Total Spending</span>
                                <p>$5,215.00</p>
                            </div>
                            <div className={styles.spendingTime}>
                                <button>Day</button>
                                <button className={styles.active}>Week</button>
                                <button>Month</button>
                                <button>Year</button>
                            </div>
                            <LineChart
                                width={400}
                                height={200}
                                series={[{data: uData, area: true, showMark: false}]}
                                xAxis={[{scaleType: 'point', data: xLabels, tickSize: 0 }]}
                                yAxis={[{display: 'none'}]}
                                sx={{
                                    [`& .${lineElementClasses.root}`]: {
                                        display: 'none',
                                        margin: 0
                                    },
                                }}
                            />
                        </div>
                        <div className={styles.transaction}>
                            <div className={styles.transactionType}>
                                <p>Transaction</p>
                                <select>
                                    <option value="">All</option>
                                    <option value="0">Mastercard</option>
                                    <option value="1">Visa</option>
                                </select>
                            </div>
                            <div className={styles.transactionList}>
                                {transactionList.map((transaction, index) => (
                                    <div className={styles.transactionCard} key={index}>
                                        <div className={styles.transactionImage}>
                                            <img src={transaction.type === 0 ? mastercard
                                                : transaction.type === 1 ? visa : ''} alt="card"/>
                                        </div>
                                        <div className={styles.transactionInfo}>
                                            <p>{transaction.name}</p>
                                            <span>Payment</span>
                                        </div>
                                        <div className={styles.transactionFee}>
                                            <p>-${transaction.fee}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.maintenanceRequest}>
                    <div className={styles.headerRequest}>
                        <h3>Maintenance Request</h3>
                    </div>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th className={styles.request}>Request</th>
                                <th className={styles.date}>Date</th>
                                <th className={styles.quantity}>Quantity</th>
                                <th className={styles.costs}>Approved Costs</th>
                                <th className={styles.selectRequest}>Pay Confirm</th>
                            </tr>
                        </thead>
                        <tbody>
                            {maintenanceRequest.map((request, index) => (
                                <tr key={request.id}>
                                    <td className={styles.request}>{request.request}</td>
                                    <td className={styles.date}>{(request.date).toDateString()}</td>
                                    <td className={styles.quantity}>{request.quantity}</td>
                                    <td className={styles.costs}>${request.costs}</td>
                                    <td className={styles.selectRequest}>
                                        <input type="checkbox" value={index} onChange={(e)=>handleSetRequests(e)} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
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
                        {chooseRequests.map((request, index) => (
                            <div className={styles.requestPrice} key={index}>
                                <p>${request.costs} x {request.quantity} {request.request}</p>
                                <p>${request.costs * request.quantity}</p>
                            </div>
                        ))}
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
                        <p>${chooseRequests.reduce((total, request) => total += request.costs*request.quantity, 0)}</p>
                    </div>
                    <div className={styles.feeDescription}>
                        <p>Free cancellation until 3:00 PM on Nov 31, 2020. More info</p>
                    </div>
                </div>
                <div className={styles.btnPayment}>
                    <button onClick={handleMovePayPage}>Continue to Payment Detail</button>
                </div>
            </div>
        </div>
    );
}