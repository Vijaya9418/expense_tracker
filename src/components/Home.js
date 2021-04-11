import React, { Component } from 'react'

 class Home extends Component {
    render() {
        return (
            <div>
                <h4>this is home</h4>
               <div id="carouselId" class="carousel slide" data-ride="carousel">
                   <ol class="carousel-indicators">
                       <li data-target="#carouselId" data-slide-to="0" class="active"></li>
                       <li data-target="#carouselId" data-slide-to="1"></li>
                       <li data-target="#carouselId" data-slide-to="2"></li>
                   </ol>
                   <div class="carousel-inner" role="listbox">
                       <div class="carousel-item active">
                           <img data-src="./images/image1.jpg" alt="First slide"></img>
                       </div>
                       <div class="carousel-item">
                           <img src="holder.js/900x500/auto/#666:#444/text:Second slide" alt="Second slide"></img>
                       </div>
                       <div class="carousel-item">
                           <img data-src="holder.js/900x500/auto/#666:#444/text:Third slide" alt="Third slide"></img>
                       </div>
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
