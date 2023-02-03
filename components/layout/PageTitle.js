

function PageTitle({ pageTitle, pageTitleSub, parent, child ,description}) {
    return (
        <>
            <div className="page-title w-fit">
                <div className="row align-items-center justify-content-between w-fit">
                    <div className="col-6 w-fit">
                        <div className="page-title-content w-fit">
                            <h3>{pageTitle}</h3>
                            {description?.length>0 && <p className="mt-2 w-93 description">{description}</p>}
                            <p className="mb-2">{pageTitleSub}</p>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
export default PageTitle;
