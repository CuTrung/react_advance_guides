import './Lesson8.scss';

const Lesson8 = (props) => {
    function handleOnClick1(name) {
        alert('click me');
        console.log(name);
    }

    const handleOnClick2 = () => {
        alert('click me')
    }

    const person = {
        age: 18,
        other: {
            name: "Trung"
        }
    }

    const newPerson = structuredClone(person)
    newPerson.other.name = "new";
    console.log("person", person, "newPerson", newPerson);

    return (
        <div className="lesson8">
            <h3>Lesson 8 :</h3>
            <div>
                <button onClick={handleOnClick1}>Tham Chiếu</button>
            </div>
            <div>
                <button>Inline</button>
            </div>
            <div>
                <button>Arrow function</button>
            </div>
        </div>
    )
}

export default Lesson8;