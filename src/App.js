import React ,{useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

function Name(){
    const[users,setUsers]=useState([]);
    const[loading,setLoading]=useState(true);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(data=>{
            setUsers(data);
            setLoading(false);
        })
        .catch(error=>{
            console.error("It is not loading and it will be a error")
            setLoading(false);
        });
    },[]);

if(loading){
     return<p>loading...</p>;
}


return(
    <div>
    <h2>List of name</h2>
    <ol>{users.map(user=>(
    <li key={user.alpha_two_code}>{user.name} --{user.country}--{user.domains}</li>
        ))}
    </ol>
    
     </div>
    );
    }
export default Name;