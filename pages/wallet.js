import { useState } from "react";
import { connect } from "react-redux";
import LineInvestment from "../components/chart/LineInvestment";
import BalanceDetails from '../components/elements/BalanceDetails';
import Layout from "../components/layout/Layout";
import LayoutWithdraw from "../components/layout/LayoutWithdraw";
import {FaCoins} from 'react-icons/fa'
import {MdPolymer} from 'react-icons/md'
import {FiRefreshCcw} from 'react-icons/fi'
import {SiEthereum} from 'react-icons/si'
import SelectDropdown from "../components/elements/dropDown";
import WithdrawSetting from "../components/elements/withdrawSetting";



function Balance({ investmentData }) {
    const [open, setOpen] = useState("a1");
    const [label,setlabel]=useState("");
    const [withdraw,setwithdraw]=useState(false);



    return (
        <>
            <LayoutWithdraw
                headTitle={withdraw ?  'Withdraw Settings':'Referal Statistics'}
                pageTitle={withdraw ?  'Withdraw Settings':'Referal Statistics'}
                pageTitleSub={""}
                pageClass={"dashboard"}
                parent={"Home"}
                child={"Referal Statistics"}
                withdraw={withdraw}
                setwithdraw={setwithdraw}
            >
                <div class="main-wallet-header d-flex justify-content-around creator-widget active  align-items-center">
                    
                    <div className="main-wallet-header-list">
                        <div className="wallet-icons-container-one">
                           <div>
                               <FaCoins color="black" size={20} className="wallet-icons-one"/>
                           </div>
                        </div>
                         <div className="d-flex flex-column wallet-icons-child">
                            <p>Total Earnings in USD$</p>
                            <h2>$125,50</h2>
                         </div>
                    </div>

                    <div className="main-wallet-header-list">
                        <div className="wallet-icons-container-two">
                           <div >
                               <SiEthereum  size={20} className="wallet-icons-two"/>
                           </div>
                        </div>
                         <div className="d-flex flex-column wallet-icons-child">
                            <p>Total Earnings in USD$</p>
                            <h2>$125,50</h2>
                         </div>
                    </div>

                    <div className="main-wallet-header-list">
                        <div className="wallet-icons-container-three">
                           <div >
                               <MdPolymer color="black" size={20} className="wallet-icons-three"/>
                           </div>
                        </div>
                         <div className="d-flex flex-column wallet-icons-child">
                            <p>Total Earnings in USD$</p>
                            <h2>$125,50</h2>
                         </div>
                    </div>
                </div>
            {withdraw ?
                <WithdrawSetting/>
            :
            <div className="row row-div mt-3">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 cards" >
                        <div className="card">
                            <div> 
                                <div className="sales-icons-list">
                                    <div className="sales-icons-container">
                                        <div >
                                            <FiRefreshCcw  size={20} className="sales-icons" />
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column sales-icons-child">
                                        <h2 style={{margin:'0px'}}>15</h2>
                                        <p style={{margin:'0px'}}>Sales</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div> 
                                <div className="ref-visitor-list">
                                    <div className="ref-visitor-container">
                                        <div >
                                            <FiRefreshCcw  size={20} className="ref-visitor" />
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column ref-visitor-child">
                                        <h2 style={{margin:'0px'}}>15</h2>
                                        <p style={{margin:'0px'}}>Sales</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="card">
                            <div> 
                                <div className="con-rate-list">
                                    <div className="con-rate-container">
                                        <div >
                                            <FiRefreshCcw  size={20} className="con-rate" />
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column con-rate-child">
                                        <h2 >7.9%</h2>
                                        <p>Conversion Rate</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xxl-8 col-xl-8 col-lg-6">
                            <div className="card" >
                                <div className="card-body chart-height">
                                        <div  className="states-label">
                                              <div className="states-label-inner">
                                                    <div onClick={()=>setlabel('Impressions')} className={`label ${label==='Impressions' ? 'state-label-active' :''}`}>
                                                        Impressions
                                                    </div>
                                                    <div onClick={()=>setlabel('clicks')} className={`label ${label==='clicks' ? 'state-label-active' :''}`}>
                                                        Clicks
                                                    </div>
                                                    <div onClick={()=>setlabel('sales')} className={`label ${label==='sales' ? 'state-label-active' :''}`}>
                                                        Sales
                                                    </div>
                                                    <div onClick={()=>setlabel('orderValue')} className={`label ${label==='orderValue' ? 'state-label-active' :''}`}>
                                                        Order Value
                                                    </div>
                                                    <div onClick={()=>setlabel('commission')} className={`label ${label==='commission' ? 'state-label-active' :''}`}>
                                                        Commission
                                                    </div>
                                              </div>
                                              <div className="label-dropmenu">
                                                  <SelectDropdown/>
                                                   {/* From <span className="withdraw-dropdown">Last 7 days</span> */}
                                              </div>
                                        </div>                                        
                                        <LineInvestment
                                                investmentData={investmentData}
                                        />
                                </div>
                            </div>
                    </div>
                </div>
            }
            </LayoutWithdraw>
        </>
    );
}
const mapStateToProps = (state) => ({
    investmentData: state.LineInvestment.investment,
});
export default connect(mapStateToProps, {})(Balance);
