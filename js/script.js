// Copyright (c) 2021 Infinity de Guzman All rights reserved
//
// Created by: Infinity de Guzman
// Created on: May 2021
// This file contains the JS functions for index.html

"use strict"

function doMathClicked () {
  // this code will calculate the temperature in Celsius

  // input
  const fahrenheit = parseFloat(document.getElementById('fahrenheit').value)

  // process
  const celsius = (fahrenheit - 32) * 5 / 9

  //output
  document.getElementById('celsius').innerHTML = 'The temperature in Celsius is: ' + celsius.toFixed(2) + ' °C'
}
