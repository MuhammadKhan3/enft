import { Line } from "react-chartjs-2";

function LineInvestment({ investmentData }) {
    const data = {
        labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
        datasets: [
            {
                label: "Youtube",
                data: investmentData.data,
                backgroundColor: "#E3FFF7",
                borderColor:  '#10E7AD',
                // lineTension: 0,
                // pointRadius: 5,
                borderWidth: 2,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            animateRotate: true,
            animateScale: true,
        },
        tooltips: {
            enabled: false,
        },
        legend: {
            display: false,
            labels: {
                usePointStyle: false,
            },
        },
        scales: {
            xAxes: [
                {
                    display: true,
                    gridLines: {
                        display: false,
                        drawBorder: false,
                    },
                    scaleLabel: {
                        display: false,
                        labelString: "Month",
                    },
                    borderDash: [8, 4],
                },
            ],
            yAxes: [
                {
                    display: true,
                    gridLines: {
                        display: true,
                        drawBorder:true,
                        borderDash: [8, 10],
                    },
                    scaleLabel: {
                        display: false,
                        labelString: "Value",
                    },
                },
            ],
        },
    };

    
    return (
        <>
            <Line
                className="chartchart-height"
                data={data}
                height={120}
                options={options}
                id="transaction-graph"
            />
        </>
    );
}
export default LineInvestment;
