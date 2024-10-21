import styles from './ManageBuildings.module.scss';
import {IoIosArrowBack, IoIosArrowDown, IoIosArrowForward, IoIosArrowUp, IoIosSearch} from "react-icons/io";
import {IoTrashOutline} from "react-icons/io5";
import {MdOutlineEdit} from "react-icons/md";
import {useState} from "react";
import {Link} from "react-router-dom";

const buildingsData = [
    {
        id: '0001',
        name: 'Building A',
        address: '29 Al-Shanana Street, As-Saih',
        size: '2.000 m²',
        floors: 7,
        age: 10,
        manager: 'Maryam Al Tunaiji',
        status: 'under repair',
        commonAreas: ['Gyms', 'Playground', 'Parking'],
        blocks: [
            { id: 'A01', apartments: 10, manager: 'Maryam Al Tunaiji' },
            { id: 'A02', apartments: 20, manager: 'Latifa Alghanim' },
        ]
    },
    {
        id: '0002',
        name: 'Building B',
        address: 'Another Address',
        size: '1.500 m²',
        floors: 5,
        age: 8,
        manager: 'John Doe',
        status: 'active',
        commonAreas: ['Swimming Pool', 'Garden'],
        blocks: [
            { id: 'B01', apartments: 15, manager: 'Manager 1' },
        ]
    },
    {
        id: '0003',
        name: 'Building C',
        address: 'Another Address',
        size: '1.500 m²',
        floors: 5,
        age: 8,
        manager: 'John Doe',
        status: 'active',
        commonAreas: ['Swimming Pool', 'Garden'],
        blocks: [
            { id: 'B01', apartments: 15, manager: 'Manager 1' },
        ]
    },
    {
        id: '0004',
        name: 'Building D',
        address: 'Another Address',
        size: '1.500 m²',
        floors: 5,
        age: 8,
        manager: 'John Doe',
        status: 'active',
        commonAreas: ['Swimming Pool', 'Garden'],
        blocks: [
            { id: 'B01', apartments: 15, manager: 'Manager 1' },
        ]
    }
]

export function ManageBuildings() {
    const [indexContent, setIndexContent] = useState(null);
    const [message, setMessage] = useState(null);
    const [totalPages, setTotalPages] = useState(5);
    const [pageNumber, setPageNumber] = useState(0);


    const handleShowContent = (index) => {
        setIndexContent(index)
    }

    const showPageNo = () => {
        let pageNoTags = [];
        for (let i = 0; i < totalPages; i++) {
            pageNoTags.push(<a key={i} className={`${styles.pageA} ${pageNumber === i ? styles.active: ''}`}
                               onClick={() => handlePage(i)}>{i + 1}</a>);
        }
        return pageNoTags;
    }

    const handlePage = (pageNo) => {
        setPageNumber(pageNo);
    }

    return (
        <div id={'manageBuildings'} className={styles.manageBuildings}>
            <h2>Manage Buildings</h2>
            <div className={styles.manageHeader}>
                <div className={styles.searchBar}>
                    <input type="text" placeholder="Search...."/>
                    <button><IoIosSearch/></button>
                </div>
                <Link to={"/landlord/manage-buildings/create"} className={styles.addBuilding}>+ Add Building</Link>
            </div>


            {buildingsData && buildingsData.map((building, index) => (
                <div className={styles.buildingCard} key={building.id}>
                    <div className={styles.buildingHeader}>
                        <h3>ID:{building.id} {building.name}</h3>
                        {indexContent === index ?
                            <button className={styles.buttonShowContent}
                                    onClick={() => handleShowContent(null)}
                            ><IoIosArrowUp/></button>
                            :
                            <button className={styles.buttonShowContent}
                                    onClick={() => handleShowContent(index)}
                            ><IoIosArrowDown/></button>
                        }
                    </div>
                    <div className={`${styles.buildingContent} ${indexContent === index ? styles.activeContent : ''}`}>
                        <div className={styles.buildingInfo}>
                            <p><strong>Address:</strong> {building.address}</p>
                            <p><strong>Size:</strong> {building.size}</p>
                            <p><strong>Number of floors:</strong> {building.floors}</p>
                            <p><strong>Age:</strong> {building.age}</p>
                            <p><strong>Manager:</strong> {building.manager}</p>
                            <p><strong>Status:</strong> {building.status}</p>
                        </div>
                        <div className={styles.buildingExtra}>
                            <p><strong>Common area:</strong></p>
                            <ul>
                                {building.commonAreas.map((area, i) => <li key={i}>{area}</li>)}
                            </ul>
                            <div className={styles.blocks}>
                                <table>
                                    <thead>
                                    <tr>
                                        <th>Block ID</th>
                                        <th>Number of apartments</th>
                                        <th>Manager</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {building.blocks.map(block => (
                                        <tr key={block.id}>
                                            <td>{block.id}</td>
                                            <td>{block.apartments}</td>
                                            <td>{block.manager}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className={styles.actions}>
                                <button className={styles.deleteBtn}><IoTrashOutline/>Delete</button>
                                <Link to={`/landlord/manage-buildings/${building.id}/edit`}
                                      className={styles.editBtn}><MdOutlineEdit/>Edit</Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {message === null &&
                <div className={styles.page}>
                    <div className={styles.pageBox}>
                        {pageNumber !== 0 &&
                            <a className={styles.pageA} onClick={() => handlePage(pageNumber - 1)}><IoIosArrowBack /></a>
                        }
                            <span>
                                {showPageNo()}
                            </span>
                        {pageNumber < (totalPages - 1) &&
                            <a className={styles.pageA} onClick={() => handlePage(pageNumber + 1)}><IoIosArrowForward /></a>
                        }
                    </div>
                </div>
            }
        </div>
    );
}