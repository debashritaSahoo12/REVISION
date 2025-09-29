import axios from "axios"
import React,{ useEffect, useState } from "react"

const useFetch = (url) => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState("")
    useEffect(()=>{
        if(!url) return;
        axios.get(url).then((res)=>{
            setData(res.data)
            setLoading(false)
        })
        .catch((err)=>{
            console.log(err)
            setError(err.message)
        })
    },[url])
  return {data,loading,error}
}

export default useFetch