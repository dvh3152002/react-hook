import React,{useState,useEffect} from "react";

class CountDown extends React.Component{
    state={
        count:10
    }

    componentDidMount(){
        //Chi 1 lan
        // setTimeout(()=>{

        // },1000)

        //Cu sau 1 interval se render lai
        if (this.myInterval) {
            clearInterval(this.myInterval);
        }
        this.myInterval=setInterval(()=>{
            this.setState({
                count:this.state.count-1
            })
            
        },1000);
    }

    componentDidUpdate(prevProps,prevState){
        if(prevState.count!==this.state.count && this.state.count===0){
            if(this.myInterval){
                clearInterval(this.myInterval);
                this.props.onTimesup();
            }
        }
    }

    render(){
        return(
            <>
                {this.state.count} class
            </>
        )
    }
}

const NewCountDown=(props)=>{
    const [count,setCount]=useState(10);
    useEffect(()=>{
        if(count===0){
            props.onTimesup();
            return;
        }

        let timer=setInterval(()=>{
            setCount(count-1)
        },1000);

        return()=>{
            clearInterval(timer);
        }
    },[count])

    return(
        <div>{count} hooks</div>
    )
}

export {CountDown,NewCountDown};
