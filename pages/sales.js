import Link from "next/link";
import RecentBid from "../components/elements/RecentBid";
import SaleTable from "../components/elements/saleTable";
import Layout from "../components/layout/Layout";
function Invoice() {
    return (
        <>
            <Layout
                headTitle="Sales Activities"
                pageTitle="Sales Activities"
                pageTitleSub={""}
                pageClass={"dashboard"}
                parent={"Home"}
                child={"Bids"}
            >
                    <div className="col-xl-12">
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

                                    <SaleTable/>
                            </div>
                        </div>
                    </div>
            </Layout>
        </>
    );
}
export default Invoice;
