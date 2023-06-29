import React from "react";

const Loading = ({data}) =>{
    return(
        <>
            {
                data ? (<> 
                <h1>Loading ....</h1>



                </>):(<>
                </>)
            }
        </>
    )
}
export default Loading;