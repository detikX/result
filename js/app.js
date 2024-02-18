// var options = {
//     series: [
//         {
//             name: 'LSI Denny JA',
//             group: 'budget',
//             data: [42, 20, 28]
//         },
//         {
//             name: 'Charta Politika',
//             group: 'actual',
//             data: [42, 28, 20]
//         },
//         {
//             name: 'Poltracking',
//             group: 'budget',
//             data: [40, 20, 30]
//         },
//         {
//             name: 'PRC',
//             group: 'actual',
//             data: [44, 30, 24]
//         },
//         {
//             name: 'SMRC',
//             group: 'actual',
//             data: [45, 25, 30]
//         },
//         {
//             name: 'Litbang Kompas',
//             group: 'actual',
//             data: [45, 25, 30]
//         }
//     ],
//     chart: {
//         type: 'bar',
//         height: 350,
//         stacked: true,
//     },
//     stroke: {
//         width: 1,
//         colors: ['#fff']
//     },
//     dataLabels: {
//         formatter: (val) => {
//             // return val / 100 + '%'
//             return val + '%'
//         }
//     },
//     plotOptions: {
//         bar: {
//             horizontal: true
//         }
//     },
//     xaxis: {
//         categories: [
//             'Anies - Muhaimin',
//             'Prabowo - Gibran',
//             'Ganjar - Mahfud',

//         ],
//         labels: {
//             formatter: (val) => {
//                 // return val / 1000 + 'K'
//                 return val + '%'
//             }
//         }
//     },
//     fill: {
//         opacity: 1,
//     },
//     colors: ['#80c7fd', '#008FFB', '#80f1cb', '#00E396'],
//     legend: {
//         position: 'top',
//         horizontalAlign: 'left'
//     }
// };

// var chart = new ApexCharts(document.querySelector("#chart"), options);
// chart.render();


$('.gallery__link').click(function () {
    var buttonId = $(this).attr('id');
    $('#modal-container').removeAttr('class').addClass(buttonId);
    $('body').addClass('modal-active');
})

$('#closex').click(function () {
    $(this).parent().parent().parent().addClass('out');
    $('body').removeClass('modal-active');
});


//si rekap
$.ajax({
    url: 'https://sirekap-obj-data.kpu.go.id/pemilu/hhcw/ppwp.json',
    method: 'GET',
    success: function (response) {
        var chart = response.chart;
        var anies = Object.values(chart)[0];
        var prabowo = Object.values(chart)[1];
        var ganjar = Object.values(chart)[2];
        var totalx = anies + prabowo + ganjar;
        var persenAnies = anies / totalx * 100;
        var persenPrab = prabowo / totalx * 100;
        var persenGanj = ganjar / totalx * 100;
        var tgl = response.ts;
        // Object.values(obj)[0]; 
        // console.log(persenAnies)
        $(".realcount").append(
            `   
                <div class="text-center">
                    <div class="capres">Anies-Muhaimin = <b>${persenAnies.toFixed(2)}%</b></div>
                    <div class="capres">Prabowo-Gibran = <b>${persenPrab.toFixed(2)}%</b></div>
                    <div class="capres">Ganjar-Mahfud = <b>${persenGanj.toFixed(2)}%</b></div>
                </div>
                <br>
                <div class="text-center">Update terakhir: ${tgl}</div>

            `
        )
    }
})