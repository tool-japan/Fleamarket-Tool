chrome.storage.local.get(["title", "description", "price"], (data) => {
  window.addEventListener("load", () => {
    const titleInput = document.querySelector('input[name="name"]');
    const descInput = document.querySelector('textarea[name="description"]');
    const priceInput = document.querySelector('input[name="price"]');

    if (titleInput) titleInput.value = data.title || "";
    if (descInput) descInput.value = data.description || "";
    if (priceInput) priceInput.value = data.price || "";
  });
});
