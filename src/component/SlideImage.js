import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import './CSS/Item.css'
function SlideImage(props) {
   const {images} = props
   return (
      <div className="slide-container">
        <Fade>
          {images.map((each, index) => (
            <div className="each-fade" key={index}>
              <img src={each} width="100%" />
            </div>
          ))}
        </Fade>
      </div>
    );
}
export default SlideImage