import React, { useRef ,useEffect } from 'react'

const Map = (props) => {
    const mapRef = useRef();

    const {center,zoom} = props;
    useEffect(()=>{
        const map = new window.google.maps.Map(mapRef.current,{
            center:center,
            zoom:zoom
        });
        new window.google.maps.Marker({position:center,map})
    },[center,zoom])
    // useEffect(()=>{
    //  myMap = new L.Map('map', {
    //         key: 'web.bJqM2Our3jcnCd5CjT1AUimktMPbFleR5FE7u8zx',
    //         maptype: 'dreamy',
    //         poi: true,
    //         traffic: false,
    //         center: [35.699739, 51.338097],
    //         zoom: 14
    //     });
    // },[])

    return (
        <div
            ref={mapRef}
            className={`map ${props.className}`} 
            style={props.style}>
            
        </div>
    )
}

export default Map;