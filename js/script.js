function limitFruitSelection() {
  const checkboxes = document.querySelectorAll('#fruit-options input[type="checkbox"]');
  const checked = Array.from(checkboxes).filter(cb => cb.checked);

  if (checked.length > 3) {
    alert("Please only select 3 fruits.");
    // Uncheck the one that was just clicked
    event.target.checked = false;
  }
}

function calculateSmoothie() {
  // Get size
  const size = document.querySelector('input[name="size"]:checked').value;
  const sizeCost = size === "small" ? 4.0 : 6.5;

  // Get selected fruits
  const fruitCheckboxes = document.querySelectorAll('#fruit-options input[type="checkbox"]');
  const selectedFruits = Array.from(fruitCheckboxes).filter(cb => cb.checked).map(cb => cb.value);

  if (selectedFruits.length !== 3) {
    document.getElementById("result").innerHTML = `<p style="color:red;">You must select exactly 3 fruits.</p>`;
    return;
  }

  const fruitCost = 2.5;
  const subtotal = sizeCost + fruitCost;
  const tax = subtotal * 0.13;
  const total = subtotal + tax;

  document.getElementById("result").innerHTML = `
    <p><strong>Your Smoothie:</strong> ${selectedFruits.join(", ")}</p>
    <p><strong>Subtotal:</strong> $${subtotal.toFixed(2)}</p>
    <p><strong>HST (13%):</strong> $${tax.toFixed(2)}</p>
    <p><strong>Total:</strong> $${total.toFixed(2)}</p>
  `;
}
