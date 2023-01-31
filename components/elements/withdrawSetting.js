import React, { useState } from 'react'
import ApprovedTable from './approvedTable';
import DropDownCurrency from './dropDownCurrency';
import {BsExclamationLg} from 'react-icons/bs'
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

                    <div  className={label==='canceled' ? 'withdraw-setting-labelActive':''} onClick={()=>{setlabel('canceled')}}>
                        Canceled Requests
                    </div>
                </div>
                {label==='withdraw' ? 
                <>
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
                </>
                :label==='approved' ?
                  <div>
                      <div className='approved mt-3'> 
                         <h1>
                             Approved Withdrawal Requests
                         </h1>
                         <p>Due to the cost of gas fees, only referrals earning a minimum of 0.015
                                 ETH will be processed. The maximum withdraw threshold is 14 days</p>
                      </div>
                      <div> 
                       <ApprovedTable/>
                      </div>
                  </div>
                  :label==='canceled' &&
                  <div className='canceled'>
                      <h1>Declined Withdrawal Requests</h1>
                      <p>Mintey may approve/decline requests for which we believe they infringe
                         the marketplace policy and terms of servce</p>
                      <div  className='exclamation'>
                         <BsExclamationLg size={30} className="exclamation-logo" />
                         <h1>No transactions were found.</h1>
                      </div>
                  </div>
                }

          </div>

    </div>
  )
}

export default WithdrawSetting