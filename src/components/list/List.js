import ListItem from "../../ListItem/ListItem";
import "./List.css";

export default function List() {
  return (
    <div className="list">
        <div className="wrapper">
          <ListItem/>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
      </div>
  );
}
