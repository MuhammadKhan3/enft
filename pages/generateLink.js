
import {RxInstagramLogo} from 'react-icons/rx';
import {RxTwitterLogo} from 'react-icons/rx';
import {FaDiscord} from 'react-icons/fa';
import {ImFacebook} from 'react-icons/im';
import {BsYoutube} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs'
import Link from "next/link";
import RecentBid from "../components/elements/RecentBid";
import SaleTable from "../components/elements/saleTable";
import Layout from "../components/layout/Layout";
import { useRef, useState,useEffect } from 'react';
import { Spinner } from 'reactstrap';
import { Tooltip } from 'reactstrap';



function GenerateLink() {
    const [isgenerate,setisgenerate]=useState('generate');
    const referenceLink=useRef();
    const [iscopied,setcopied]=useState('');
    const GenerateHandler=()=>{
        setisgenerate('loading')
        setisgenerate('reference-link')
    }
    
     const copyHandler=()=>{
        const value=document.getElementById('reference').innerText;
        
        navigator.clipboard.writeText(value)
        setcopied('copied')
    }
    console.log(iscopied)
    const texthandler=()=>{
        window.getSelection.toString();
    }
    return (
        <>
            <Layout
                headTitle="Generate Refferal Link"
                pageTitle="Generate Refferal Link"
                pageTitleSub={""}
                pageClass={"dashboard"}
                parent={"Home"}
                child={"Bids"}
                description={"Generate referral link and start earning from your social media or website. Copy and paste your unique referral link within the content you want to promote. Anytime someone buys NFT on Mintey through your link, you will earn."}
            >

                    <div className="col-xl-12">
                        <div className="social-link">
                            <div>
                                <RxInstagramLogo size={20} className="social-icon"/>
                                <div className='social-title'> 
                                Instagram 
                                </div>
                            </div>
                            <div>
                                <RxTwitterLogo size={20} className="social-icon"/>
                                <div className='social-title'> 
                                Twitter 
                                </div>
                            </div>
                            <div>
                                <ImFacebook size={20} className="social-icon"/>
                                <div className='social-title'> 
                                Twitter 
                                </div>
                            </div>
                            <div>
                                <FaDiscord size={20} className="social-icon"/>
                                <div className='social-title'> 
                                Discord
                                </div>
                            </div>
                            <div>
                                <BsYoutube size={20} className="social-icon"/>
                                <div className='social-title'> 
                                Youtube 
                                </div>
                            </div>
                            <div>
                                <BsLinkedin size={20} className="social-icon"/>
                                <div className='social-title'> 
                                Linkedin
                                </div>
                                {/*  */}
                            </div>
                        </div>
                        <div className='mt-5 w-auto'>                
                            
                            <button className={` ${isgenerate==='generate'  ? 'generate-btn' :'generate-link'} w-50`}  onClick={GenerateHandler}>{isgenerate==='generate' ?  'Generate Referral link!' : isgenerate==='loading' ? <Spinner animation="border"  variant="light" > <span className="visually-hidden">Loading...</span> </Spinner>: isgenerate==='reference-link' && <> <span value={'https://www.mintey.io?ref=243208w4cv9wjd3r4r38cT'} id='reference' ref={referenceLink} onMouseUp={texthandler} >https://www.mintey.io?ref=243208w4cv9wjd3r4r38cT</span> <span className='cp' onClick={copyHandler}   id='TooltipExample' data-tooltip-content={iscopied.length>0 ?  'Copied':'copy link'}>Copy</span></>  }</button>
                        </div>
                        <p className='mt-4 paragraph-social' >

                            Generate referral link and start earning from your social media or website. Copy and paste your unique referral link within
                            the content you want to promote. Anytime someone buys NFT on Mintey through your link, you will earn.
                            Anytime a user buys something on Mintey through this link, you will earn 1% of the sale. Referrals are processed once a month. Due to the cost
                            of gas fees, only referrals earning a minimum of 0.015 ETH will be processed. How does the referral program work?
                        </p>
                        <div className="card">
                            {/* <div className="card-header flex-row">
                                <h4 className="card-title">Active Bids </h4>
                                <Link href="/create-invoice">
                                    <a className="btn btn-primary">
                                        Place a Bid
                                    </a>
                                </Link>
                            </div> */}
                            <div className="card-body p-0 bs-0 bg-transparent">

                            </div>
                        </div>
                    </div>
            </Layout>
        </>
    );
}
export default GenerateLink;
