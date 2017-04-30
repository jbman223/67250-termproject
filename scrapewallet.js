function getWalletInfo(categories) {
  var wallet = {};

  if (categories.length == 0) {
    categories = prompt("Enter categories separated by commas only").split(",");
  }

  wallet.name = $(".productName").text();
  wallet.price = $("#cycmainprice").text();
  wallet.rating = $("a[href='#reviews']").find('img').attr("src");
  var rating = wallet.rating.split("/");
  wallet.rating = rating[rating.length - 1];

  wallet.colors = [];
  var colors = $(".cycMagicOptions");
  colors.find(".selection").each(function () {
    wallet.colors.push($(this).find("img").attr("src"));
  })

  wallet.description = $("div[itemprop='description']").html();

  wallet.image = $("#mainImage").attr("href");

  wallet.categories = categories;

  var element = document.createElement("div");
  element.style.zindex = 10000;
  element.style.position = "absolute";
  element.style.top = 0;
  element.style.width = "100%";
  element.style.height = "100%";


  var textbox = document.createElement("textarea");
  textbox.value = JSON.stringify(wallet);
  textbox.style.width = "100%";
  textbox.style.height = "100%";
  element.appendChild(textbox);

  document.getElementsByTagName("body")[0].appendChild(element);
}
getWalletInfo([]);
