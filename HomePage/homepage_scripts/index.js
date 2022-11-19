let home1 = document.querySelector("#home_1");
let banner_img = document.createElement("img");
banner_img.src =
  "https://d2407na1z3fc0t.cloudfront.net/Slider/banner_62e142fbed5a8";
home1.append(banner_img);
home1.addEventListener("click", () => {
  banner();
});
let banner = () => {
  window.location.href = "index.html";
};

// #home_2
let home2arr = [
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/539819fa-f8f5-6148-d407-95522fa17a28/original/Todays-deal21.png",
    title: "Today's Deals",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/479a9750-d9a2-33ff-0693-3044a9dcae91/original/Chicken.png",
    title: "Chicken",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/46494180-ff34-2236-4240-da12222c4d23/original/Fish___Seafood.png",
    title: "Fish & Seafood",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/952cc910-319c-0b5d-fa34-373f05f0917a/original/Mutton.png",
    title: "Mutton",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/0a8c4f08-15e7-12e5-a696-286cddadf373/original/RTC_(2).png",
    title: "Ready to Cook",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/b528b5d9-aae1-8814-99d5-8642e2ee3676/original/Prawns.png",
    title: "Prawns",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/d08157a7-8828-4978-eb3f-3408cfe7d1f9/original/Venus_(1).png",
    title: "Cold Cuts",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/066b2145-5678-c1c6-5a05-5e5e53840101/original/Continental-egg-spread.png",
    title: "Spreads",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/54771c04-5aae-094d-8739-b22d09ab284e/original/Eggs.png",
    title: "Eggs",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/8f6c3a69-7867-05d5-9367-ed091bdf3c61/original/hyd-chicken.png",
    title: "Biryani & Kebab",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/b8169e6d-59ae-ba6f-f839-ec0883a9742e/original/Combo2.png",
    title: "Combos",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/804e2c47-aa87-e548-8d19-789b1fccb8bb/original/GFD.png",
    title: "Featured Collections",
  },
];
home2arr.forEach((element) => {
  let div = document.createElement("div");
  let image = document.createElement("img");
  let p = document.createElement("p");
  p.innerHTML = element.title;
  // image.setAttribute("src",element.img)
  image.src = element.img;
  let namm = element.title;
  localStorage.setItem("validConc2", JSON.stringify(true));
  div.addEventListener("click", () => {
    // alert("clicled");
    
    localStorage.setItem("name", JSON.stringify(namm.toLowerCase()));
    localStorage.setItem("validConc", JSON.stringify(false));
    
    onhome2();
  });
  

  let onhome2 = () => {
    if (element.title == "Today's Deal") {
      window.location.href = "./ProductPage/fish.html";
    } else if (element.title == "Chicken") {
      window.location.href = "./ProductPage/chicken.html";
    } else if (element.title == "Fish & Seafood") {
      window.location.href = "./ProductPage/fish.html";
    } else if (element.title == "Mutton") {
      window.location.href = "./ProductPage/mutton.html";
    } else if (element.title == "Ready to Cook") {
      window.location.href = "./ProductPage/mutton.html";
    } else if (element.title == "Prawns") {
      window.location.href = "./ProductPage/fish.html";
    } else if (element.title == "Cold Cuts") {
      window.location.href = "";
    } else if (element.title == "Spreads") {
      window.location.href = "";
    } else if (element.title == "Eggs") {
      window.location.href = "./ProductPage/egg.html";
    } else if (element.title == "Biryani & Kebab") {
      window.location.href = "./ProductPage/chicken.html";
    } else if (element.title == "Combos") {
      window.location.href = "";
    } else if (element.title == "Featured Collections") {
      window.location.href = "./ProductPage/chicken.html";
    }
  };

  div.append(image, p);
  document.getElementById("home_2").append(div);
  // document.getElementById("#home_6").append(div);
});

let home3 = document.querySelector("#home_3");
let ads_img = document.createElement("img");
ads_img.src = "./HomePage/homepage_ss/ads.png";
home3.append(ads_img);
home3.addEventListener("click", () => {
  ad();
});
let ad = () => {
  window.location.href = "index.html";
};

