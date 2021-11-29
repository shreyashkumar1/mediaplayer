
import Cards from "../Cards";
import "./home.css";


const Home = () => {
  return (
    <div className="home">
      <div className="featured">
        <img
          src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <div className="info">
          <img
            src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
            alt=""
          />
          <span className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            adipisci repellendus eum quasi illo, velit numquam, maxime tempora
            sint deleniti, aliquid qui? Facilis, adipisci! Ratione hic
            repudiandae temporibus eum earum?
          </span>
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
  );
};

export default Home;
