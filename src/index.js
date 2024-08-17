// import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom';
// // class ReactState extends React.Component{
// //   constructor(){
// //       super();
// //           this.state={MyWebsite:"Welcome to my Website"}
// //       }
// //       render(){
// //       return <h1>{this.state.MyWebsite}</h1>
// //       }
// // }

// // const root = document.getElementById('root');
// // ReactDOM.render(<ReactState />, root);

// // export default  ReactState;



// // class Reactstate extends React.Component{ 
// //     constructor(){
// //         super();
// //         this.state={Mywebsite:"You have a Surprise!!!"}
// //     }
// //     change=()=>{
// //         this.setState({Mywebsite:" YOU ARE GOOD!!"})
// //     }
// //     render(){
// //         return <div className='butt'><h1>{this.state.Mywebsite}</h1><br/>
// //         <button type='button' onClick={this.change}>Click here</button></div>
// //     }
// // }
// // ReactDOM.render(<Reactstate/>,document.getElementById,('root')); 
// function Examplerender(){
//     const[count,setcount]=useState(0);
//     useEffect(()=>{
//         setTimeout(()=>{
//             setcount(count=>count+1)
//         },2000)
//     });
//     return(
//         <h1>Website counting details{count}times</h1>)}
// ReactDOM.render(<Examplerender/>,document.getElementById('root'));
// export default Examplerender
import React ,{useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import App from './App'
function Website(){
        return(
            <div>
                <App/>
            </div>
        );
}
ReactDOM.render(<Website/>,document.getElementById("root"));