import navbar from "../../Components/navbar.js";
// console.log(navbar());
document.getElementById("navbar").innerHTML = navbar();

import footerTal from "../../Components/footer.js";

document.getElementById("footer").innerHTML = footerTal();

import {filter} from "../../Components/filter.js";
document.getElementById("filter").innerHTML = filter();



let searchquery = document.querySelector("#search_bar");

searchquery.addEventListener("keypress", () => {
  if (event.key == "Enter") {
    pressing();
  }
});

let pressing = async () => {
  let query = document.querySelector("#search_bar").value;
  query.toLowerCase();
  let res = await fetch(
    `https://safe-eyrie-39519.herokuapp.com/licious/${query}`
  );
  let data = await res.json();
  console.log(data);
  localStorage.setItem("searchresult", JSON.stringify(data));
  // console.log(typeof(query));
  let str = query;
  let answer = str.charAt(0).toUpperCase() + str.substring(1);
  localStorage.setItem("name", JSON.stringify(answer));
  if (query == "fish" || "Fish") {
    // alert("clicked");
    let img1 = "https://d2407na1z3fc0t.cloudfront.net/USP/usp_58e78e2de68f7";
    let desc1 = "Select day’s catch";
    let img2 = "https://d2407na1z3fc0t.cloudfront.net/USP/usp_58e7903958ce8";
    let desc2 = "Fresh off coasts & farms";
    localStorage.setItem("image1", JSON.stringify(img1));
    localStorage.setItem("desc1", JSON.stringify(desc1));
    localStorage.setItem("image2", JSON.stringify(img2));
    localStorage.setItem("desc2", JSON.stringify(desc2));
  }
  if (query == "egg" || "Egg") {
    let img1 = "https://d2407na1z3fc0t.cloudfront.net/USP/usp_591014f08301c";
    let desc1 = "Naturally laid, not cultured";
    let img2 = "https://d2407na1z3fc0t.cloudfront.net/USP/usp_5910153e779fb";
    let desc2 = "Rich, full-bodied flavour";
    localStorage.setItem("image1", JSON.stringify(img1));
    localStorage.setItem("desc1", JSON.stringify(desc1));
    localStorage.setItem("image2", JSON.stringify(img2));
    localStorage.setItem("desc2", JSON.stringify(desc2));
  }
  if (query == "mutton" || "Mutton") {
    let img1 = "https://d2407na1z3fc0t.cloudfront.net/USP/usp_58e78c6b83b3c";
    let desc1 = "Prime-grade Meats";
    let img2 = "https://d2407na1z3fc0t.cloudfront.net/USP/usp_58e78c97c079f";
    let desc2 = "Sourcing";
    localStorage.setItem("image1", JSON.stringify(img1));
    localStorage.setItem("desc1", JSON.stringify(desc1));
    localStorage.setItem("image2", JSON.stringify(img2));
    localStorage.setItem("desc2", JSON.stringify(desc2));
  }
  if (query == "chicken" || "Chicken") {
    let img1 = "https://d2407na1z3fc0t.cloudfront.net/USP/usp_58e78b9c4b2e0";
    let desc1 = "Farm-raised superior breed ";
    let img2 = "https://d2407na1z3fc0t.cloudfront.net/USP/usp_58e78bdf673b7";
    let desc2 = "No Added Chemical , Antibiotic residue free.";
    localStorage.setItem("image1", JSON.stringify(img1));
    localStorage.setItem("desc1", JSON.stringify(desc1));
    localStorage.setItem("image2", JSON.stringify(img2));
    localStorage.setItem("desc2", JSON.stringify(desc2));
  }

  window.location.href = "../ProductPage/seachPageDetails.html";
  _eggdata(data);
};

let searchname = JSON.parse(localStorage.getItem("name"));
let finalNmae = searchname.toLowerCase();

let CartDataAdding = JSON.parse(localStorage.getItem('cardArr'))|| [];

let data = JSON.parse(localStorage.getItem("searchresult"));
console.log(data);
_eggdata(data);

