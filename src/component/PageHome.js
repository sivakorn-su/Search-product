import { useState } from 'react';
import Appheader from './Appheader';
import AppBody from './AppBody';
function PageHome() {
    const [search, setsearch] = useState('')
    const OnSearchItem = (event) => {
        setsearch(event)
    }
    console.log(search)
    return (
        <div >
            <Appheader OnSearchItem={OnSearchItem}></Appheader>
            <AppBody search={search} ></AppBody>
        </div>
    );
}

export default PageHome