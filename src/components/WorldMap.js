import { useState, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";

import { getTimezones } from "country-timezone";


const geoUrl =
"https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";


export default function WorldMap(){


const [selected,setSelected]=useState(null);

const [timezone,setTimezone]=useState(null);

const [time,setTime]=useState(new Date());



// update clock every second
useEffect(()=>{

const timer=setInterval(()=>{

setTime(new Date());

},1000);


return ()=>clearInterval(timer);


},[]);



function selectCountry(country){


setSelected(country);


// automatically find timezone

const result=getTimezones(country);


if(result.length>0){

    setTimezone(result[0]);

}
else{

    setTimezone(null);

}


}




return(

<div className="card">


<h2>
🌍 Interactive World Map
</h2>



<ComposableMap
projectionConfig={{
scale:150
}}
>


<Geographies geography={geoUrl}>


{({geographies})=>

geographies.map((geo)=>(


<Geography

key={geo.rsmKey}

geography={geo}


onClick={()=>{

selectCountry(
geo.properties.name
);

}}



style={{

default:{
fill:"#cbd5e1",
outline:"none"
},

hover:{
fill:"#2563eb",
outline:"none"
},

pressed:{
fill:"#1d4ed8",
outline:"none"
}


}}


/>


))


}


</Geographies>


</ComposableMap>





{

selected &&

<div className="info">


<h3>
📍 {selected}
</h3>



{

timezone ?


<>


<h1>

{
time.toLocaleTimeString(
"en-US",
{
timeZone:timezone
}
)
}

</h1>


<p>
Timezone : {timezone}
</p>


<p>

GMT :

{
new Intl.DateTimeFormat(
"en-US",
{
timeZone:timezone,
timeZoneName:"longOffset"
}
)
.format(time)

}

</p>


</>



:

<p>
Timezone not available
</p>


}


</div>


}


</div>


);


}