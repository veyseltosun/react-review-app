import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const[line, setLine] = useState(0);
  const{name, job, image, text} = people[line];



  const checkNumber = (number) =>{
    if(number > people.length - 1)
    {
      return 0;

    }
    if(number < 0 ){
      return people.length-1;

    }
    return number;
    
    
  }

  const nextPerson = () =>{
    
    setLine((line) =>{
      let newLine = line + 1;
      return checkNumber(newLine);

    });
  }

  const prevPerson = () =>{
    
    setLine((line) => {
      let newLine = line- 1;
      return checkNumber(newLine);


    });

  }
  const randomPerson = () =>{
    let randomNumber = Math.floor(Math.random() * people.length);
    if ( randomNumber === line){
      randomNumber = line + 1;

    }
    setLine(checkNumber(randomNumber))

  }

  return(
    <article>
      <div className='img-container'>
        <img src={image} alt={name}  className="person-img"/>
        <span className='quote-icon'>
          <FaQuoteRight/>
        </span>

      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>

      <div className='btn-container'>
        <button className='prev-btn' onClick={prevPerson}><FaChevronLeft/></button>

        <button className='next-btn' onClick={nextPerson}><FaChevronRight/></button>
        <button className='random-btn' onClick={randomPerson}>surprise me</button>
      </div>


      

    </article>
  )
};

export default Review;
