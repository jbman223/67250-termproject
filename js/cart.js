$(function () {
  var cart = Cookies.getJSON('cart');

  if (!cart) {
    cart = {};
    cart.items = [];
  }
  Cookies.set("cart", cart);

  var cartLink = $(".cart");
  cartLink.text("Cart ("+cart.items.length+" items)");

  $(".add-to-cart").click(function (e) {
    e.preventDefault();
    if (!$(this).data("id")) return;
    cart.items.push($(this).data("id"));
    Cookies.set("cart", cart);
    window.location = "cart.html";
  });

  if ($(".cart-items")) {
    for (var i = 0; i < cart.items.length; i++) {
      if (isNaN(cart.items[i])) {
        cart.items = [];
        Cookies.set("cart", cart);
        return;
      }
      var wallet = wallets[parseInt(cart.items[i])];
      var td = "<tr>";
      td += "<td>"+wallet.name+"</td>";
      td += "<td>"+wallet.price+"</td>";
      td += "<td>1</td>";
      td += "<td><a href='#' class='remove' data-i='"+i+"'>Remove</a></td>";
      td += "</tr>";
      $(".cart-items").html($(".cart-items").html() + td);
    }

    $(".cart-items").on("click", ".remove", function (e) {
      e.preventDefault();
      cart.items.splice($(this).data("i"), 1);
      Cookies.set("cart", cart);
      window.location.reload();
    })
  }



});
