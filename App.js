import React from "react";
import Card from "./Cards";
import data from "./Data";

const App=()=>(
<>
{

  data.map((val,index)=>{
    return(
      <Card 
    IMG={val.IMG}  
    HEADING={val.HEADING}
    DESC={val.DESC}
    LIN={val.LINK}
      
      />
    );
  } )
}


</>
);


export default App;