function order(){
    let address = $('#address').val();

    $.ajax({
            type: "POST",
            url: "/order",
            data: {address_give:address},
            success: function (response){
                alert(response["msg"]);
                window.location.reload()
            }
        })
}
$(document).ready(function(){
    viewOrder();
})
function viewOrder(){
    $.ajax({
            type: "GET",
            url: "/order",
            data: {},
            success: function (response){
                let orders = response['view_orders']
                for(let i=0; i<orders.length; i++){
                    let address = orders[i]['address']
                    let temp_html = `<tbody>
                                        <tr>
                                            <th>${address}</th>
                                        </tr>
                                    </tbody>`
                    $('#tablehead').append(temp_html)
                }
            }
        })
}

// const ST = document.querySelector('#adres')
//
// function search(){
//     let status = $('#adres').val();
//     console.log(status)
//     $.ajax({
//         type: "POST",
//         url: "/search",
//         data: {adres_give: status},
//         success: function (response){
//             let T1 = response['view_search']
//             console.log(T1)
//         }
//     })
//
// }
//
// ST.addEventListener('input', search)

const ST = document.querySelector('#searchTest')

function search(){
    let status = $('#adres').val();
    $.ajax({
        type: "GET",
        url: `/search?search=${status}`,
        data:{},
        success:function(response){
            let searches = response['view_search']
             for(let i=0; i<orders.length; i++) {
                 let adres = searches[i]['address']
                 let temp_html = `<tbody>
                                <tr>
                                    <th>${adres}</th>
                                </tr>
                            </tbody>`
                 $('#tablehead').append(temp_html)
             }
        }
    })
}

ST.addEventListener('submit', search)

// $.ajax({
//     type: "GET",
//     url: "/test?title_give=봄날은간다",
//     data: {},
//     success: function(response){
//        console.log(response)
//     }
//   })