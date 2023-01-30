import { useEffect, useState } from "react";
import Header from "./Header";
import PageHead from "./PageHead";
import PageTitle from "./PageTitle";
import Sidebar from "./sidebar";
import { Button } from 'reactstrap';
import {BiChevronDown} from 'react-icons/bi'
import Dropdown from "../elements/dropDown";
import { useRouter } from "next/router";

const options = [
    'one', 'two', 'three'
];
const defaultOption = options[0];


const LayoutWithdraw = ({
    headTitle,
    children,
    pageTitle,
    pageTitleSub,
    pageClass,
    parent,
    child,
    withdraw,
    setwithdraw,
}) => {
    const [height, setHeight] = useState();
    const router=useRouter();
    useEffect(() => {
        setHeight(window.screen.height);
    }, []);
    return (
        <>
            <PageHead headTitle={headTitle} />
            <div id="main-wrapper" className={pageClass}>
                <Header />
                <Sidebar />

                <div className="content-body" style={{ minHeight: height - 122 }}>
                    <div className="container">
                      <div className="d-flex ">

                        {pageTitle && (
                            <>
                            <div className="d-flex align-items-start" style={{width:'100%'}}>

                                <PageTitle
                                    pageTitle={pageTitle}
                                    pageTitleSub={pageTitleSub}
                                    parent={parent}
                                    child={child}
                                />
                                <div className="d-flex flex-column align-items-center">
                                    <div className="mt-2 ml-5 d-flex align-items-center c-pointer">
                                        {!withdraw &&
                                        <Dropdown/>
                                        }
                                        {/* <div>
                                            From <span className="withdraw-dropdown">Last 7 days</span>
                                            </div>
                                            <div>
                                            <BiChevronDown  size={20}/>
                                        </div>                                     */}

                                    </div>
                                    {/* <div className="dropdown">
                                            <div>
                                                1 Month
                                            </div>
                                            <div>
                                                1 Year
                                            </div>
                                    </div> */}
                                </div>
                            
                            </div>
                            </>
                        )}
                        <div className="right-0 w-16">
                            <Button  className="withdrawBtn" onClick={()=>{setwithdraw(true);}}>Withdraw Earnings</Button>
                        </div>                        
                      </div>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default LayoutWithdraw;
