import {useState,useEffect} from 'react'
import {FaAngleDoubleLeft} from 'react-icons/fa'
import './App.css';
import {Button} from 'reactstrap'
const url='https://course-api.com/react-tabs-project';



function App() {

  const[loading,setLoading]=useState(true);
  const[jobs,setJobs]=useState([]);
  const[value,setValue]=useState(0);

  const fetchjob=async()=>{
    const data=await fetch(url);
    const response=await data.json();
    console.log(response)
    setJobs(response)
    setLoading(false)
  }

  useEffect(()=>{
    fetchjob()
  },[])

  if(loading){
    return <h1>Loading...</h1>
  }

  const {company,dates,duties,title}=jobs[value];
  return (
    <div className="App">
     <h2>Experience</h2>
     <div>
       {jobs.map((pos,index)=>{
         return <Button color="warning" key={index} onClick={()=>setValue(index)}>{pos.company}</Button>
       })}
     </div>
     

     <h3>{title}</h3>
     <h2>{company}</h2>
     <h4>{dates}</h4>
     {duties.map((duty,index)=>{
       return(
        
        <div key={index}>
         <FaAngleDoubleLeft />
         <p>{duty}</p>
        </div>
         
       )
     })}

        

     
    </div>
  );
}

export default App;
