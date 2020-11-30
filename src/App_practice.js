import React from 'react';
//import imgA from '../src/image/food1.jfif';
import imgB from '../src/image/food2.jfif';
//import imgC from '../src/image/food3.jpg';
//import imgD from '../src/image/food4.jfif';
//import imgE from '../src/image/food5.jfif';
import PropTypes from 'prop-types';

function Food({name, image, altText, rating}){
  return (
    <div>
      <h1>I like {name} </h1>
      <h4>{rating}/5.0</h4>
      <img src={image} alt={altText}/>
    </div>
  )
}

const foodILink = [
  {
    id: 1,
    name    : '김치전',
    image   : imgB, // import 방식 이미지 불러오기
    altText : '김치전 셋팅 이미지',
    rating  : 5
  },
  {
    id: 2,
    name    : '족발',
    image   : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVZmo3eDBimcMiiyMUAx4GxFE177Ld7vsCZg&usqp=CAU',
    altText : '족발을 셋팅 이미지',
    rating  : 5
  },
  {
    id: 3,
    name    : '소고기',
    image   : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRpcNA6VVWeT6-3kZYR5UTCSewoDdRNDk4rQw&usqp=CAU',
    altText : '소고기 셋팅 이미지',
    rating  : 5
  },
  {
    id: 4,
    name    : '감자탕',
    image   : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvMRlx7eNWxUaKa9GHOptceWD1-cdBRPNpvg&usqp=CAU',
    altText : '감자탕 셋팅 이미지',
    rating  : 5
  }
]




function renderFood(dish){
  return <Food key={dish.id} name={dish.name} image={dish.image} altText={dish.altText} rating={dish.rating}/>;
}
// const renderFood = dish => <Food name={dish.name} image={dish.image} />;

function App() {

  return  (
  <div> 
    {foodILink.map(renderFood)}
  </div>
  );
}
Food.propTypes = {
  name : PropTypes.string.isRequired,
  image : PropTypes.string.isRequired,
  altText : PropTypes.string.isRequired,
  rating : PropTypes.number
}
export default App;
