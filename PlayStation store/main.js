function redirect(){
    window.open("https://www.amazon.in/Sony-PS4-Dualshock-Magma-Red/dp/B073HJQ49W/ref=sr_1_1?keywords=PS4+V2+Dualshock+4&qid=1691501397&sr=8-1")
}
function ig(){
    window.open("https://www.instagram.com/playstation/")
}
function fb(){
    window.open("https://www.facebook.com/playstation/")
}
function tw(){
    window.open("https://twitter.com/PlayStation/")
}

var menuList = document.getElementById('menu-list');
menuList.style.maxHeight = "0px";

function togglemenu(){
    if (menuList.style.maxHeight == "0px"){
            menuList.style.maxHeight = "130px";
    }
    else{
            menuList.style.maxHeight = "0px";
    }
}