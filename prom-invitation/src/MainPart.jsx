import { Routes, Route } from "react-router";
import Invitation from "./Invitation.jsx";
import Rejected from "./Rejected.jsx";
import { useState } from "react";
import Accepted from "./Accepted.jsx";

export default function MainPart() {
    const [clickedNo, setClickedNo] = useState(false);

    return (
        <main className="container">

            <Routes>
                <Route path="/" element={<Invitation noSetter={setClickedNo} />} />
                <Route path="/rejected" element={<Rejected />} />
                <Route path="/accepted" element={<Accepted noClick={clickedNo} />} />
            </Routes>

        </main>
    )
}