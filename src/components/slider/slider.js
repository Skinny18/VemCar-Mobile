import React from 'react';
import './slider.css';
import car from '../../images/car.png';
import car1 from '../../images/car1.png';
import car2 from '../../images/car2.png';
import car3 from '../../images/car2.png';

const Slider = () => {

    return(
        <> 
             <div id='main-container'>
                <div className='slides'>
                    <div className='slider'>
                        <input type="radio" name="radio-btn" id='radio1' />
                        <input type="radio" name="radio-btn" id='radio2' />
                        <input type="radio" name="radio-btn" id='radio3' />
                        <input type="radio" name="radio-btn" id='radio4' />

                        <div className='slide first'>
                            <img src={car} alt='' />
                        </div>

                        <div className='slide '>
                            <img src={car1} alt='' />
                        </div>

                        <div className='slide '>
                            <img src={car2} alt='' />
                        </div>

                        <div className='slide '>
                            <img src={car3} alt='' />
                        </div>

                       
                    </div>

                    <div className='manual-navigation'>
                        <label for="radio1" className='manual-btn' />
                        <label for="radio2" className='manual-btn' />
                        <label for="radio3" className='manual-btn' />
                        <label for="radio4" className='manual-btn' />
                    </div>
                </div>
            </div>   


        </>


    );




}
export default Slider;