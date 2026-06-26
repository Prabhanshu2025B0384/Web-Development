import gng from './assets/gng.jpg'
function Card(){
    
    return(
        <div className="Card">
            <img src={gng} alt=" Profile pic" className="myImg" />
            <h1 className="myTitle">Gang</h1>
            <p className="myText">Btech ka baad berojgaari confirm</p>
        </div>
    );
}

export default Card