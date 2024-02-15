import React, { ChangeEvent, useState } from 'react'
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const Shipping = () => {

    const navigate=useNavigate();


    const [shippingInfo,setShippingInfo]=useState({
        address:"",
        city:"",
        state:"",
        country:"",
        pinCode:"",
    });

    const changehandler=(e:ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
        setShippingInfo((prev)=>({...prev,[e.target.name]:e.target.value}));
    };
  return (
    <div className='shipping'>

        <button className='back-btn' onClick={()=>navigate("/cart")}><BiArrowBack/></button>
        <form>
            <h1>Shipping address</h1>
            <input 
            required
            type="text" 
            placeholder='address' 
            name="address"
             value={shippingInfo.address}
             onChange={changehandler}/>


            <input 
            required
            type="text" 
            placeholder='city' 
            name="city"
             value={shippingInfo.city}
             onChange={changehandler}/>


           <input 
            required
            type="text" 
            placeholder='state' 
            name="state"
             value={shippingInfo.state}
             onChange={changehandler}/>


            <select name="country" required value={shippingInfo.country} onChange={changehandler}>
                <option value="">Choose country</option>
                <option value="india">Choose country</option>
            </select>

           <input 
            required
            type="Number" 
            placeholder='pinCode' 
            name="pinCode"
             value={shippingInfo.pinCode}
             onChange={changehandler}/>

             <button type='submit'>PayNow</button>
        </form>
    </div>
  )
}

export default Shipping