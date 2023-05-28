import React,{useEffect,useState,useRef} from 'react'

import Search from '../Components/Search';
import '../css/Universities.css'
const Universities = () => {
  const [uni,setUnies] = useState([]);
  const [country,setCountry] = useState('');
  const [loading,setLoading] = useState('');
  const [entered,setEnteredValue] = useState('');
  const countR = useRef(null);
  const getUniversities = async()=>{
    try{
      setLoading(true);
      const res = await fetch(`https://universitiesapi.onrender.com/v1/api/universities/=${country}`)
      const data = await res.json();
      setUnies(data);
      setLoading(false);
      data.map(uni=>console.log(uni));
    }catch(err){
      setLoading(false);
      console.log(err);
    }
  }

const handleClick = (e)=>{ 
setEnteredValue(e.target.value);
}
    const handleSubmit = (e)=>{
      e.preventDefault();
      setEnteredValue( e.target.value)
      setCountry(entered);
    }
    useEffect(()=>{
        getUniversities();
    },[country])
    console.log(entered) 
  return (
    <div>
      {/* lifting up the state  from parent component to child*/}

     <div>
 <form onSubmit={handleSubmit}>
  <label>Country</label>
  <input type="text" value={entered} onChange={(e)=>{
    handleClick(e)
    setEnteredValue('');
    }}/>
  <button type="submit" >Search</button>
 </form>
     </div>
  <div className="worlduni">
    {loading && 
    <div className='loading'>
      Loading....
      </div>}
  { uni && uni.map((keuni,i)=>(
        <div type="1" key={i} className='grid-item'>
            <div>
            <p>Country:{keuni.country}</p>
            <p>{i + 1}:{keuni.name}</p>
            <p>CODE:{keuni.alpha_two_code}</p>
          </div>      
        </div>
      ))
  }
</div>
    </div>
  )
}

export default Universities