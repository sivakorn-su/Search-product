import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import AppDeteil from "./AppDeteil";
import SlideImage from "./SlideImage";


function PageDetail() {
    const [deteil, setdeteil] = useState({})
    const [images, setimages] = useState([])
    const { postId } = useParams();
    async function getDeteil(thepostId) {
        const response = await fetch(`https://dummyjson.com/products/${thepostId}/`)
        const responseJson = await response.json();
        setdeteil(responseJson)
        setimages(responseJson.images)
    }
    useEffect(() => {
        getDeteil(postId);
    }, [postId])
    return (
        <div>
            <Navbar></Navbar>
            <SlideImage images= {images}></SlideImage>
            <AppDeteil deteil={deteil}></AppDeteil>
            
        </div>
    );
}
export default PageDetail