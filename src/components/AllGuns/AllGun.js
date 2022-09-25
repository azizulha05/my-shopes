// import { config } from 'daisyui';
import React, { useEffect, useState } from 'react';
import SingleGun from '../SingleGun/SingleGun';

const AllGun = ({ countIncreases }) => {
    const [guns, setGuns] = useState([]);
    useEffect((value) => {
        fetch`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`
            .then(res => res.json())
            .then(data => setGuns(data))

    }, [])
    return (
        <div className='w-11/12 m-auto'>
            <h2 className='text-4xl text-center font-bold my-6'>My Guns Shops</h2>
            <p className='text-justify'><span className='text-amber-600'>Lorem ipsum dolor sit</span> amet consectetur adipisicing elit. Iure qui distinctio repudiandae quod, ipsa dolorem, unde saepe expedita officiis aut dolor debitis mollitia. Repudiandae, natus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure qui distinctio repudiandae quod, ipsa dolorem, unde saepe expedita officiis aut dolor debitis mollitia. Repudiandae, natus?</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
                {
                    guns.map(gun => <SingleGun key={gun.id} gun={gun} countIncreases={countIncreases} />)
                }
            </div>
        </div>
    );
};

export default AllGun;