import React from 'react'
import ReactCardSlider from 'react-card-slider-component';
import { Title } from './Title';

const sliderClick = (e) => {
  console.log(e)
}

const slides = [

  { image: "/assets/images/cat_placeholder.jpg", title: "Cat Name 1", clickEvent: sliderClick },
  { image: "/assets/images/cat_placeholder.jpg", title: "Cat Name 2", clickEvent: sliderClick },
  { image: "/assets/images/cat_placeholder.jpg", title: "Cat Name 3", clickEvent: sliderClick },
  { image: "/assets/images/cat_placeholder.jpg", title: "Cat Name 4", clickEvent: sliderClick },
  { image: "/assets/images/cat_placeholder.jpg", title: "Cat Name 5", clickEvent: sliderClick },
]

export const Categories = ({ title }) => {
  return (
    /*<>
      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>*/
    <div>
      <Title title={title} />
      <ReactCardSlider slides={slides} />
    </div>
  )
}
