/* eslint-disable no-undef */
import { useLoaderData } from "react-router-dom";
import Navber from "../Navber/Navber";
import Allcard from "./Allcard";

const MyCard = () => {
    const lodercardData = useLoaderData();
    // console.log(lodercardData);
    return (
        <div className="my-6">
            <Navber></Navber>
            <div className="grid lg:grid-cols-2 gap-4 mt-6">
                {
                    lodercardData.map((item, index) => <Allcard key={index} item={item}></Allcard>)}
            </div>
        </div>
    );
};

export default MyCard;
