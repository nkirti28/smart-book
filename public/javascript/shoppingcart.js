$(document).ready(function () {
  let cleanedCarts;
  // ******************** Event listeners *********************
  $(document).on("click", (event) => {
    // Continue browsing button clicked
    console.log("continue browsing button clicked!");
    if ($(event.target).attr("id") === "continueBrowsing") {
      window.location.href = "/category";
    }
  });

  // const totalPrice = () => {
  //   console.log("totalPrice");

  //   $.ajax({
  //     method: "GET",
  //     URL: "/shoppingcart/",
  //   }).then((dbShoppingCartData) => {
  //     let total = 0;
  //     if (dbShoppingCartData.length > 0) {

  //     }
  //   });
  // };
});
