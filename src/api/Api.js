const Api_kye="7tDjQRKhhFc07811mIFUMBSyMwi2";
export const getMatches=()=> 
{
    const url=`https://cricapi.com/api/matches?apikey=${Api_kye}`;
    return fetch(url).then((res)=>res.json()).catch((error)=>console.log("Error"));
}
export const getMatchDetails=(id)=>{
    const url=`https://cricapi.com/api/cricketScore?apikey=${Api_kye}&unique_id=${id}`;
    return fetch(url).then(res=>res.json()).catch(err=>console.log('Some is wrong!'));
}
