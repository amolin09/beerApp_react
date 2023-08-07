import React, { useState } from 'react';

import "./BeerCard.css";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {faHeart as faHeartRegular} from '@fortawesome/free-regular-svg-icons'

import {faHeart as faHeartSolid} from '@fortawesome/free-solid-svg-icons'

function BeerCard(props){

  const[isLiked, setIsLiked] = useState(false);

  const toggleLiked = () => {
    setIsLiked(current => !current)
  }

  return(
    <li style={{listStyle: "none"}}>
      <img style ={{height: "200px"}} src= {props.img_url}></img>
      <h3>{props.name} <span> {props.first_brewed} </span></h3>
      <h4> {props.tagline} </h4>
      <p> <span> {props.abv}</span> {props.description} </p>
      <FontAwesomeIcon icon= {isLiked ? faHeartSolid : faHeartRegular}
                              size="2x1"
                              style={{color: "red"}}
                              onClick={toggleLiked}/>
    </li>
  )
}

export default BeerCard