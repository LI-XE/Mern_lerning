import React from 'react';

const Home = (props) => {
    
    if(!props.word){
        return(
            <div>
                <h1>Welcome!</h1>
            </div>
        );
    } else {
        if(isNaN(props.word)){
            return(
                <div>
                    <h1 style={{ color:props.color, backgroundColor:props.bg }}>The word is: { props.word }</h1>
                </div>
            )
        }else{
            return(
                <div>
                    <h1>The number is: { props.word }</h1>
                </div>
            )
        }
    }
}

export default Home;