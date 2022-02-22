import React from 'react';
import Card from './components/Card';
import Dataset from './components/Dataset';

function App(){
    return(
    <>
    <div className='heading'>
    <h1 className='heading_style'>Top Hindi Web Series</h1>
    </div>
    <div className='main_div'>
    {Dataset.map((val,index) =>{
      return (
        <Card
          key ={val.id}
          imgsrc = {val.imgsrc}
          Title = {val.Title}
          sname = {val.sname}
          link = {val.link}
        />
      );
    })}
    </div>
   
    </>
    );
}
export default App;