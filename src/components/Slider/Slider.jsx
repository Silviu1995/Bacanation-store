import './Slider.scss'
import { useState } from 'react';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const Data = [
    "https://images.pexels.com/photos/794432/pexels-photo-794432.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/833052/pexels-photo-833052.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/1223343/pexels-photo-1223343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

]

const Slider = () => {
    const [currentSlide,setCurrentSlide] = useState(0)

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev-1)
    }
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev+1)
    }
    return(
        <div className='slider'>
            <div className="container" style={{transform:`TranslateX(-${currentSlide * 100}vw)`}}>
                <img src={Data[0]} alt="" />
                <img src={Data[1]} alt="" />
                <img src={Data[2]} alt="" />
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <KeyboardDoubleArrowLeftIcon/>
                </div>
                <div className="icon" onClick={nextSlide}>
                    <KeyboardDoubleArrowRightIcon/>
                </div>
            </div>

        </div>
    )
}

export default Slider