//#home_6
let home6arr = [
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/Category/782aa584-4978-2e46-e38a-4aff56f10800/original/1603885852.4258--2020-10-2817_20_52--738.jpeg?format=webp",
    title: "Today's Deal",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/840ded78-a6e8-c768-4069-9abde900b5ea/original/Chicken_(1).png?format=webp",
    title: "Chicken",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/b297aada-cd28-8357-f0e1-2ae25d3dd1ee/original/FishSeafood.png?format=webp",
    title: "Fish & Seafood",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/b4b90104-3976-ee97-7cdd-812a4916c0e6/original/Mutton.jpg?format=webp",
    title: "Mutton",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/1db15fd5-a5d3-b275-1579-2e3b2edc0d30/original/RTC.png?format=webp",
    title: "Ready to Cook",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/Category/2105beee-e9a9-3efd-4912-2b9657f32d99/original/1604284739.3526--2020-11-0208_08_59--472.jpeg?format=webp",
    title: "Prawns",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/db686e9b-3609-a719-49a6-435a883a1d59/original/Cold-Cuts_(1).png?format=webp",
    title: "Cold Cuts",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/a73279cf-eb46-a552-c7bd-10361814ae92/original/Spread.png?format=webp",
    title: "Spreads",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/Category/bdfca08e-566b-4439-0aac-9c100704cb0b/original/1603646527.5457--2020-10-2522_52_07--738.jpeg?format=webp",
    title: "Eggs",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/ecf1b530-d791-c509-b17c-43ccaabf9921/original/1.jpg?format=webp",
    title: "Biryani & Kebab",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/Category/8209cc57-cc85-4e5d-ac6b-4d8f2f36c1ce/original/1604645369.2866--2020-11-0612_19_29--738.jpeg?format=webp",
    title: "Combos",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/050c5580-8e16-30f3-213f-f109d86be44a/original/cat-image_(1).jpg?format=webp",
    title: "Featured Collections",
  },
];
// let home6=document.querySelector("#home_6")
home6arr.forEach((element) => {
  let div = document.createElement("div");
  let image = document.createElement("img");
  // image.setAttribute("src",element.img)
  image.src = element.img;
  let p = document.createElement("p");
  p.innerHTML = element.title;
  // console.log(p)
  console.log(element.title);

  div.addEventListener("click", () => {
    // alert("clicled");
    onhome2();
  });

  let onhome2 = () => {
    if (element.title == "Today's Deal") {
      window.location.href = "./ProductPage/fish.html";
    } else if (element.title == "Chicken") {
      window.location.href = "./ProductPage/chicken.html";
    } else if (element.title == "Fish & Seafood") {
      window.location.href = "./ProductPage/fish.html";
    } else if (element.title == "Mutton") {
      window.location.href = "./ProductPage/mutton.html";
    } else if (element.title == "Ready to Cook") {
      window.location.href = "./ProductPage/mutton.html";
    } else if (element.title == "Prawns") {
      window.location.href = "./ProductPage/fish.html";
    } else if (element.title == "Cold Cuts") {
      window.location.href = "";
    } else if (element.title == "Spreads") {
      window.location.href = "";
    } else if (element.title == "Eggs") {
      window.location.href = "./ProductPage/egg.html";
    } else if (element.title == "Biryani & Kebab") {
      window.location.href = "./ProductPage/chicken.html";
    } else if (element.title == "Combos") {
      window.location.href = "";
    } else if (element.title == "Featured Collections") {
      window.location.href = "./ProductPage/chicken.html";
    }
  };

  div.append(image, p);
  document.getElementById("home_6").append(div);
});

