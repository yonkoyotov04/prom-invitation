import { useState } from "react";
import { Link } from "react-router";

export default function Invitation({ noSetter }) {

    const onNoClick = () => {
        noSetter(true);
    }

    return (
        <>
            <div className="plane">✈️</div>

            <div className="ticket">
                BOARDING PASS • PROM 2026
            </div>

            <div>
                <h1>
                    Dear Miss Kuzmanova,
                </h1>

                <h2>
                    Your favorite class is preparing for the most important flight of the year.
                </h2>

                <h3>
                    Will you join us on this journey to Prom Night?
                </h3>
            </div>

            <div className="buttons">
                <Link to='/accepted' className="yes">Yes, I'll board ✈️</Link>
                <Link to='/rejected' className="no" onClick={onNoClick}>I can't make the flight</Link>
            </div>
        </>

    )
}