import React, { useState } from 'react';
import Modal from '../Modal/Modal';

const SingleGun = (props) => {
    const [modalData, setModalData] = useState({});
    const { gun, countIncreases } = props;
    const { name, img, price, category, capacity, bullet, action } = gun;
    return (
        <div className='flex'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className='h-40' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">${price}</div>
                    </h2>
                    <p><small>{action}, {category}</small></p>
                    <p><small>{capacity}, {bullet}</small></p>
                    <div className="card-actions justify-center">
                        <div onClick={() => countIncreases()} className="btn btn-outline btn-primary w-5/12">Add To Card</div>
                        <label onClick={() => setModalData(gun)} htmlFor="my-modal-3" className="btn btn-outline btn-secondary w-5/12">Details</label>
                        {modalData && <Modal data={modalData} setModalData={setModalData} />}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleGun;