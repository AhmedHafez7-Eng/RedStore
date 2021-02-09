// Toggle Navbar Menu
var MenuItems = document.getElementById('menuItems');

MenuItems.style.maxHeight = "0px";

function menuToggle() {
  if (MenuItems.style.maxHeight == "0px") {

      MenuItems.style.maxHeight = "400px";
      MenuItems.style.padding = "30px";

  }else{
      MenuItems.style.maxHeight = "0px";
      MenuItems.style.padding = "0px";
  }
}