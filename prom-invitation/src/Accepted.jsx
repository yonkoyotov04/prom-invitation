export default function Accepted({noClick}) {
    return (
        <>
            <div className="plane-big">✈️</div>

            <h1>Flight Confirmed!</h1>

            {noClick ? <h2>There was no way you could reject us!😜</h2> : ''}
            
            <h2>
                Your presence on this journey means a lot to us.
            </h2>

            <h3>
                We are delighted to announce that you are officially a passenger on
                <strong> Prom Flight 2026</strong>.
            </h3>

            <div className="ticket-accepted">

                <div className="ticket-row">
                    <span>Passenger</span>
                    <span>Miss Kuzmanova</span>
                </div>

                <div className="ticket-row">
                    <span>Flight</span>
                    <span>PROM 2026</span>
                </div>

                <div className="ticket-row">
                    <span>Destination</span>
                    <span>The Best Night of the Year</span>
                </div>

                <div className="ticket-row">
                    <span>Status</span>
                    <span>Boarding Approved 🎉</span>
                </div>

            </div>

            <p className="footer">
                Thank you for joining us on this unforgettable journey.
            </p>

            <div className="confetti"></div>
        </>
    )
}