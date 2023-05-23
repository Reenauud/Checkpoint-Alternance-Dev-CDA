import * as react from "react"
import React , {useEffect, useState} from "react"
import PageTwo from "./Pagetwo"
import  Link  from "react-router-dom"
import { useNavigate } from "react-router-dom"
import {GET_CONTINENTS} from "../queries/getContinents"
import { useQuery } from "@apollo/client"
import "../App.css"



const ContinentsPage = () => {

    const [id, setId] = useState()
    const {data , loading, error} = useQuery(GET_CONTINENTS)
    const navigation = useNavigate()

    const goToPageTwo= (code : any, ) => {
        setId(code)
        navigation(`/pagetwo/${code}`)

    }

    if(error){
        alert(error)

    }
    if(loading){
        return(
            <p>chargement en cours</p>
        )
    }


            const continent = data.continents.map((continent : any, index : string)=> {
            
                    return (
                        <div className={`continent${index.toString()}`} >

                            <p onClick={() =>goToPageTwo(continent.code)}>
                            
                            
                            {continent.name}
                        </p>
                        </div>

                    )         
            })

    return (
        <div className="emplacement">
            <h1>continents</h1>
        <div className="grid">
            {continent}
            {id}

        </div>
        {/* <PageTwo id={id} setId={setId}/> */}
        </div>
    )
        

  
 
    
}

export default ContinentsPage