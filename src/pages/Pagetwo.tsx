import { useParams } from "react-router-dom"
import { GET_COUNTRIES } from "../queries/getCountries";
import { useQuery } from "@apollo/client";
import { strict } from "assert";
import { useEffect } from "react";


const PageTwo = () => {
    let  {id}   = useParams();
    const {data , loading, error} = useQuery(GET_COUNTRIES, {variables: {code : id}})



    if(loading){
        return(
            <p>loading</p>
        )
    }

    if(error){
        alert(error)
    }
    
    const countries = data.continent.countries.map((countrie : any)=>{
        return(
            <div className="pays">
            <p>{countrie.name}</p>
            <p>{countrie.emoji}</p>
            </div>



        )
    } )

return (
    <div>
        {data && countries}
    </div>
)

}

export default PageTwo