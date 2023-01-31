import Link from "next/link";
import RecentBid from "../components/elements/RecentBid";
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
            </Layout>
        </>
    );
}
export default Invoice;