//#home_8
let home8arr = [
  {
    img: "https://www.licious.in/blog/wp-content/uploads/2022/06/shutterstock_1339636625-1.jpg",
    title:
      "Wait a Minute! Don't Buy Shawarma Anymore, Make it at Home Instead!",
  },
  {
    img: "https://www.licious.in/blog/wp-content/uploads/2022/06/shutterstock_2055615416.jpg",
    title:
      "This Creamy Herbed Chicken Recipe is the Perfect Meal Any Day of the Week!",
  },
  {
    img: "https://www.licious.in/blog/wp-content/uploads/2022/06/shutterstock_2040426830.jpg",
    title: "Savour a Mouth-Watering Paprika Roast Chicken On a Lazy Weekend!",
  },
];
home8arr.forEach((element) => {
  let div = document.createElement("div");
  let image = document.createElement("img");
  image.src = element.img;
  let p = document.createElement("p");
  p.innerHTML = element.title;

  div.append(image, p);
  document.getElementById("home_8").append(div);
});

let home9 = document.querySelector("#home_9");
let banner2 = document.createElement("img");
banner2.src =
  "https://d2407na1z3fc0t.cloudfront.net/homepageStaticBanner/homepageStaticBanner_62a34be7b89a3";
home9.append(banner2);

//#home_10
let home10 = document.querySelector("#home_10");
let banner3div = document.createElement("div");
let banner3img = document.createElement("img");
banner3img.src =
  "https://d2407na1z3fc0t.cloudfront.net/Banner/Rebranding_homepage_madewithLicious.png";
let banner3h2 = document.createElement("h2");
banner3h2.innerText = "#MadeWithLicious";
let banner3p = document.createElement("p");
banner3p.innerText =
  "Cooking with Licious meats is more fun now! Post a picture of your Licious dish on our Instagram page, tag us and use #MadeWithLicious for a chance to be featured on our Instagram page! Happy Cooking!";
banner3div.append(banner3img, banner3h2, banner3p);
home10.append(banner3div);

//---------------------------------------------------------------------------------------------------------------

let getSlideData = async () => {
  try {
    let response = await fetch(
      "https://safe-eyrie-39519.herokuapp.com/licious/bestSeller"
    );
    let users = await response.json();
    appendSlideNews(users);
    // console.log(users);
  } catch (err) {
    console.log(err);
  }
};
getSlideData();

