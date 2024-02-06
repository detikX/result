var options = {
    series: [
        {
            name: 'LSI Denny JA',
            group: 'budget',
            data: [52, 20, 28]
        },
        {
            name: 'Charta Politika',
            group: 'actual',
            data: [52, 28, 20]
        },
        {
            name: 'Poltracking',
            group: 'budget',
            data: [50, 20, 30]
        },
        {
            name: 'PRC',
            group: 'actual',
            data: [45, 30, 25]
        },
        {
            name: 'SMRC',
            group: 'actual',
            data: [45, 25, 30]
        },
        {
            name: 'Litbang Kompas',
            group: 'actual',
            data: [45, 25, 30]
        }
    ],
    chart: {
        type: 'bar',
        height: 350,
        stacked: true,
    },
    stroke: {
        width: 1,
        colors: ['#fff']
    },
    dataLabels: {
        formatter: (val) => {
            // return val / 100 + '%'
            return val + '%'
        }
    },
    plotOptions: {
        bar: {
            horizontal: true
        }
    },
    xaxis: {
        categories: [
            'Anies - Muhaimin',
            'Prabowo - Gibran',
            'Ganjar - Mahfud',
            
        ],
        labels: {
            formatter: (val) => {
                // return val / 1000 + 'K'
                return val + '%'
            }
        }
    },
    fill: {
        opacity: 1,
    },
    colors: ['#80c7fd', '#008FFB', '#80f1cb', '#00E396'],
    legend: {
        position: 'top',
        horizontalAlign: 'left'
    }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();