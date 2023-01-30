import React, { useState } from 'react'
import DropDownCurrency from './dropDownCurrency';
import WalletDropDown from './walletDropDown';


const WithdrawSetting = () => {
    const [label,setlabel]=useState('withdraw');
  return (
    <div className='withdraw-setting-container'>
          <div className='withdraw-setting-container-inner'>
                <div className='withdraw-setting-label'>
                    <div className={label==='withdraw' ? 'withdraw-setting-labelActive':''} onClick={()=>{setlabel('withdraw')}}>
                        WithDraw Request
                    </div>
                    <span className='border-right'></span>
                    <div className={label==='approved' ? 'withdraw-setting-labelActive':''} onClick={()=>{setlabel('approved')}}>
                        Approved Request
                    </div>
                    <span className='border-right'></span>

                    <div className={label==='canceled' ? 'withdraw-setting-labelActive':''} onClick={()=>{setlabel('canceled')}}>
                        Canceled Requests
                    </div>
                </div>
                <div className='withdraw-amount'>
                   <div>
                        <h1>
                            Withdraw Amount
                        </h1>
                        <p>Due to the cost of gas fees, only referrals earning a minimum of 0.015
                                ETH will be processed. The maximum withdraw threshold is 14 days.</p>
                   </div>
                   <div>
                     <DropDownCurrency/>
                   </div>
                </div>
                <div className='mt-3 payment-method'>
                  <h1>Choose a payment method</h1>
                  <p>For security reasons, we recommend choosing connected wallet.</p>
                  <WalletDropDown/>
                  <button className='submit'>Submit Withdrawl Request</button>
                </div>

          </div>

    </div>
  )
}

export default WithdrawSetting