appendSlideNews = (dated) => {
  let sum = 0;
  let totalsum;
  dated.forEach((e) => {
    let card2 = document.createElement("div");
    let div = document.createElement("div");
    div.setAttribute("id", "div3_cont");
    div.onclick = () =>{
      localStorage.setItem("data1", JSON.stringify(e.name));
      window.location.href = "./ProductDetails/Product_pages.html";
    }

    let img = document.createElement("img");
    img.setAttribute("src", e.imgUrl[0]);
    img.setAttribute("id", "div_3image");

    let name = document.createElement("h4");
    name.innerText = e.name;

    let des = document.createElement("p");
    des.innerText = e.des;

    let div2 = document.createElement("div");
    div2.setAttribute("id", "div_3wight");

    let div4 = document.createElement("div");
    div4.setAttribute("id", "bikelogosantosh");

    let net_tag = document.createElement("h6");
    net_tag.innerText = e.net_tag;

    let net = document.createElement("h6");
    net.innerText = e.net;

    let n_gm = document.createElement("h6");
    n_gm.innerText = e.unit;

    let gross_tag = document.createElement("h6");
    gross_tag.innerText = e.gross_tag;

    let gross = document.createElement("h6");
    gross.innerText = e.gross;

    let g_gm = document.createElement("h6");
    g_gm.innerText = e.unit;

    let div3 = document.createElement("div");
    div3.setAttribute("id", "div_3priceCart");

    let price_tag = document.createElement("h5");
    price_tag.innerText = e.price_tag;

    let cuurency = document.createElement("h5");

    let price = document.createElement("h5");
    price.innerText = e.price;
    // totalsum += e.price;

    let strikePrice = document.createElement("strike");
    strikePrice.innerText = "₹" + e.strikedPrice;

    let minus = document.createElement("button");
    minus.setAttribute("id", "div_3CartBtn1");
    minus.innerHTML = "-";

    let main = document.createElement("button");
    main.setAttribute("id", "div_3CartBtn2");
    main.innerHTML = "Add to cart";
    main.addEventListener("click", () => {
      localStorage.setItem("validConc", JSON.stringify(true));
      // alert("clicekd");
      console.log(e.name);
      localStorage.setItem("data1", JSON.stringify(e.name));
      // localStorage.setItem("validConc2", JSON.stringify(false));
      // localStorage.setItem("validConc1", JSON.stringify(true));
      window.location.href = "./ProductDetails/Product_pages.html";
    });

    let add = document.createElement("button");
    add.setAttribute("id", "div_3CartBtn3");
    add.innerText = "+";

    let newbutton = document.createElement("button");
    newbutton.innerHTML = "fhg";

    minus.addEventListener("click", () => {
      let substaract = (main.innerHTML = main.innerHTML - 1);
      sum = e.price;
      totalPrice = substaract * sum;
      // console.log(sum2)
      console.log(totalPrice);
      document.getElementById("totalpriceShow").innerHTML = null;
      document.getElementById("totalpriceShow").append(totalPrice);
      if (main.innerHTML < 1) {
        minus.style.display = "none";
        main.innerHTML == "Add to cart";
      }
      if (main.innerHTML == -1 && main.innerHTML == 0) {
        add.style.display = "inline-block";
        main.innerHTML == "Add to cart";
      }
    });
    add.addEventListener("click", () => {
      let number = (main.innerHTML = +main.innerHTML + +1);
      sum = e.price;
      totalPrice = number * sum;
      // console.log(sum2)
      console.log(totalPrice);
      document.getElementById("totalpriceShow").innerHTML = null;
      document.getElementById("totalpriceShow").append(totalPrice);
      if (main.innerHTML == 6) {
        add.style.display = "none";
      } else if (main.innerHTML == -1 && main.innerHTML == 0) {
        main.innerHTML == "Add to cart";
      }
    });

    let CartButton = document.createElement("div");
    CartButton.setAttribute("id", "stylingBtn");
    CartButton.append(minus, main, add);

    let bikelogosantosh = document.createElement("img");
    bikelogosantosh.src =
      "https://www.licious.in/img/rebranding/express_delivery.svg";

    let bikelogoTimingsantosh = document.createElement("p");
    bikelogoTimingsantosh.innerText = "Tommorow 8AM - 11AM";

    div4.append(bikelogosantosh, bikelogoTimingsantosh);

    div2.append(net_tag, net, n_gm, gross_tag, gross, g_gm);
    div3.append(price_tag, cuurency, price, strikePrice);

    div.append(img, name, des, div2, div3, CartButton, div4);

    card2.append(div);
    document.getElementById("slideNews").append(card2);
  });

  console.log(totalsum);
};

//<!-----------------------------Slide bar in home page----------------------------------------->

let button = document.getElementById("next_home");

button.onclick = () => {
  let container = document.getElementById("slideNews");
  sideScroll(container, "right", 25, 100, 10);
};

let back = document.getElementById("prev_home");
back.onclick = () => {
  let container = document.getElementById("slideNews");
  sideScroll(container, "left", 25, 100, 10);
};

sideScroll = (element, direction, speed, distance, step) => {
  scrollAmount = 0;
  let slideTimer = setInterval(function () {
    if (direction == "left") {
      element.scrollLeft -= step;
    } else {
      element.scrollLeft += step;
    }
    scrollAmount += step;
    if (scrollAmount >= distance) {
      window.clearInterval(slideTimer);
    }
  }, speed);
};

// <!-------------------------------------------------------------------------------------------------------------------------------------->

let LiciousData = async () => {
  let res = await fetch(
    "https://safe-eyrie-39519.herokuapp.com/licious/TheLicious_way"
  );
  let data = await res.json();
  // console.log(data);
  LiciousDataappend(data);
};
LiciousData();

LiciousDataappend = (data) => {
  let box = document.getElementById("Licious");
  data.forEach((e) => {
    let div = document.createElement("div");

    name.innerHTML = " The Licious Way";
    let img = document.createElement("img");
    img.setAttribute("src", e.imgUrl);

    let des = document.createElement("span");
    des.innerText = e.desc;

    div.append(img, des);

    box.append(div);
  });
};

