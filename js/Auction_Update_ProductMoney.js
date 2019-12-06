function Auction_ProductMoney()
{
    var money = document.getElementById('Product_Original_Money');
    var money1 = money.textContent;
    var money2 = parseFloat(money1);
    UpMoney = money2 + 100000;
    document.getElementById('Product_Auction_Money').textContent = UpMoney.toString();
}