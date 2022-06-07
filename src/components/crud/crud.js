import React, { useEffect, useState, useRef } from 'react';
import './crud.css';

/*Carrosel dos carros*/
function Crud(){
const [data, setData] = useState([]);
const carousel = useRef(null);

  useEffect(() => {
    fetch('https://vemcar.herokuapp.com/static/shoes.json')
      .then((response) => response.json())
      .then(setData);
  }, []);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  if (!data || !data.length) return null;

  return (
      <>
    <div className="container">
      
      <div className="carousel" ref={carousel}>
        {data.map((item) => {
          const { id, name, cor, ano, motor, price,  image } = item;
          return (
            <div className="item" key={id}>
              
              <div className="image">
                <img src={image} alt=" " />
              </div>
              <div className="info">
                <span className="name">{name}</span>
                <span className='oldPrice'>{cor}</span>
                <span className='oldPrice'>{ano}</span>
                <span className='oldPrice'>{motor}</span>
                <span className="price">{price}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="buttons">
        <button onClick={handleLeftClick}>
          <img src="/static/images/216151_right_chevron_icon.png" alt="Scroll Left" />
        </button>
        <button onClick={handleRightClick}>
          <img src="/static/images/216151_right_chevron_icon.png" alt="Scroll Right" />
        </button>
      </div>
    </div>
   </> 
  );
}

export default Crud;