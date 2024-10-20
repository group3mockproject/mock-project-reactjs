import React, { useState } from 'react'
import { Button, FormControl, FormLabel, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import useFetch from '@/hooks/useFetch'

import './EditProfile.scss'
import dayjs from 'dayjs'
import usePickFile from '@/hooks/usePickFile'
import axios from 'axios'

/**
 *  id	"1"
    profile_image	"https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww"
    firstname	"Susan"
    lastname	"Smith"
    email	"smith123@axamle.com"
    gender	"male"
    phonenumber	"0394002409"
    dob	"2003-06-21"
    SSN	"123-45-6789"
    city	""
    state	""
    address	""
 */

const URL = import.meta.env.VITE_API_TECHICAL_STAFF_EDIT_PROFILE
const EditProfile = () => {

    const mappedData = (data) => ({ ...data, dob: dayjs(data.dob) })

    const { data, isLoading, error, setData } = useFetch({ url: URL, mappedData })
    const { file, handleChangeFile, fakeUrl } = usePickFile({ accept: "image/*" })
    const [showPassword, setShowPassword] = useState(false)

    const handleChange = (key, value) => {
        setData({ ...data, [key]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let profileImage = data?.profile_image
        if (file) {
            try {
                const form = new FormData()
                form.append('file', file)
                //todo: 
                // const res = await axios.post(import.meta.env.VITE_API_UPLOAD_IMAGE, form)
                // profileImage = res.data.fileName
                profileImage = file.name
            } catch (e) {
                console.log(e)
            }
        }
        const payload = {
            ...data,
            dob: data.dob.format('YYYY-MM-DD'),
            profile_image: profileImage
        }
        console.log({ payload })
    }

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Something wentwong...</div>

    return (
        data &&
        <form onSubmit={handleSubmit} className='technical_staff_edit_profile'>
            <div className='technical_staff_edit_profile__profile-picture'>
                <h1>EDIT PROFILE</h1>
                <img src={fakeUrl || data?.profile_image} alt="" />
                <Button onClick={handleChangeFile}>Upload Image</Button>
            </div>
            <div className='technical_staff_edit_profile__fields'>
                <TextField required label='First Name' value={data?.firstname}
                    onChange={(e) => handleChange('firstname', e.target.value)}
                />
                <TextField required label='Last Name' value={data?.lastname}
                    onChange={(e) => handleChange('lastname', e.target.value)} />
                <TextField required label='Email' value={data?.email}
                    onChange={(e) => handleChange('email', e.target.value)} />
                <FormControl>
                    <InputLabel>Gender</InputLabel>
                    <Select
                        required
                        value={data?.gender}
                        label="Gender"
                        onChange={(e) => handleChange('gender', e.target.value)}
                    >
                        <MenuItem value='male'>Male</MenuItem>
                        <MenuItem value='female'>Female</MenuItem>
                    </Select>
                </FormControl>
                <TextField required label='Phone Number' type='number'
                    value={data?.phonenumber}
                    onChange={(e) => handleChange('phonenumber', e.target.value)} />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker required label='Date of birth'
                        value={data?.dob}
                        onChange={(value) => handleChange('dob', value)}
                    />
                </LocalizationProvider>
                <TextField required label='SSN' value={data?.SSN}
                    onChange={(e) => handleChange('SSN', e.target.value)} />
                <TextField label='City' value={data?.city}
                    onChange={(e) => handleChange('city', e.target.value)} />
                <TextField label='State' value={data?.state}
                    onChange={(e) => handleChange('state', e.target.value)} />
                <TextField label='Address' value={data?.address}
                    onChange={(e) => handleChange('address', e.target.value)} />
                <FormControl variant="outlined">
                    <InputLabel>Password</InputLabel>
                    <OutlinedInput
                        type={showPassword ? 'text' : 'password'}
                        onChange={(e) => handleChange('password', e.target.value)}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={() => setShowPassword(true)}
                                    // onMouseDown={handleMouseDownPassword}
                                    // onMouseUp={handleMouseUpPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
                <FormControl variant="outlined">
                    <InputLabel>Confirm Password</InputLabel>
                    <OutlinedInput
                        type={showPassword ? 'text' : 'password'}
                        onChange={(e) => handleChange('confirm_password', e.target.value)}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={() => setShowPassword(true)}
                                    // onMouseDown={handleMouseDownPassword}
                                    // onMouseUp={handleMouseUpPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Confirm Password"
                    />
                </FormControl>
                <div className='technical_staff_edit_profile__button-group'>
                    <Button variant='contained' sx={{ background: '#ff2a44' }}>Cancel</Button>
                    <Button type='submit' variant='contained' sx={{ background: '#00B087' }}>Update</Button>
                </div>
            </div>
        </form>
    )
}

export default EditProfile