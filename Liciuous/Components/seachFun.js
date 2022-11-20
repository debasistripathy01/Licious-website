let searchfun = () => {
  let searchquery = document.querySelector("#search_bar");

  searchquery.addEventListener("keypress", () => {
    if (event.key == "Enter") {
      pressing();
    }
  });

  let pressing = async () => {
    let query = document.querySelector("#search_bar").value;
    query.toLowerCase();
    try{
      let res = await fetch(
        `https://safe-eyrie-39519.herokuapp.com/licious/${query}`
      );
      let data = await res.json();
      console.log(data);
      localStorage.setItem("searchresult", JSON.stringify(data));
      console.log(query);
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
      if(query == "mutton"||"Mutton"){
        let img1 = "https://d2407na1z3fc0t.cloudfront.net/USP/usp_58e78c6b83b3c";
        let desc1 = "Prime-grade Meats";
        let img2 = "https://d2407na1z3fc0t.cloudfront.net/USP/usp_58e78c97c079f";
        let desc2 = "Sourcing";
        localStorage.setItem("image1", JSON.stringify(img1));
        localStorage.setItem("desc1", JSON.stringify(desc1));
        localStorage.setItem("image2", JSON.stringify(img2));
        localStorage.setItem("desc2", JSON.stringify(desc2));
  
      }
      if(query == "chicken" || "Chicken"){
        let img1 = "https://d2407na1z3fc0t.cloudfront.net/USP/usp_58e78b9c4b2e0";
        let desc1 = "Farm-raised superior breed ";
        let img2 = "https://d2407na1z3fc0t.cloudfront.net/USP/usp_58e78bdf673b7";
        let desc2 = "No Added Chemical , Antibiotic residue free.";
        localStorage.setItem("image1", JSON.stringify(img1));
        localStorage.setItem("desc1", JSON.stringify(desc1));
        localStorage.setItem("image2", JSON.stringify(img2));
        localStorage.setItem("desc2", JSON.stringify(desc2));
  
      }
      // if(query != "chicken" || "Chicken"||"mutton"||"Mutton"||"egg" || "Egg"||"fish" || "Fish"){
      //   alert("Not available");
      //   // window.location.href = ".././index.html";
      // }
      window.location.href = "./ProductPage/seachPageDetails.html";
  

    }catch(err){
      alert("No data available")
    }
     };
};

export { searchfun };
