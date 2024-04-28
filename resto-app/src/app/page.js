"use client"
import CustomerHeader from "./_components/CustomerHeader";
import Footer from "./_components/Footer";
import { MdLocationPin } from "react-icons/md";
import { IoRestaurantSharp } from "react-icons/io5";
import { useEffect, useState } from "react";



export default function Home() {
  let [location, setLocation] = useState([]);
  let [selected,setSelected] = useState("");
  let [showCity,setShowCity] = useState(false)

  useEffect(() => {
    loadLocation();
  }, [])

  const loadLocation = async () => {
    let response = await fetch("http://localhost:3000/api/customer/location")
    response = await response.json();
    if (response.success) {
      setLocation(response.result)
    }

  }
  const handleListItem = (e)=>{
    setSelected(e)
    setShowCity(false)
  }
  return (<>
    <main>
      <CustomerHeader />
      <div className="main-page-banner">
        <h1 className="banner-text">Food Delivery App</h1>
        <div className="input-wrapper">
          <div>
            <input onClick={()=>{setShowCity(true)}} type="text" value={selected}  placeholder="Select City" className="select-input" />
            <span className="location-icon"><MdLocationPin /></span>
            <ul className="locations">
              {showCity && location.map((item) => (
                <li onClick={()=>handleListItem(item)}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <input type="text" placeholder="Enter food or restaurant name" className="search-input" />
            <span className="restaurant-icon"><IoRestaurantSharp /></span>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </>
  );
}
