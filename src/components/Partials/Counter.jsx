import React from "react"

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
        }
        console.log("constructor")
    }

    // componentDidMount() {
    //     this.setState({ count: 0 });
    //     console.log("componentDidMount")
    // }

    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate")
        if (this.state.count === 10) {
            this.setState({ count: 0 });
        }
    }

    render(){
        return (
            <div className="flex items-center">
                <button className="bg-black text-slate-200 p-3" onClick={ () => this.setState({ count: this.state.count - 1 })}>-</button>
                <h1 className="mx-5">{this.state.count}</h1>
                <button className="bg-black text-slate-200 p-3" onClick={ () => this.setState({ count: this.state.count + 1 })}>+</button>
                { console.log("render")}
            </div>
        )
    }
}

export default Counter