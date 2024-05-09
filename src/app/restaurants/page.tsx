import React from 'react';
import RestaurantCard from "@/components/Restaurants/RestaurantCard";
import Image from "next/image";


const Restaurants = () => {
    return (
        <>
            <h1 className={"text-center fw-bolder mt-5 mb-3"}>Place your order now</h1>
            <RestaurantCard
                picture={<Image src="/food1.png" alt="Food 1" width={300} height={150}/>}
                name={"Pho Zone"}
                description={"Blurb short"}
            />
            <div className={"coming-soon"}>
                <RestaurantCard
                    picture={<Image src="/food1.png" alt="Food 1" width={300} height={150}/>}
                    name={"Milo's Chicken Grill"}
                    description={"Blurb long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long"}
                />
            </div>
            <div className={"coming-soon"}>
                <RestaurantCard
                    picture={<Image src="/food1.png" alt="Food 1" width={300} height={150}/>}
                    name={"Cynthia's Kitchen"}
                    description={"Blurb  blurb blurb blurb blurb blurb blurb blurb blurb blurb"}
                />
            </div>
            <div className={"coming-soon"}>
                <RestaurantCard
                    picture={<Image src="/food1.png" alt="Food 1" width={300} height={150}/>}
                    name={"Limon Rotisserie"}
                    description={"Blurb  blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb"}
                />
            </div>
        </>
    );
};

export default Restaurants;
4