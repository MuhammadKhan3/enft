import React from 'react';

const data = [
    {
        id: 1,
        title: "Avy",
        img: "15.jpg",
        avatar: "1.jpg",
    },
    {
        id: 2,
        img: "16.jpg",
        avatar: "2.jpg",
        title: "Mark"
    },
    {
        id: 2,
        img: "17.jpg",
        avatar: "3.jpg",
        title: "Mark"
    },
    {
        id: 2,
        img: "18.jpg",
        avatar: "4.jpg",
        title: "Mark"
    }
];

const SaleTable = () => {
    return (
        <>
            <div className="table-responsive">
                <table className="table table-sale">
                    <thead>
                        <tr>
                            <th>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckDefault"
                                    />
                                </div>
                            </th>
                            <th>Program</th>
                            <th>Time</th>
                            <th>Type</th>
                            <th>Order Total</th>
                            <th>Your Earnings</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, i) => (
                            <tr>
                                <td>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                        />
                                    </div>
                                </td>
                                <td>
                                   Cactus
                                </td>
                                <td>
                                  18/25/5
                                </td>
                                <td>0.0025 ETH</td>
                                <td> 0.0025 ETH</td>

                                <td>2 Hours 1 min 30s</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </>
    );
};

export default SaleTable;