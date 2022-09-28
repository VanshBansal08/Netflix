import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import List from "../../components/list/List";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const Home = ({type}) => {
  const [lists,setLists]= useState([]);
  const [genre, setGenre] = useState(null);
  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTM5MDY0ZWRkZDZiMjFjMDY5MGMxNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1OTEwMjgyNiwiZXhwIjoxNjU5NTM0ODI2fQ.HW2pxtD80JqXuHvWGFQ7Jee30VRWhZ6LzhafCbnl3LY"
            },
          }
        );
     
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type}/>
      {lists.map(list=>(
        <List list={list}/>
      ))}
     
    </div>
  );
};

export default Home;
