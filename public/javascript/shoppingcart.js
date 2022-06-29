$(document).ready(function () {
  // ******************** Event listeners *********************
  $(document).on("click", (event) => {
    // Continue browsing button clicked
    if ($(event.target).attr("id") === "continueBrowsing") {
      window.location.href = "/category";
    }
  });
});
