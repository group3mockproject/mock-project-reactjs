import room1 from "../assets/images/room1.jpg";
import room2 from "../assets/images/room2.jpg";
import room3 from "../assets/images/room3.jpg";
import room4 from "../assets/images/room4.jpg";
import room5 from "../assets/images/room5.jpg";
import room6 from "../assets/images/room6.jpg";

export const apartmentList = [
    {
        id: 1,
        name: 'Walton Lane',
        bedNum: 4,
        badNum: 3,
        rentFee: 2349,
        discount: 0.1,
        images: [room1, room2, room3, room4, room5],
        location: 'America Fork, UT 84003',
    },
    {
        id: 2,
        name: 'Alvera at The Meadows',
        type: 'Pet friendly',
        bedNum: 3,
        badNum: 2,
        rentFee: 2000,
        discount: 0.1,
        images: [room2, room3, room4, room5, room6],
        location: 'America Fork, UT 84003',
    },
    {
        id: 3,
        name: 'The Meadows',
        type: 'Pet friendly',
        bedNum: 3,
        badNum: 2,
        rentFee: 1800,
        images: [room3, room2, room1, room4, room5],
        location: 'America Fork, UT 84003',
    },
    {
        id: 4,
        name: 'Water Melon',
        type: 'Sponsored',
        bedNum: 3,
        badNum: 1,
        rentFee: 1700,
        images: [room4, room2, room3, room6, room5],
        location: 'America Fork, UT 84003',
    },
    {
        id: 5,
        name: 'Orange',
        type: 'Pet friendly',
        bedNum: 2,
        badNum: 1,
        rentFee: 1000,
        discount: 0,
        images: [room5, room2, room3, room4, room6],
        location: 'America Fork, UT 84003',
    },
    {
        id: 6,
        name: 'Apple',
        type: 'Sponsored',
        bedNum: 3,
        badNum: 2,
        rentFee: 1845,
        discount: 0.1,
        images: [room6, room2, room3, room4, room1],
        location: 'America Fork, UT 84003',
    },
];