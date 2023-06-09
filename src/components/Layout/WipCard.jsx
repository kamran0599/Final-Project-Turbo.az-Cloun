import React from 'react';
import { BsArrowRepeat } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { GrDiamond } from "react-icons/gr";

// react redux
import { useDispatch } from 'react-redux';
import {addCard} from "../../store/features/AddToCart"




export const WipCard = ({ id, image, price, description, title, place, onClick }) => {

    const dispatch = useDispatch();
    return (
        <div className="col-lg-3 col-md-6 col-sm-12" >
            <div className='Product '>
                <div className="product_top ">
                    <img onClick={onClick} src={image} alt="" />
                    <span className='item_reverse'><BsArrowRepeat /></span>
                    <span onClick={()=>dispatch(addCard({id, image, price, description, title, place,}))} className='item_heart'><AiFillHeart className='hover:text-red-600'/></span>
                    <span className='item_new'>Salon</span>
                    <span className='item_wip'><GrDiamond /></span>
                </div>

                <div className="product_bottom">
                    <p className='item_price'>{price}<span>$</span></p>
                    <p className='item_description'>{description}</p>
                    <p className='item_about'>{title} </p>
                    <p className='item_place'>{place}</p>
                </div>

            </div>
        </div>

    )
}

export default WipCard
