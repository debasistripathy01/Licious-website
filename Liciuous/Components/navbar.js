let navbar = () => {
  return `
  <a id="logo" href=".././index.html"><img id="licious_logo" src="https://www.licious.in/img/rebranding/licious-logo.svg" alt="licious"></a>
    
    <div id="maintag">
    
        <!-- location tag -->
        <select name="location" id="tag">
                <option value="delhi">Hyderabad</option>
                <option value="Hyder">Delhi</option>
                <option value="Bang">Bangalore</option>
                <option value="chennai">Chennai</option>
                <option value="munbai">Mumbai</option>
                <option value="up">Lucknow</option>
        </select>
        <div id="logoadjust">
            <img id="location_logo" src="https://www.licious.in/img/rebranding/location_icon.svg" alt="location_logo" >
            </div>
    </div>
    
    
    <!-- search tag -->
        <input  id="search_bar" type="text" placeholder=" Fish , Mutton , Chicken , Egg , Dishes_of_chicken , bestSeller ,sauce,random ">
    
    
    
        
        <!-- categories part  -->
        <!-- dropdown menu part  -->
        
        <div id="cate">
          
            <img id="cat" src="https://www.licious.in/img/rebranding/category-dropdown-icon.svg" alt="category">
            
            <!-- <p>Categories</p> -->
            <div class="dropdown">
            <div id="categoryfix">
                <p class="dropbtn">Categories</p>
                </div>
                <div class="dropdown-content">
                    <a href=".././ProductPage/fish.html"> <img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/539819fa-f8f5-6148-d407-95522fa17a28/original/Todays-deal21.png" alt="top">Today's Deals </a>
                    <a href=".././ProductPage/chicken.html"> <img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/479a9750-d9a2-33ff-0693-3044a9dcae91/original/Chicken.png" alt="chicken">Chicken</a>
                    <a href=".././ProductPage/fish.html"><img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/46494180-ff34-2236-4240-da12222c4d23/original/Fish___Seafood.png" alt="fish">Fish & SeaFood</a>
                    <a href=".././ProductPage/mutton.html"><img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/952cc910-319c-0b5d-fa34-373f05f0917a/original/Mutton.png" alt="mutton">Mutton</a>
                    <a href=".././ProductPage/chicken.html"><img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/0a8c4f08-15e7-12e5-a696-286cddadf373/original/RTC_(2).png" alt="cook">Ready To Cook</a>
                    <a href=".././ProductPage/fish.html"><img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/b528b5d9-aae1-8814-99d5-8642e2ee3676/original/Prawns.png" alt="">Prawns</a>
                    <a href=".././ProductPage/mutton.html"><img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/d08157a7-8828-4978-eb3f-3408cfe7d1f9/original/Venus_(1).png" alt="coldcuts">Cold Cuts</a>
                    <a href=".././ProductPage/chicken.html"><img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/066b2145-5678-c1c6-5a05-5e5e53840101/original/Continental-egg-spread.png" alt="spreads">Spreads</a>
                    <a href=".././ProductPage/egg.html"> <img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/54771c04-5aae-094d-8739-b22d09ab284e/original/Eggs.png" alt="egg">  Eggs</a>
                </div>
              </div>
           </div> 
    
    
           <!-- login part -->

           <div id="WholeLoginsPage">
            <div id="">
              <div class="login">
              
                <div id="login">
                  <img
                  src="https://www.licious.in/img/rebranding/profile_icon.svg"
                  alt="User"
                />
                
                  <p>
                    <button id="logintext" style="text-decoration: none">Login</button>
                  </p>                
                </div>
              </div>
             
              <!-- <div id="logout">
                <p>
                  <button
                    onclick="logoutFun()"
                    id="logouttext"
                    style="text-decoration: none"
                  >
                    Logout
                  </button> -->
                </p>
              </div>
            </div>
     
           <!-- cart page  -->
  <div id="CartSection">
    <div id="">
      <div class="CartPage">
        
      </div>
      <div id="CartPage">
        <img src="https://www.licious.in/img/rebranding/cart_icon.svg" alt="cart">
        <p>
          <button id="logintext" style="text-decoration: none">Cart</button>
        </p>
   
      </div>
    </div>
    <div id="Price_rotate">
    <div id="MaybePriceadjust">
    <button id="totalpriceShow" class="btn"></button>
    </div>
    </div>
    <div id="mainCartContantPagr">
    <h2 id="headingOder" >Order Summary</h2>
    <p id="headingO" >Congratulations, Your delivery charge is waived off!!!</p>
    <p id="headingOde" >PROMO CODE : "santosh"</p>

    
    <div id="st">
    <div id="lef"></div>
    <div id="rig">
       <div id="tt">
          <div>Order Summary</div>
          <div>
             <div>Total Item -</div>
             <div id="tItem"></div>
          </div>
          <div>
             <div>Total Price -</div>
             <div id="total"></div>
          </div>
       </div>
       <div id="mim">
          <div>Apply Promo Code</div>
          <form id="apply">
             <input id="promo" type="text">
             <input type="submit" value="APPLY">
          </form>
          <div>To get 30% Off, use <span></span></div>
       </div>
       <div id="dd"><button>CHECKOUT</button></div>
       
    </div>
      
 </div>
      
      <div id="CloseCartBtn">
        <img
          id="closeTheimgTagClose"
          src="https://atlona.com/wp-content/uploads/2016/08/close-button.png"
          alt="close"
        />
      
      </div>
      
    </div>
  </div>

 
    
           </div> 
        </div>
    


  <!-- -----------------------------sign-&-registor-page------------------------------------------ -->
 

    <div id="MainContentLogin">
      <div id="closeloginbtna">
        <img
          id="closeTheimgTagForCart"
          src="https://atlona.com/wp-content/uploads/2016/08/close-button.png"
          alt="close"
        />
      </div>
      <div id="LoginImglogo">
        <img
          src="https://www.licious.in/img/default/logo-white.png"
          alt="logo"
        />
      </div>
      <div id="Nameofsig_log">
        <div id="loginNameNavbar">
          <p>Sign Up</p>
        </div>
        <div class="loginform">
          <div id="InputNameform">
            <input
              type="number"
              id="MobleNoInput"
              placeholder="Enter Mobile Number"
            />
            <hr/>
          </div>
          <h3 id="sinupOtp"></h3>
          <div id="Otpfieldsinput">
            <input
              type="number""
              id="OneTimePassword"
              placeholder="Enter OTP"
            />
            <hr id="line" />
          </div>
          <div id="ProcedeWithOTP">
            <a href="./index.html"><button id="confirmLogin">proceed Via OTP</button></a>
          </div>
          <p id="terms_conditions">
            By signing in you agree to our
            <a class="tC" href="#">terms and conditions</a>
          </p>
        </div>
      </div>
    </div>`;
};

export default navbar;
