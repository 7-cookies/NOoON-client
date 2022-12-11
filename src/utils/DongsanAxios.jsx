import React, { useEffect, useState }  from 'react'
import axios from "axios";
import Loading from '../components/common/Loading.jsx'
import GridFix from '../pages/dongsan/GridFix.jsx';

const DongsanAxios = () => {
    const [loading, setLoading] = useState(false);
    const [dongsan, setDongsan] = useState('')

    useEffect(()=>{
    const fetchData = async()=>{
        setLoading(true);

    const response = await axios.get(
        '동산 api url');
        setDongsan(response.data);
    };
    fetchData();
    }, []);

    if (loading){
        return (<Loading />)
    }

    return (
        <GridFix />
    )
} 

export default DongsanAxios
    

