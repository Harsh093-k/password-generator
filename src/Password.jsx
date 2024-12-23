import PasswordNum from "./PasswordNum.jsx";
import './Password.css'

export default function Password({ password }) {
    return (
        <div className="ticket">
            {Array.isArray(password) && password.map((num, idx) => (
                <TicketNum num={num} key={idx} />
            ))}

        </div>
    );
}
