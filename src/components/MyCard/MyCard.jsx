/* eslint-disable no-undef */
// import { useLoaderData } from "react-router-dom";
import Navber from "../Navber/Navber";
import Allcard from "./Allcard";
import { useEffect, useState } from "react";

const MyCard = () => {
    // const lodercardData = useLoaderData();
    const [cardData, setCardData] = useState([]);
    const [reFetch, setRefetch] = useState(false);
    useEffect(()=>{
        fetch('http://localhost:5000/mycart')
        .then(res=>res.json())
        .then(data=>{setCardData(data)})
    },[reFetch])
    // console.log(lodercardData);
    return (
        <div className="my-6">
            <Navber></Navber>
            <div className="grid lg:grid-cols-2 gap-4 mt-6">
                {
                    cardData?.map((item, index) => <Allcard key={index} item={item} setRefetch={setRefetch}></Allcard>)}
            </div>
        </div>
    );
};

export default MyCard;
