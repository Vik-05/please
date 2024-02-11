import React from "react";
import covid from './food.jpeg'
function Card() {
    var arr = [

        {
            Name: "DARK",

        },
        {
            Name: "MANIFEST",
        },
        {
            Name: "GHOSTED",
        },
        {
            Name: "STRANGER THINGS",
        },
        {
            Name: "MARVEL",
        },
        {
            Name: "MARVEL",
        }
    ];
    return (
        <><div className="wrap">
            {arr.map((curr) => {
                return (
                    <>
                        <div className="card-box">

                            <div className="card-box-1">
                                <img src={covid} />

                                <div className="card- box-2">
                                    <h2>NETFLIX ORIGINAL SERIES</h2>
                                    <h3><b>{curr.Name}</b></h3>
                                    <button> WATCH NOW</button>
                                </div>
                            </div>


                        </div>
                        
                    </>
                )

            })}
            </div>

        </>
    )

}

export default Card;