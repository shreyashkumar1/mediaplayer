import React from 'react'
import Cards from '../Cards'
import "./series.css"

const Series = () => {
    return (
        <div className="home">
            <div className="featured">
        <div className="category">
          <span>Series</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      </div>
      <Cards
  imgsrc="https://wallpapercave.com/wp/wp4056410.jpg" 
  sname="DARK"
  title="A Netflix Original Series"
  link="https://www.netflix.com/in/title/80990668?source=35"
  />
  
  <Cards
  imgsrc="https://wallpapercave.com/w/wp7418494.jpg"
  sname="extra curricular"
  title="Netflix Original Series"
  link="https://www.netflix.com/in/title/8080990668?source=35"
  />
  
  <Cards 
  imgsrc="https://wallpapercave.com/wp/wp1917154.jpg" 
  sname="Stranger Things"
  title="A Netflix Original Series"
  link="https://www.netflix.com/in/title/80990668?source=35"
  />
    </div>
    )
}
export default Series
