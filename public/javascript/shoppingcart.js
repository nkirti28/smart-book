$(document).ready(function () {
  // ******************** Event listeners *********************
  $(document).on("click", (event) => {
    // Continue browsing button clicked
    if ($(event.target).attr("id") === "continueBrowsing") {
      window.location.href = "/category";
    }
  });
});


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
