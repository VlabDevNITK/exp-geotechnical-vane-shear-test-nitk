"use strict";
const domain = "Civil Engineering";
const lab = "Geotechnical Engineering Lab";
const exp = "Vane Shear Test";
const domainName = document.querySelector(".domainName");
const labName = document.querySelector(".labName");
const expName = document.querySelector(".expName");

const displayTitle = function () {
  domainName.innerHTML = domain;
  labName.innerHTML = lab;
  expName.innerHTML = exp;
};
