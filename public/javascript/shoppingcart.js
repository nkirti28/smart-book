
// Add to Cart button function
async function addClickHandler(event) {
  event.preventDefault();
//grab book id
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

 

  const response = await fetch("/api/shoppingcart", {
    method: "POST",
    body: JSON.stringify({
      book_id: id,
      user_id: id
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

document.querySelector(".addCart-btn").addEventListener("click", addClickHandler);

// //Remove from cart button function
// async function deleteItemHandler(event) {
//   event.preventDefault();

//   const id = document.getElementById('item').value;
//   console.log("clicked")
//   const response = await fetch(`/api/shoppingcart/${id}`, {
//     method: 'DELETE'
//   });

//   if (response.ok) {
//     document.location.replace('/shoppingcart');
//   } else {
//     alert(response.statusText);
//   }
// }

document.querySelector(".removeCart-btn").addEventListener("click", deleteItemHandler);


//Continue browsing button function
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
});
