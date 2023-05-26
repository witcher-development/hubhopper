import { GrLocation, GrFormSearch } from "react-icons/gr";
import { IoIosArrowBack } from "react-icons/io";
import { FiClock } from "react-icons/fi";

export const TopBar = (props) => {
    let today = new Date();
    
    if(props.select==='destination') return (
        // rendering for selecting destination
        <div id="topbar">
            <span id='destination-search'>Search</span>
            <GrLocation id='destination-img-location' /><input id='destination-input' placeholder="Destination Hub" />
        </div>
    )
    else if(props.select==='source') return (
        // rendering for selecting source
        <div id="topbar">
            <IoIosArrowBack id='source-backbtn' />
            <span id='source-destinfo'><span>Destination Hub: {props.destination_hub}</span><span><FiClock style={{transform: 'translateY(0.17em)', color: '#B9BCBE', marginRight: '0.2em'}} />{today.getHours() + ":" + today.getMinutes()}</span></span>
            <GrFormSearch id='source-img-lens' /><input id='source-input' placeholder="Search Start Hub" />
        </div>
    )
}