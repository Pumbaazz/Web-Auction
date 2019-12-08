//Day la script de Get, Update gia tri cua san pham duoc dau gia


//Luu tru gia tri goc cua san pham

if(typeof(Storage) !== 'undefined')
{
    localStorage.setItem('IP11_OriginalValue', '43909000');
    if(document.readyState == 'complete')
    {
        localStorage.setItem('IP11_AuctionValue', localStorage.getItem('IP11_OriginalValue'));
    }
    else
    {
        localStorage.setItem('IP11_AuctionValue_2', localStorage.getItem('IP11_AuctionValue'));
        localStorage.removeItem('IP11_AuctionValue');
        localStorage.setItem('IP11_AuctionValue', localStorage.getItem('IP11_AuctionValue_2'));
        localStorage.removeItem('IP11_AuctionValue_2');
    }
}
else
{
    alert('Trình duyệt của bạn không hỗ trợ!');
}


// var Original_Money = 43909000
// var Latest_Money = Original_Money
// var count = 0

//Day la function dung de lay gia tri goc cua san pham, gan vao gia tri dau gia 
//(luc moi load trang lan dau)

function Display_AucValue_First()
{
   // var OriValue = document.getElementById('Original_valueProduct').textContent;
//    if(count == 0)
//         document.getElementById('Auction_value_2').textContent = Original_Money;
//     else
//         document.getElementById('Auction_value_2').textContent = Latest_Money;

    document.getElementById('Auction_value_2').textContent = localStorage.getItem('IP11_AuctionValue');
    document.getElementById('Auction_value_2').style.color = "#FF0000";
    document.getElementById('Auction_value_2').style.fontSize = "20px";
}
Display_AucValue_First();


//Ham nay dung de lay gia tri dau gia cua san pham
function GetAuctionValue()
{
    return document.getElementById('Auction_value_2').textContent;
}


//Ham nay dung de update gia tri dau gia khi co nguoi click vao
function UpdateValue()
{   var result = confirm("Xác nhận tham gia đấu giá?")
    if(result)
    {
       var PreValue = GetAuctionValue();
        var LatestValue = parseFloat(PreValue);
        LatestValue = LatestValue + 250000;
        var convet = LatestValue.toString();
        if(typeof(Storage) !== 'undefined')
        {
            localStorage.removeItem('IP11_AuctionValue');
            localStorage.setItem('IP11_AuctionValue',convet);
        }
        
        document.getElementById('Auction_value_2').textContent = convet; 
    }
    else{
        alert("Chúc bạn mua sắm vui vẻ");
    }
    
}
//document.getElementById('Btn_Auction').addEventListener('click',UpdateValue)