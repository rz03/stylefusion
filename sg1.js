import React from "react";
import Imageslider from "../script";



function Navbar()
{
    return (

        <div class="fornav" >
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid" >
                            
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                                </li>
                                <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider"/></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                                </li>
                            </ul>
                            <form class="d-flex">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>
                            </div>
                    </div>
                </nav>
        </div>
    );
}

function Seg1()
{
    return (
        <div className="vertical-car">
               <div class="vertical-slideshow">


                    <div class="slide">
                    <img src="https://www.charlestyrwhitt.com/dw/image/v2/AAWJ_PRD/on/demandware.static/-/Sites-ctshirts-master/default/dwb4e32196/FON0409NWH_COLLAR_DETAIL.jpg?sw=60&sh=80" alt="Slide 1"/>
                    </div>

                    <div class="slide">
                    <img src="https://www.charlestyrwhitt.com/dw/image/v2/AAWJ_PRD/on/demandware.static/-/Sites-ctshirts-master/default/dw45cc69c2/FON0409NWH_MODEL_FULL.jpg?sw=60&sh=80" alt="Slide 2"/>
                    </div>

                    <div class="slide">
                    <img src="https://www.charlestyrwhitt.com/dw/image/v2/AAWJ_PRD/on/demandware.static/-/Sites-ctshirts-master/default/dw33a19e95/FON0409NWH_MODEL_DETAIL.jpg?sw=60&sh=80" alt="Slide 3"/>
                    </div>

                    <div class="slide">
                        <img src="https://www.charlestyrwhitt.com/dw/image/v2/AAWJ_PRD/on/demandware.static/-/Sites-ctshirts-master/default/dw2d780dca/FON0409NWH_FOLD_SINGLE.jpg?sw=60&sh=80" alt="Slide 3"/>
                    </div>
                    <div class="slide">
                        <img src="https://www.charlestyrwhitt.com/dw/image/v2/AAWJ_PRD/on/demandware.static/-/Sites-ctshirts-master/default/dw2d780dca/FON0409NWH_FOLD_SINGLE.jpg?sw=60&sh=80" alt="Slide 3"/>
                    </div>
                    <div class="slide">
                        <img src="https://www.charlestyrwhitt.com/dw/image/v2/AAWJ_PRD/on/demandware.static/-/Sites-ctshirts-master/default/dwae164af4/FON0409NWH_MODEL_CUFF.jpg?sw=60&sh=80" alt="Slide 3"/>
                    </div>

                    <div class="slide">
                        <img src="https://www.charlestyrwhitt.com/dw/image/v2/AAWJ_PRD/on/demandware.static/-/Sites-ctshirts-master/default/dwb4e32196/FON0409NWH_COLLAR_DETAIL.jpg?sw=60&sh=80" alt="Slide 3"/>
                    </div>
                                        
                </div>
        </div>
    );
}

function Seg2 ()
{
    return (
        <div className="changing-img">
             <img src="https://www.charlestyrwhitt.com/on/demandware.static/-/Sites-ctshirts-master/default/dwb4e32196/FON0409NWH_COLLAR_DETAIL.jpg" className="image" alt-text=" product-img-missing"/>
        </div>

    );
}
function Seg3()
{
    
    return (
        <div className="cart">
            <div className="catalog">
            <h4 className="cat-name" >
                name of Shirt/Ppant/whatever called in the marketplace
            </h4>
            </div>
            <br/>
            <div className="text-star">
                <div className="text">
                    $250
                </div>
                <div className="rating">
                    *****
                </div>
            </div>
            <br/>
            <hr/>
            <br/>
            textual description of the cloth
            <div className="choosesize">
                // a dropdown with different sizes to sellect for

            </div>

            <div className="built-a-custom">
                <button className="bttn">
                    Built a Custom Shirt
                </button>
            </div>

            <br/>
           a badge icon for gurantee of product
            product code Crafted from soft and breathable cotton, this distinctive diagonal weave gives the fabric a subtle sheen and luxe drape, as well as making it hard-wearing. Our new ivory-white shade is softer than a true, pure white, for a warmer look that goes with every outfit combination you throw at it. The versatile classic collar can be styled for all dress codes, from an open-neck to smartened up with a tie. Complimentary brass collar stays ensure your collar stays crisp, and for ease of care (and a little extra sleep) we've added our non-iron finish.
            

           <ul> 100% 2-Ply cotton
                <li>Available in classic, slim and extra slim fit</li>
                <li>Non-iron</li> 
                <li>Extra slim fit: back darts</li>
                <li>Single rounded two button cuff or square double cuff</li>
                 <li> Machine washable</li>  

            </ul>

            <br/>
            <div className="dropdown">
            <hr/>
                <div className="d-1">
                
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                SIZE & FIT
                              
                </a>
                
                </div>
                <hr/>
                <div className="d-2">
                
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                REVIEWS
                                
                </a>
                </div>
                <hr/>
                <div className="d-3">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                DELIVERY
                                
                </a>
                </div>
                <hr/>
                
                <div className="d-4">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                RETURN
                                
                </a>
                </div>
            </div>
            <br/>

        </div>
    );
}

