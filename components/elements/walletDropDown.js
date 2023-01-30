import React from 'react'
import Select from 'react-select'

const options = [
    {
      value: "wallet",
      label: (
        <div style={{display:'flex',flexDirection:'row',alignItems:'end',gap:'20px',color:'#ac00e6',fontWeight:'900'}}>
            <div>
              Connected Wallet
            </div>   
            <div>
               bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq
            </div>
        </div>
      )
    },
    {
      value: "card",
      label: (
        <div style={{display:'flex',flexDirection:'row',alignItems:'end',gap:'20px'}}>
            <div style={{color:'black',fontWeight:'900'}}>
               Debit or Credit Card 
            </div>   
            <div>
               It seems like you haven't linked a bank account to your crypto wallet yet
            </div>
        </div>
      )
    },

  ];

const WalletDropDown = () => {

    return(
        <div className='dropdowncurrency-container'>
           <Select options={options} className="react-select-container-payment" defaultValue={options[0]}/>
        </div>
        )
}

export default WalletDropDown;