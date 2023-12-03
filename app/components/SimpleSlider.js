"use client"
// import React, { Component } from "react";
// import Slider from "react-slick";
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import Image from "next/image";

// export default class SimpleSlider extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1
//     };
//     return (
//       <div className="  border border-black">
      
//         <div className="">
//           <Slider {...settings}>
//             <div className="flex justify-between">
//               <div className="">Game Controler</div>
//               <div className=""><Image className="w-[50%] h-[50%]" src="/assets/1.jpg" width={600} height={300} /></div>

//             </div>
//             <div>
//               <h3>2</h3>
//             </div>
//             <div>
//               <h3>3</h3>
//             </div>
//             <div>
//               <h3>4</h3>
//             </div>
//             <div>
//               <h3>5</h3>
//             </div>
//             <div>
//               <h3>6</h3>
//             </div>
//           </Slider>
//         </div>
//       </div>
//     );
//   }
// }


import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";

export default class AdaptiveHeight extends Component {
  render() {
    var settings = {
      className: "",
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true
    };
    return (
      <div>
        <h2>Adaptive height</h2>
        <Slider {...settings}>
          <div >
          <div className="flex justify-center "><Image className=" justify-center " src="/assets/one.png" width={140} height={146} /></div>

          </div>
          <div>
          <div className="flex justify-center "><Image className=" justify-center " src="/assets/two.png" width={300} height={300} /></div>

          </div>
          <div>
          <div className="flex justify-center "><Image className=" justify-center " src="/assets/one.png" width={300} height={300} /></div>

          </div>
          <div>
          <div className="flex justify-center "><Image className=" justify-center " src="/assets/one.png" width={300} height={300} /></div>

          </div>
          <div>
          <div className="flex justify-center "><Image className=" justify-center " src="/assets/one.png" width={300} height={300} /></div>

          </div>
          <div>
          <div className="flex justify-center "><Image className=" justify-center " src="/assets/one.png" width={300} height={300} /></div>

          </div>
        </Slider>
      </div>
    );
  }
}
