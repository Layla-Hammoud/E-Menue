import Pizza from './pizza.jpg'
import './Carousel.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Carousel() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
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