import React, { useState } from 'react'
import Select,{components} from 'react-select'
import {
  AiFillAlert,
  AiFillAlipayCircle,
  AiFillContainer
} from "react-icons/ai";
import {FaEthereum} from 'react-icons/fa'
import { number } from 'yup';




const DropDownCurrency = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    {
      value: "eth",
      label: (
        <div style={{display:'flex',flexDirection:'row',alignItems:'end',gap:'5px'}}>
          <FaEthereum size={25} className="eth" /> ETH
        </div>
      )
    },
    {
      value: "poly",
      label: (
        <div style={{display:'flex',flexDirection:'row',alignItems:'end',gap:'5px'}}>
          <img src={'/icons/coin.png'} className="w-30" /> POLY
        </div>
      )
    },

  ];

    return(
    <div className='dropdowncurrency-container'>
      <Select 
      className='react-select-container'
      defaultValue={options[0]}
      // value={selectedOption} 
      isSearchable={false}
      options={options} 
      onChange={(value)=>{
        setSelectedOption(value)
      }}/>
      <input type='number' min='0'  className='w-100'/>
    </div>)
}
export default DropDownCurrency