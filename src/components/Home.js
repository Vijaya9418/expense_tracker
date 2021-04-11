import React, { Component } from 'react'
import Images from '../images/image1.jpg';
import Imagess from '../images/image2.jpg';
import Imagesss from '../images/image3.jpg';
import "./home.css";


 class Home extends Component {
    render() {
        return (
            <div>
              
               <div id="carouselId" class="carousel slide" data-ride="carousel">
                   <ol class="carousel-indicators">
                       <li data-target="#carouselId" data-slide-to="0" class="active"></li>
                       <li data-target="#carouselId" data-slide-to="1"></li>
                       <li data-target="#carouselId" data-slide-to="2"></li>
                   </ol>
                   <div class="carousel-inner customus" role="listbox">
                       <div class="carousel-item active ">
                           <img src={Images} width="1465px" height="600px" alt="First slide"></img>
                          
                       </div>
                       <div class="carousel-item">
                           <img src={Imagess} width="1465px" height="600px" alt="Second slide"></img>
                       </div>
                       <div class="carousel-item">
                           <img src={Imagesss} width="1465px" height="600px" alt="Third slide"></img>
                       </div>
                       <button >Start</button>
                   </div>
                   <a class="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
                       <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                       <span class="sr-only">Previous</span>
                   </a>
                   <a class="carousel-control-next" href="#carouselId" role="button" data-slide="next">
                       <span class="carousel-control-next-icon" aria-hidden="true"></span>
                       <span class="sr-only">Next</span>
                   </a>
               </div>
            </div>
        )
    }
}
export default Home;
