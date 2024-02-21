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
    var name = $(this).attr('data-id')
    // alert(1)
    $(this).parent().parent().parent().parent().parent().children('#modal-container').removeAttr('class').addClass(buttonId);
    // $('#modal-container').removeAttr('class').addClass(buttonId);
    $(this).parent().parent().parent().parent().parent().children('#modal-container').children().children().children().children('.nama-paslon').text(name)
    $(".dalang").append()
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
        var progress = response.progres.progres;
        var progresstotal = response.progres.total;
        var progressnilai = progress / progresstotal * 100;
        // 2024-02-17 19:30:11

        var shortDate = new Date(tgl)
        var sliceDate = tgl.slice(11, 19)
        // console.log(sliceDate);
        var senin = shortDate.getDay();
        var getHari = shortDate.getDate();
        var getBulan = shortDate.getMonth() + 1;
        var getTahun = shortDate.getFullYear();

        var monthWording = {
            '1': 'Januari',
            '2': 'Februari',
            '3': 'Maret',
            '4': 'April',
            '5': 'Mei',
            '6': 'Juni',
            '7': 'Juli',
            '8': 'Agustus',
            '9': 'September',
            '10': 'Oktober',
            '11': 'November',
            '12': 'Desember',
        }

        var hariWording = {
            '1': 'Senin',
            '2': 'Selasa',
            '3': 'Rabu',
            '4': 'Kamis',
            '5': 'Jumat',
            '6': 'Sabtu',
            '0': 'Minggu'
        }


        $("#anies-per").text(persenAnies.toFixed(2))
        $("#anies-jum").text(anies.toLocaleString('id-ID'))

        $("#pra-per").text(persenPrab.toFixed(2))
        $("#pra-jum").text(prabowo.toLocaleString('id-ID'))

        $("#gan-per").text(persenGanj.toFixed(2))
        $("#gan-jum").text(ganjar.toLocaleString('id-ID'))
        $("#harinya").text(`${hariWording[senin]}, ${getHari} ${monthWording[getBulan]} ${getTahun}`)
        $("#jamnya").text(`${sliceDate} WIB`)
        $(".realcount").append(
            `   
                <div class="text-center datasx">
                    <div class="capres">Anies-Muhaimin = <b>${persenAnies.toFixed(2)}%</b></div>
                    <div class="capres">Prabowo-Gibran = <b>${persenPrab.toFixed(2)}%</b></div>
                    <div class="capres">Ganjar-Mahfud = <b>${persenGanj.toFixed(2)}%</b></div>
                </div>
                <br>
                <div class="text-center smalles">
                    <div class="lala">Suara masuk: <b>${progressnilai.toFixed(2)}%</b></div>
                    <div class="tanggalx"><i>Update</i> terakhir: <b>${hariWording[senin]}, ${getHari} ${monthWording[getBulan]} ${getTahun}</b></div>
                    <div class="jamx">Jam: <b>${sliceDate} WIB</b></div>
                </div>

            `
        )
    }
})

// $.ajax({
//     url: 'https://caleg.zakiego.com/api/dpr-ri/dapil/3101',
//     method: 'GET',
//     success: function (responsex) {
//         console.log(responsex)
//         var a;

//         for (a = 0; a < responsex.data.length; a++) {
//             // console.log(a);
//             var nama = responsex.data[a].nama;
//             var partai = responsex.data[a].namaPartai;
//             var agama = responsex.data[a].agama;
//             var hukum = responsex.data[a].usia;


//             // console.log(nama)
//             $('#myTable').append(`
//                 <tbody>
//                     <tr>
//                         <td>${nama}</td>
//                         <td>${partai}</td>
//                         <td>${agama}</td>
//                         <td>${hukum}</td>


//                     </tr>
//                 </tbody>
//             `)
//         }

//     }
// })

// $('#myTable').DataTable({
//     // responsive: true,
//     ajax: {
//         url: 'https://caleg.zakiego.com/api/dpr-ri/dapil/3101',
//         dataSrc: 'data',
//         // success: function (responsex) {
//         //     console.log(responsex)
//         // }
//     },
//     columns: [
//         { data: 'nama' },
//         // { data: 'pekerjaan' },
//         { data: 'namaPartai' },
//         { data: 'usia' },
//         // { data: 'agama' },
//         // { data: 'pekerjaan' },
//     ]
// });

$(document).ready(function () {
    // $('#myTable').DataTable();
});