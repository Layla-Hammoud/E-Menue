import Pizza from './pizza.jpg'
import './Carousel.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Arrow(props:any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }

function Carousel() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    arrows: false,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    infinite: true,
                    arrows: false,
                }
            },
        ]
    };
    return (
        <>
            <div className='container'>
                <Slider {...settings}>
                    <div>
                        <img className='image' src={Pizza} />

                    </div>
                    <div>
                        <img className='image' src={Pizza} />

                    </div>
                    <div>
                        <img className='image' src={Pizza} />

                    </div>
                    <div>
                        <img className='image' src={Pizza} />

                    </div>
                    <div>
                        <img className='image' src={Pizza} />

                    </div>
                    <div>
                        <img className='image' src={Pizza} />

                    </div>
                    <div>
                        <img className='image' src={Pizza} />

                    </div>
                    <div>
                        <img className='image' src={Pizza} />

                    </div>
                </Slider>
            </div>
        </>
    )
}
export default Carousel