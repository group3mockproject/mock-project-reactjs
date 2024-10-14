import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GoSearch } from "react-icons/go";

import image1 from '@/assets/register_ultilites/register-utilities-1.png'
import image2 from '@/assets/register_ultilites/register-utilities-2.png'
import image3 from '@/assets/register_ultilites/register-utilities-3.png'
import './RegisterUtilities.scss'
import { Button } from '@mui/material'


const _data = [
    { color: '5D0BF8', id: 1, img: image1, title: 'GYM', price: 24, desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { color: 'FA3D37', id: 2, img: image2, title: 'GYM', price: 24, desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { color: '00C150', id: 3, img: image3, title: 'GYM', price: 24, desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { color: '5D0BF8', id: 4, img: image1, title: 'GYM', price: 24, desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { color: '00C150', id: 5, img: image3, title: 'GYM', price: 24, desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { color: '5D0BF8', id: 6, img: image1, title: 'GYM', price: 24, desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
]

const RegisterUtilities = () => {
    const [data, setData] = useState(_data)
    console.log({ data })
    return (
        <div className='register-utilities'>
            <h1 className='register-utilities__heading'>UTILITIES SERVICES</h1>
            <p className='register-utilities__desc'><i>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</i></p>
            <div className='register-utilities__search-container'>
                <div className='register-utilities__search'>
                    <input type="text" placeholder='Search...' />
                    <Button
                        sx={{fontSize:'1.2rem',
                            borderRadius: '0.6em',
                            backgroundColor:'#785BDF'
                        }}
                        variant='contained'>
                        <GoSearch /></Button>
                </div>
            </div>
            <div className="register-utilities__cards">
                {
                    data.map(item => (
                        <UtilityCard key={item.id} {...item} />
                    ))
                }
            </div>
        </div>
    )
}

const UtilityCard = ({ id, color, img, title, price, desc }) => {
    return (
        <div className="register-utilities__card" style={{ '--card-color': `#${color}` }}>
            <div className='register-utilities__card-header'>
                <img src={img} alt={title} width={40} />
                <div><h3>{title}</h3>
                    <p><b>{price}$ per month</b></p>
                </div>
            </div>
            <p className='register-utilities__card-desc'>{desc}</p>
            <div className='register-utilities__card-footer'>
                <Link to={`#/${id}`}>more...</Link>
                <Button
                    className='register-utilities__button'
                    sx={{
                        border: `1px solid #${color}`,
                        color: `#${color}`,
                        fontWeight: `bold`,
                        // backgroundColor: `#${color}`,
                    }}
                >Subscribe </Button>
            </div>
        </div>
    )
}

export default RegisterUtilities