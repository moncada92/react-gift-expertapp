import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"


export const useFetchGifs = (category) => {

    const [stateHook, setStateHook] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getGifs(category)
            .then(imgs => { 
                setStateHook({
                data: imgs,
                loading: false
                })
            })
    }, [category])


    return stateHook;
}