function _eggdata(eggdata) {
  let box = document.getElementById("container");
  box.innerHTML= null;
  eggdata.forEach(elem => {
    var main = document.createElement("div");
    main.setAttribute("class", "main");
    var img = document.createElement("img");
    img.setAttribute("src", elem.imgUrl[0]);
    img.setAttribute("class", "image");

    var name = document.createElement("h4");
    name.innerText = elem.name;
    var des = document.createElement("p");
    des.setAttribute("class", "des");
    des.innerText = elem.des;
    var wgt = document.createElement("div");
    wgt.setAttribute("class", "wgt");
    var net_tag = document.createElement("h6");
    net_tag.innerText = elem.net_tag;

    var net = document.createElement("h6");
    net.innerText = elem.net;
    var n_gm = document.createElement("h6");
    n_gm.innerText = elem.unit;

    var gross_tag = document.createElement("h6");
    gross_tag.innerText = elem.gross_tag;
    var gross = document.createElement("h6");
    gross.innerText = elem.gross;
    var g_gm = document.createElement("h6");
    g_gm.innerText = elem.unit;

    var hold = document.createElement("div");
    hold.setAttribute("class", "hold");

    var pri = document.createElement("div");
    pri.setAttribute("class", "pri");
    var price_tag = document.createElement("h5");
    price_tag.innerText = elem.price_tag;
    var currency = document.createElement("h5");
    currency.innerText = elem.currency;
    var price = document.createElement("h5");
    price.innerText = elem.price;
    var strikePrice = document.createElement("strike");
    strikePrice.innerText = `₹${elem.strikePrice}`;
    var btndiv = document.createElement("div");
    btndiv.setAttribute("class", "btndiv");
    var addCart = document.createElement("button");
    addCart.setAttribute("class", "addcartbtn");
    addCart.innerHTML = "Add to Cart";

    addCart.addEventListener("click", function () {
      CartDataAdding.push(elem);
      localStorage.setItem("cardArr", JSON.stringify(CartDataAdding));
      // AddToCart(elem)
      localStorage.setItem("itemNo",JSON.stringify(elem.id));
        localStorage.setItem("name",JSON.stringify(`${finalNmae}`));
        // window.location.href = "../ProductDetails/Product_Page2.html";
        alert("Product Added Sucessfully!!")
        window.location.reload();
        
    });

    wgt.append(net_tag, net, n_gm, gross_tag, gross, g_gm);
    pri.append(price_tag, currency, price, strikePrice, addCart);
    // btndiv.append(addCart)

    main.append(img, name, des, wgt, pri);
    //   document.getElementById(container).append(main)
    // main2.innerHTML = null;
    // let main2 = container;

    box.append(main);
    
  });
  
}

// let AddToCart = (elem) =>{
  
// }

let dataname = JSON.parse(localStorage.getItem("name"));
// console.log(dataname);

document.getElementById("chickenHead2").innerText = dataname;
document.getElementById("chickenHead3").innerText = dataname;

let img1 = JSON.parse(localStorage.getItem("image1"));
let img2 = JSON.parse(localStorage.getItem("image2"));
let desc1 = JSON.parse(localStorage.getItem("desc1"));

let backimg1 = document.createElement("img");
backimg1.src = img1;
backimg1.setAttribute("id", "imaging");
document.getElementById("imaging").append(backimg1);
document.getElementById("desi1").innerText = desc1;

let backimg2 = document.createElement("img");
backimg2.src = img2;
backimg2.setAttribute("id", "imaging1");
document.getElementById("imaging1").append(backimg2);



document.getElementById("sort-low-to-high").onclick = async (e) => {
  // alert("click");
  let res = await fetch(
    `https://safe-eyrie-39519.herokuapp.com/licious/${finalNmae}?_sort=price&_order=desc`
  );
  let data = await res.json();
  // console.log(data);
  _eggdata(data);
};
document.getElementById("sort-high-to-loW").onclick = async (e) => {
  // alert("click");
  let res = await fetch(
    `https://safe-eyrie-39519.herokuapp.com/licious/${finalNmae}?_sort=price&_order=asc`
  );
  let data = await res.json();
  // console.log(data);
  _eggdata(data);
};
// 
document.getElementById("sort-by-name").onclick = async (e) => {
  // alert("click");
  let res = await fetch(
    `https://safe-eyrie-39519.herokuapp.com/licious/${finalNmae}?_sort=name&_order=asc`
  );
  let data = await res.json();
  // console.log(data);
  _eggdata(data);
};
