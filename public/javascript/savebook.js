async function addBook(event) {
    event.preventDefault();
  
    const book_id = document.querySelector(".card-title").getAttribute("id").trim();
  
    if (book_id) {
      const response = await fetch("/api/shoppingcart", {
        method: "POST",
        body: JSON.stringify({
          book_id,
        }),
        headers: { "Content-Type": "application/json" },
      });
      const result = await response.json();
      console.log(result)
      if (response.ok) {
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document
    .querySelector("#add")
    .addEventListener("click", addBook);