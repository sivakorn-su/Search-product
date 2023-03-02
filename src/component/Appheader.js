import { useState, useEffect } from "react";
import './CSS/Navbar.css'
function Appheader(props) {
    const [item, setitem] = useState('')

    const inputitem = (event) => {
        setitem(event.target.value)
    }
    const OnSubmits = (event) => {
        event.preventDefault();
        props.OnSearchItem(item);

        setitem('');
    }

    return (
        <form onSubmit={OnSubmits}>
            
            <div className="app-search">
                <h3>7SOLUTIONS Co., Ltd</h3>
                <input className='app-search-input' value={item} onChange={inputitem}
                    type='text' placeholder='search' >
                </input>
                <button type="submit">search</button>
            </div>



        </form>
    )
}
export default Appheader