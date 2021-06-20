import React from 'react';
import "./Hproduct.css";
import Product from "./Product";

function Hproduct() {
    return (
        <div className="home mt-5">
          <div className="home_container">
                <div className="home_row">
                {/* <Product
                id="12321341"
                 title="The Lean Startup: How Constant Innovation Creates
                  Radically Successful Businesses Paperback" 
                price={20.99}
                 image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"rating={5}/>
                <Product 
                id="49538094"
                title="Kenwood kMix Stand Mixer for Baking, 
                Stylish Kitchen Mixer with K-beater,
                 Dough Hook and Whisk, 5 Litre Glass Bowl"
                 price={239.0}
                 rating={4}
                 image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                 
                 />
                
              */}
                   
                </div>

                <div className="home_row">
                    <Product
                    id="4903850"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor" 
                    price={199.99}
                    image="https://pbs.twimg.com/media/E4OJhdyVcAIOvaQ?format=jpg&name=900x900"
                    />
                    <Product 
                    id="23445930"
                    title="Amazon Echo (3rd generation) |
                     Smart speaker with Alexa, Charcoal Fabric"
                     price={98.99}
                     image="https://pbs.twimg.com/media/E4OJbO-VUAAEOY2?format=jpg&name=900x900"
                     />
                    <Product 
                    id="3254354345"
                    title="iPad Pro (12.9-inch, Wi-Fi, 128GB) 
                    - Silver (4th Generation)"
                    price={598.99}
                    image="https://pbs.twimg.com/media/E4OPxitVIAMYhvq?format=jpg&name=900x900"
                    />
                </div>

                <div className="home_row">
                <Product 
                    id="90829332"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor
                     - Super Ultra Wide Dual WQHD 5120 x 1440"
                     price={1094.98}
                     rating={5}
                     image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                     />
                     
                     
                </div>

            </div>
        </div>
    );
}

export default Hproduct;