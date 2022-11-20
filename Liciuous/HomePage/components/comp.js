import navbar from "../../Components/navbar.js";
// console.log(navbar());
document.getElementById("navbar").innerHTML = navbar();

import footerTal from "../../Components/footer.js";

document.getElementById("footer").innerHTML = footerTal();

import { searchfun } from "../../Components/seachFun.js";
searchfun();
