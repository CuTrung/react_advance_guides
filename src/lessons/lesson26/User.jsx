import { useState } from "react";

const User = (props) => {
    const { data } = props;
    const [show, setShow] = useState(true);
    console.log(data[0]);
    console.log("hoi dan it")
    alert('me')
    return (
        <div className="detail-user">
            {data && data.map((user, index) => {
                return (
                    <div key={index}>
                        <div>ID: {user.id}</div>
                        <div>Username: {user.username}</div>
                        {/* <div>
                            {data.image && show &&
                                <img src={`data:image/png;base64, ${data.image}`} alt="User image" />
                            }
                        </div> */}
                        <div>
                            <button onClick={() => setShow(!show)}>Hide/Show Images</button>
                        </div>
                    </div>
                )
            })}


        </div>
    )
}

export default User;