function Caro ()
{
    return (
        <section class="product"> 
        
        <div class="product-container">
            <div class="product-card">
                <div class="product-image">
                    <span class="discount-tag">50% off</span>
                    <img src="https://www.charlestyrwhitt.com/dw/image/v2/AAWJ_PRD/on/demandware.static/-/Sites-ctshirts-master/default/dwb4e32196/FON0409NWH_COLLAR_DETAIL.jpg?sw=600&sh=750" class="product-thumb" alt="aldt"/>
                    <button class="card-btn">add to wishlist</button>
                </div>
                <div class="product-info">
                    <h2 class="product-brand">brand</h2>
                    <p class="product-short-description">a short line about the cloth..</p>
                    <span class="price">$20</span><span class="actual-price">$40</span>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <span class="discount-tag">50% off</span>
                    <img src="https://www.charlestyrwhitt.com/dw/image/v2/AAWJ_PRD/on/demandware.static/-/Sites-ctshirts-master/default/dwb4e32196/FON0409NWH_COLLAR_DETAIL.jpg?sw=600&sh=750" class="product-thumb" alt=""/>
                    <button class="card-btn">add to wishlist</button>
                </div>
                <div class="product-info">
                    <h2 class="product-brand">brand</h2>
                    <p class="product-short-description">a short line about the cloth..</p>
                    <span class="price">$20</span><span class="actual-price">$40</span>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <span class="discount-tag">50% off</span>
                    <img src="https://www.charlestyrwhitt.com/dw/image/v2/AAWJ_PRD/on/demandware.static/-/Sites-ctshirts-master/default/dwb4e32196/FON0409NWH_COLLAR_DETAIL.jpg?sw=600&sh=750" class="product-thumb" alt=""/>
                    <button class="card-btn">add to wishlist</button>
                </div>
                <div class="product-info">
                    <h2 class="product-brand">brand</h2>
                    <p class="product-short-description">a short line about the cloth..</p>
                    <span class="price">$20</span><span class="actual-price">$40</span>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <span class="discount-tag">50% off</span>
                    <img src="https://www.charlestyrwhitt.com/dw/image/v2/AAWJ_PRD/on/demandware.static/-/Sites-ctshirts-master/default/dwb4e32196/FON0409NWH_COLLAR_DETAIL.jpg?sw=600&sh=750" class="product-thumb" alt=""/>
                    <button class="card-btn">add to wishlist</button>
                </div>
                <div class="product-info">
                    <h2 class="product-brand">brand</h2>
                    <p class="product-short-description">a short line about the cloth..</p>
                    <span class="price">$20</span><span class="actual-price">$40</span>
                </div>
            </div>
          
           
            <div class="product-card">
                <div class="product-image">
                    <span class="discount-tag">50% off</span>
                    <img src="https://www.charlestyrwhitt.com/dw/image/v2/AAWJ_PRD/on/demandware.static/-/Sites-ctshirts-master/default/dwb4e32196/FON0409NWH_COLLAR_DETAIL.jpg?sw=600&sh=750" class="product-thumb" alt=""/>
                    <button class="card-btn">add to wishlist</button>
                </div>
                <div class="product-info">
                    <h2 class="product-brand">brand</h2>
                    <p class="product-short-description">a short line about the cloth..</p>
                    <span class="price">$20</span><span class="actual-price">$40</span>
                </div>
            </div>
           
        </div>

    </section>

    



      
      
           
    );
}

function sg () {
    return(
      <> 
      
       <div class="main" >
            <header class="header"> brand name and other stuff comes under header file
            </header>
            <div>
                <Navbar />
            </div>
            
            <div className="segment-page">
                <div className="div-1">
                    <Seg1 />
                </div>
                <div className="div-2">
                    <Seg2 />
                </div>
                <div className="div-3">
                    <Seg3 />
                </div>

            </div>
               <hr/> 

               
                
        </div>
        <hr />
        <div class="related-product">
                <Caro />
           </div> 

       
        <br/>
        <br/>
       

        

       <div >
        <button type="button" className="back-2-product-page" href="#"> <h4> BACK TO PRODUCT PAGE</h4></button>
        </div>        
       

       
       </>

    );
}
export default sg;



      
      
         