// --------------------------------------------------------------------------------------------------------

let socailmediadata = async () => {
  let res = await fetch(
    "https://safe-eyrie-39519.herokuapp.com/licious/socailMedia"
  );
  let data = await res.json();
  //   console.log(data);
  scoailmedaiDataappend(data);
};
socailmediadata();

scoailmedaiDataappend = (data) => {
  let box = document.getElementById("slideNews1");
  data.forEach((e) => {
    let div = document.createElement("div");
    div.setAttribute("id", "div4_cont");

    let div2 = document.createElement("div");
    div2.setAttribute("id", "div4_dataNmae");

    let div3 = document.createElement("div");
    div3.setAttribute("id", "div4_datapara");

    let div4 = document.createElement("div");
    div4.setAttribute("id", "div4_dataparaimage");

    let img = document.createElement("img");
    img.src = e.imgUrl;
    img.setAttribute("id", "socailmedaiIMage");

    let image = document.createElement("img");
    image.src = e.insatphto;

    let image_name = document.createElement("h4");
    image_name.innerHTML = "SanTOsh KuMaR";

    let insatalogo = document.createElement("img");
    insatalogo.src = e.insatalogo;

    let insatgrmaNmae = document.createElement("h1");
    insatgrmaNmae.innerHTML = "Instagram";

    let paragra1insat = document.createElement("p");
    paragra1insat.innerHTML =
      "Its time to make these again- Garlic Chicken Cheese Balls! Best in taste and flavours! Yummmmm ???????? ";

    let logofoo = document.createElement("img");
    logofoo.src = e.logofoo;

    let nameOfood = document.createElement("h4");
    nameOfood.innerHTML = e.name;

    div2.append(image, image_name, insatalogo, insatgrmaNmae);
    div3.append(paragra1insat);
    div4.append(logofoo, nameOfood);
    div.append(img, div2, div3, div4);
    box.append(div);
  });
};

// <!------------------------------------------SLIDE---SHOW-------------------------------------------------------------------------------------!>

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlidespages");
  let dots = document.getElementsByClassName("SlideShowdot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

// <!---------------------------DATA APPEND FOR CART PAGE---------------------------------------------------------------------------!>

let CartDetials = JSON.parse(localStorage.getItem("CartDetails"));
console.log(CartDetials);

let stickeyImageCart = document.createElement("img");
stickeyImageCart.src = CartDetials[0].imgUrl;

let stickeyPriceCart = document.createElement("p");
stickeyPriceCart.innerHTML = CartDetials[0].name;

let stickeyMrpCart = document.createElement("p");
stickeyMrpCart.innerHTML = "MRP:";
let stickeyNmaecart = document.createElement("h1");
stickeyNmaecart.innerHTML = "₹" + CartDetials[0].price;

let stickeybuttonCart = document.createElement("button");
stickeybuttonCart.innerHTML = "Go To Cart";

stickeybuttonCart.addEventListener("click", () => {
  // alert("click");
  // window.location.href ="../../silly-authority-4051/Pages/cartPage.html"
});

let stickeybikeLogo = document.createElement("img");
stickeybikeLogo.src = CartDetials[0].bikelogo;

let stickeybikecont = document.createElement("p");
stickeybikecont.innerHTML = CartDetials[0].bikeContnt;

let stickeydiv1 = document.createElement("div");
stickeydiv1.setAttribute("id", "stickeyCar1");
let sticketydiv2 = document.createElement("div");
sticketydiv2.setAttribute("id", "stickeyCart2");

stickeydiv1.append(
  stickeyImageCart,
  stickeyPriceCart,
  stickeyMrpCart,
  stickeyNmaecart,
  stickeybuttonCart
);

sticketydiv2.append(stickeybikeLogo, stickeybikecont);

document.getElementById("FloatCart_page").append(stickeydiv1, sticketydiv2);
