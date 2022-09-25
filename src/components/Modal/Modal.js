import React from 'react';

const Modal = ({ data, setModalData }) => {
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label onClick={()=>setModalData(null)} htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{data.name}</h3>
                    <img className='h-40 m-auto' src={data.img} alt="" />
                    <p className="py-4 text-justify">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                </div>
            </div>
        </div>
    );
};

export default Modal;