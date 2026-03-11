import { useRef, useState } from "react"
import { Link } from "react-router";

export default function Rejected() {
    const [textArr, setTextArr] = useState(['Are you sure?👀', '100% sure?💯', 'No kidding?🤨', 'Do you really reject our invitation?🥺']);
    const [text, setText] = useState(textArr[0]);

    const yesButtonRef = useRef(null);

    const moveButton = () => {
        const button = yesButtonRef.current;

        const maxX = window.innerWidth - button.offsetWidth - 40;
        const maxY = window.innerHeight - button.offsetHeight - 40;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        button.style.position = 'fixed';
        button.style.left = randomX + 'px';
        button.style.top = randomY + 'px';
    }

    const changeText = () => {
        if (textArr.length <= 1) {
            return;
        }
        const currentTextArr = textArr;
        currentTextArr.shift();
        setTextArr(currentTextArr);
        setText(textArr[0]);
    }

    return (
        <>
            <div className="plane">✈️</div>

            <div className="ticket">
                BOARDING PASS • PROM 2026
            </div>

            <div>
                <h3>
                    {text}
                </h3>
            </div>

            <div className="buttons">
                <button
                    ref={yesButtonRef}
                    className="yes"
                    onClick={changeText}
                    onMouseEnter={text === 'Do you really reject our invitation?🥺' ? moveButton : undefined}>Yes</button>
                <Link to='/' className="no">No</Link>
            </div>
        </>
    )
}