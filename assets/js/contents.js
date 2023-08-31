"use strict";
const domain = "Domain name here";
const lab = "Lab name here";
const exp = "Exp name here";
const domainName = document.querySelector(".domainName");
const labName = document.querySelector(".labName");
const expName = document.querySelector(".expName");

const displayTitle = function () {
  domainName.innerHTML = domain;
  labName.innerHTML = lab;
  expName.innerHTML = exp;
};
