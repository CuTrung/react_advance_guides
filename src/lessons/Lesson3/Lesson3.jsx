import { useState } from "react";
import CoolButton from "./CoolButton";

const Lesson3 = (props) => {
    const [name, setName] = useState('');


    return (
        <div>
            <label>Name:</label>
            <input type={'text'}
                onChange={(event) => setName(event.target.value)}
                value={name}
            />
            <div>Your name 's {name} </div>
            <CoolButton
                btnClass="primary"
                title="Primary"
            />
            <CoolButton
                btnClass="warning"
                title="Warning"
            />
        </div>
    )
}

export default Lesson3;