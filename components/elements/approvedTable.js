import React from 'react';
import {FaEthereum} from 'react-icons/fa'


const data = [
    {
        id: 1,
        title: "Avy",
        img: "15.jpg",
        curr:'eth',
        avatar: "1.jpg",
        status:"approved"
    },
    {
        id: 2,
        img: "16.jpg",
        avatar: "2.jpg",
        curr:'poly',
        title: "Mark",
        status:"pending"

    },
    {
        id: 2,
        img: "17.jpg",
        curr:'poly',
        avatar: "3.jpg",
        title: "Mark",
        status:"pending"
    },
    {
        id: 2,
        img: "18.jpg",
        curr:'eth',
        avatar: "4.jpg",
        title: "Mark",
        status:"declined"

    }
];

const RecentBid = () => {
    return (
        <>
            <div className="table-responsive" >
                <table className="table">
                    <thead>
                        <tr>
                            <th>Amount Requested</th>
                            <th>Currency</th>
                            <th>Transaction Date</th>
                            <th>Transaction ID</th>
                            <th
                            style={{
                                display:'flex',
                                flexDirection:'row',
                                justifyContent:'center'
                            }}
                            >Status</th>
                        </tr>
                    </thead>
                    <tbody className='table-body'>
                        {data.map((item, i) => (
                            <tr className='approved-row'>
                                <td>
                                   0.090
                                </td>
                                <td>
                                    {item?.curr==='eth' ?
                                            <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
                                                <FaEthereum size={25} className="eth" />
                                                <span>ETH </span>
                                            </div>
                                    :item.curr==='poly' &&
                                            <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
                                                <img src={'/icons/coin.png'} className="w-30" />
                                                <span>ETH </span>
                                            </div>
                                    }
                                </td>
                                <td>2022/10/07</td>
                                <td> 1</td>
                                <td >
                                    <div                                 
                                    className={
                                        item?.status==='approved' 
                                        ? 
                                        'status-approved':
                                        item?.status==='pending'
                                        ?
                                        'status-pending'
                                        :item?.status==='declined'
                                        && 'status-declined'
                                    }> 
                                      {item.status}
                                    </div>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </>
    );
};

export default RecentBid;