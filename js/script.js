// Copyright (c) 2025 Adrina Peighambarzadeh All rights reserved
//
// Created by: Adrina Peighambarzadeh
// Created on: Apr 2025
// This file contains the JS functions for index.html
/**
 * This function calculates the total cost of a pizza order.
 */
// eslint-disable-next-line no-unused-vars

function calculatePizza() {
  // input
  const sizeRadios = document.getElementsByName("size")
  const toppingRadios = document.getElementsByName("toppings")
  let sizeCost = 0
  let toppingCost = 0

  // process
  for (let i = 0; i < sizeRadios.length; i++) {
    if (sizeRadios[i].checked) {
      if (sizeRadios[i].value === "large") {
        sizeCost = 6.0
      } else if (sizeRadios[i].value === "extraLarge") {
        sizeCost = 10.0
      }
      break
    }
  }

  for (let i = 0; i < toppingRadios.length; i++) {
    if (toppingRadios[i].checked) {
      const toppingCount = parseInt(toppingRadios[i].value)
      if (toppingCount === 1) {
        toppingCost = 1.0
      } else if (toppingCount === 2) {
        toppingCost = 1.75
      } else if (toppingCount === 3) {
        toppingCost = 2.5
      } else if (toppingCount === 4) {
        toppingCost = 3.35
      }
      break
    }
  }

  const subtotal = sizeCost + toppingCost
  const tax = subtotal * 0.13
  const total = subtotal + tax

  // output
  document.getElementById("result").innerHTML =
    "<p><strong>Subtotal:</strong> $" + subtotal.toFixed(2) + "</p>" +
    "<p><strong>HST (13%):</strong> $" + tax.toFixed(2) + "</p>" +
    "<p><strong>Total:</strong> $" + total.toFixed(2) + "</p>"
}
