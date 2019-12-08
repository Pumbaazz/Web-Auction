//Day la ham dem nguoc thoi gian dau gia cua san pham

//Set thoi gian dem nguoc
var CountDownDate = new Date("Dec 8, 2019 22:39:00").getTime();

var curTime = setInterval(function()
{
    //Lay thoi gian hien tai
    var now = new Date().getTime();

    //Thoi gian chenh lech
    var distance = CountDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);  

    document.getElementById("CountDown").textContent = days + " Ngày " + hours + " Giờ "
    + minutes + " Phút " + seconds + " Giây ";

    if (distance < 0) 
    {
        clearInterval(curTime);
        document.getElementById("Btn_Auction").style.display = 'none';
        document.getElementById("CountDown").textContent = "Thời gian đếm ngược đã kết thúc";
        
    }
});        
