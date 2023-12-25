import { IMG_CDN } from "../utils/Constants";

const MovieCard = ({ posterpath })=>{
    if(!posterpath) return null;
    return(
        <div className="w-36 md:w-48 pr-4 ">
<img src={IMG_CDN + posterpath}
alt="Img Loading" 
/>
        </div>
    )
};

export default MovieCard;