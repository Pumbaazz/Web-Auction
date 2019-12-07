//Day la script de Get, Update gia tri cua san pham duoc dau gia

function GetOriValue()
{
    var OriValue = document.getElementById('Original_valueProduct').textContent;
    document.getElementById('Auction_value_2').textContent = OriValue;
    document.getElementById('Auction_value_2').style.color = "#FF0000";
    document.getElementById('Auction_value_2').style.fontSize = "20px";
}
GetOriValue()
function GetAuctionValue()
{
    return document.getElementById('Auction_value_2').textContent;
}
function UpdateValue()
{   
    var PreValue = GetAuctionValue();
    Convert_PreValue = parseFloat(PreValue);
    var LatestValue = Convert_PreValue + 250000;
    document.getElementById('Auction_value_2').textContent = LatestValue.textContent;
}
document.getElementById('Btn_Auction').addEventListener('click',UpdateValue)
