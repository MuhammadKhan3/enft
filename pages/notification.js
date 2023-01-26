import Example from "../components/elements/switch";
import Layout from "../components/layout/Layout";
import SettingsMenu from "../components/layout/SettingsMenu";
import Switch from "react-switch";
import { useState } from "react";

function Notification() {
    const [switchvalues,setswitchvalues]=useState({
        soldItem:false,
        bidActivity:false,
        expiringAuction:false,
        getOutbid:false,
        ownerItem:false,
        successPurchase:false,
        successMinting:false,
        gotNewFollower:false,

    });


    console.log(switchvalues)

    return (
        <>
        <Layout
                headTitle="Security"
                pageTitle="Security"
                pageTitleSub={"Welcome ENFTX Settings Security page"}
                pageClass={"dashboard"}
                parent={"Settings"}
                child={"Security"}
        >
                <SettingsMenu />

                <div className="row">
                    <div className="col-xxl-12">
                    {/*     <div className="card"> */}
                            {/* <div className="card-header">
                                <h4 className="card-title"></h4>
                            </div>
                            <div className="card-body">
                                <div className="verify-content ">
                                    <div className="d-flex align-items-center">
                                        <span className="me-3 icon-circle bg-primary text-white">
                                            <i className="ri-smartxs-line"></i>
                                        </span>
                                        <div className="primary-number">
                                            <p className="mb-0"><strong>+xxx xxxxxxxx60</strong></p>
                                            <small>Keep your primary xs number up-to-date</small>
                                            <br />
                                            <span className="text-success">Required</span>
                                        </div>
                                    </div>
                                    <button className=" btn btn-primary">Manage</button>
                                </div>
                                <hr className="dropdown-divider my-4" />
                                <div className="verify-content">
                                    <div className="d-flex align-items-center">
                                        <span className="me-3 icon-circle bg-primary text-white"><i className="ri-mail-line"></i></span>
                                        <div className="primary-number">
                                            <p className="mb-0"><strong>hello@example.com</strong></p>
                                            <small>Keep your primary email up-to-date</small>
                                            <br />
                                            <span className="text-success">Required</span>
                                        </div>
                                    </div>
                                    <button className=" btn btn-primary">Manage</button>
                                </div>
                                <hr className="dropdown-divider my-4" />
                                <div className="verify-content">
                                    <div className="d-flex align-items-center">
                                        <span className="me-3 icon-circle bg-primary text-white"><i className="ri-key-line"></i></span>
                                        <div className="primary-number">
                                            <p className="mb-0"><strong>*************</strong></p>
                                            <small>You can change your password</small>
                                            <br />
                                            <span className="text-success">Required</span>
                                        </div>
                                    </div>
                                    <button className=" btn btn-primary">Manage</button>
                                </div>

                            </div>
                        </div> */}
                    </div>
                    
                    <div className="col-xxl-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Notification Preferences</h4>
                            </div>
                            <div className="card-body cols-flex">
                                <div className="verify-content ">
                                    <div className="d-flex justify-content-between width-50 "  style={{margin:'auto'}}>
                                    
                                       <h5 className="notification-title">Sold Items</h5>
                                       <h6 className="notification-description" style={{textAlign:'justify'}}>When one of your NFT sells</h6>
                                       <Switch handleDiameter={20} uncheckedIcon={true} checkedIcon={true} onColor="#00FFFF" checked={switchvalues.soldItem} onChange={(checked)=>        setswitchvalues((prev)=>({...prev,soldItem:checked}))}/>
                                    </div>
                                 </div>
                                 <div className="verify-content ">
                                        <div className="d-flex  align-items-center  justify-content-between width-50 " style={{margin:'auto'}} >
                                            <h5 className="notification-title">Bid Activity</h5>
                                            <h6 className="notification-description" style={{textAlign:'justify'}}>When someone bids on one of your listing</h6>
                                            <Switch handleDiameter={20} uncheckedIcon={true} checkedIcon={true} onColor="#00FFFF" checked={switchvalues.bidActivity} onChange={(checked)=>        setswitchvalues((prev)=>({...prev,bidActivity:checked}))}/>
                                       </div>
                                 </div>

                                 <div className="verify-content ">
                                        <div className="d-flex  justify-content-between width-50">
                                            <h5 className="notification-title">Expiring Auctions & Bids</h5>
                                            <h6 className="notification-description">When your bid expires or gets deactivated because of insufficient funds</h6>
                                            <Switch handleDiameter={20} uncheckedIcon={true} checkedIcon={true} onColor="#00FFFF" checked={switchvalues.expiringAuction} onChange={(checked)=>        setswitchvalues((prev)=>({...prev,expiringAuction:checked}))}/>
                                       </div>
                                 </div>

                                 <div className="verify-content ">
                                        <div className="d-flex  justify-content-between width-50">
                                            <h5 className="notification-title">Getting Outbid</h5>
                                            <h6 className="notification-description">When someone set higher bid than yours for a same listing</h6>
                                            <Switch handleDiameter={20} uncheckedIcon={true} checkedIcon={true} onColor="#00FFFF" checked={switchvalues.getOutbid} onChange={(checked)=>        setswitchvalues((prev)=>({...prev,getOutbid:checked}))}/>
                                       </div>
                                 </div>

                                 <div className="verify-content ">
                                        <div className="d-flex  justify-content-between width-50">
                                            <h5 className="notification-title">Owned Item Updates</h5>
                                            <h6 className="notification-description">When a sagnificant update occurs for one of your items you have purchased on Mintey</h6>
                                            <Switch handleDiameter={20} uncheckedIcon={true} checkedIcon={true} onColor="#00FFFF" checked={switchvalues.ownerItem} onChange={(checked)=>        setswitchvalues((prev)=>({...prev,ownerItem:checked}))}/>
                                       </div>
                                 </div>

                                 <div className="verify-content ">
                                        <div className="d-flex  justify-content-between width-50">
                                            <h5 className="notification-title">Successful Purchases</h5>
                                            <h6 className="notification-description">Be notified for every successful purchase or transfer</h6>
                                            <Switch handleDiameter={20} uncheckedIcon={true} checkedIcon={true} onColor="#00FFFF" checked={switchvalues.successPurchase} onChange={(checked)=>        setswitchvalues((prev)=>({...prev,successPurchase:checked}))}/>
                                       </div>
                                 </div>

                                 <div className="verify-content ">
                                        <div className="d-flex  justify-content-between width-50">
                                            <h5 className="notification-title">Successful Minting</h5>
                                            <h6 className="notification-description">Be notified when your listing will be successfully minted on the blockchain</h6>
                                           <Switch handleDiameter={20} uncheckedIcon={true} checkedIcon={true} onColor="#00FFFF" checked={switchvalues.successMinting} onChange={(checked)=>        setswitchvalues((prev)=>({...prev,successMinting:checked}))}/>
                                       </div>
                                 </div>

                                 <div className="verify-content ">
                                        <div className="d-flex  justify-content-between width-50">
                                            <h5 className="notification-title">Got New Follower</h5>
                                            <h6 className="notification-description">When someone follows you on Mintey</h6>
                                            <Switch handleDiameter={20} uncheckedIcon={true} checkedIcon={true} onColor="#00FFFF" checked={switchvalues.gotNewFollower} onChange={(checked)=>        setswitchvalues((prev)=>({...prev,gotNewFollower:checked}))}/>
                                       </div>
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>

            {/* <Layout
                headTitle="Notification"
                pageTitle="Notification"
                pageTitleSub={"Welcome ENFTX Notification page"}
                pageClass={"dashboard"}
                parent={"Home"}
                child={"Notification"}
            >
                <div className="row">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Recent Notification </h4>
                            </div>
                            <div className="card-body">
                                <div className="all-notification">
                                    <div className="notification-list">
                                        <div className="lists">
                                            <a href="#" className="">
                                                <div className="d-flex align-items-center">
                                                    <span className="me-3 icon success">
                                                        <i className="bi bi-check"></i>
                                                    </span>
                                                    <div>
                                                        <p>
                                                            Account created
                                                            successfully
                                                        </p>
                                                        <span>
                                                            2020-11-04 12:00:23
                                                        </span>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" className="">
                                                <div className="d-flex align-items-center">
                                                    <span className="me-3 icon fail">
                                                        <i className="bi bi-x"></i>
                                                    </span>
                                                    <div>
                                                        <p>
                                                            2FA verification
                                                            failed
                                                        </p>
                                                        <span>
                                                            2020-11-04 12:00:23
                                                        </span>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" className="">
                                                <div className="d-flex align-items-center">
                                                    <span className="me-3 icon success">
                                                        <i className="bi bi-check"></i>
                                                    </span>
                                                    <div>
                                                        <p>
                                                            Device confirmation
                                                            completed
                                                        </p>
                                                        <span>
                                                            2020-11-04 12:00:23
                                                        </span>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" className="">
                                                <div className="d-flex align-items-center">
                                                    <span className="me-3 icon pending">
                                                        <i className="bi bi-exclamation-triangle"></i>
                                                    </span>
                                                    <div>
                                                        <p>
                                                            xs verification
                                                            pending
                                                        </p>
                                                        <span>
                                                            2020-11-04 12:00:23
                                                        </span>
                                                    </div>
                                                </div>
                                            </a>

                                            <a>
                                                More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout> */}
        </>
    );
}
export default Notification;
