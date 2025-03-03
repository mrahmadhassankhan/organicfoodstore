import React, { useEffect, useState } from 'react'
import CSS from './CheckData.module.css'
import { Link } from 'react-router-dom'
import CheckOutCard from './CheckOutCard/CheckOutCard'


const CheckData = () => {
    const [CartObject, setCartItems] = useState([])
    useEffect(() => {
        const storedListString = sessionStorage.getItem('listOfObjects');
        const storedList = storedListString ? JSON.parse(storedListString) : [];
        setCartItems(storedList);
    }, [])



    const handleRemoveItem = (productImage) => {
        const updatedCartItems = CartObject.filter(item => item.productImage !== productImage);
        setCartItems(updatedCartItems);
    }
    return (
        <div className={`${CSS['container-fluid']} container-fluid`}>
            <div className='container'>
                <Link className={CSS['back-link']} to={'/addtocart'}>
                    <i className={`${CSS['back-icon']} fa-solid fa-backward`}></i>
                    <span className={CSS['back']} >Back</span>
                </Link>
                <h2 className={CSS['my-cart']} >My Cart</h2>
                {CartObject.map((item) => (
                    <CheckOutCard key={item.productImage} CartItem={item} onRemove={handleRemoveItem} />
                ))}

                <div className={CSS['containter-checkbox']}>
                    <input className={CSS['checkbox1']} type='checkbox' name='term1' />
                    <p className={CSS['checkbox-details1']}>Buying as a Gift? Tick here to include gift wrapping.</p>
                </div>
                <div className={CSS['containter-checkbox']}>
                    <input className={CSS['checkbox2']} type='checkbox' name='term2' />
                    <p className={CSS['checkbox-details2']}>Do you want to subscribe to our newletter for limited offers and promotion?</p>
                </div>
                <div className={CSS['containter-checkbox']}>
                    <input className={CSS['checkbox3']} type='checkbox' name='term3' />
                    <p className={CSS['checkbox-details3']}>Agree to the Term and Condition?</p>
                </div>
                <div>
                    <Link to={'/address2'}>
                        <button className={CSS['payment-btn']}>Proceed to Details</button>
                    </Link>
                    <Link to={'/'}>
                        <button className={CSS['back-shop-btn']}>Back to Shop</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CheckData






