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




// Inline popups
$('#inline-popups').magnificPopup({
    delegate: 'a',
    removalDelay: 500, //delay removal by X to allow out-animation
    callbacks: {
        beforeOpen: function () {
            this.st.mainClass = this.st.el.attr('data-effect');
        }
    },
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
});


// Image popups
$('#image-popups').magnificPopup({
    delegate: 'a',
    type: 'image',
    removalDelay: 500, //delay removal by X to allow out-animation
    callbacks: {
        beforeOpen: function () {
            // just a hack that adds mfp-anim class to markup 
            this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
            this.st.mainClass = this.st.el.attr('data-effect');
        }
    },
    closeOnContentClick: true,
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
});


// Hinge effect popup
$('a.hinge').magnificPopup({
    mainClass: 'mfp-with-fade',
    removalDelay: 1000, //delay removal by X to allow out-animation
    callbacks: {
        beforeClose: function () {
            this.content.addClass('hinge');
        },
        close: function () {
            this.content.removeClass('hinge');
        }
    },
    midClick: true
});
