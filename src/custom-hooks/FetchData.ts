import React, {useState, useEffect} from 'react';
import{serverCalls} from '../api';

export const useGetData = () =>{
    const [superheroData, setData] = useState<any>([]);

    const handleDataFetch = async () =>{
        const result = await serverCalls.get();
        setData(result)
    }

    //useEffect Hook
    useEffect( () => {
        handleDataFetch();
    }, [])

    return {superheroData, getData:handleDataFetch}
}