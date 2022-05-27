import React from 'react';
let data =[];
let localData = []
class New extends React.Component{
    constructor(props){
        super()
     console.log('constructor');

        this.state={
            firstName:"",
            lastName:"",
            myList:[]
        }
    }
    changeData(data)
    {

console.log(data.target.name);
this.setState({[data.target.name]:data.target.value})
    } 
    saveData() {
        const {firstName,lastName}=this.state;
          
        data = JSON.parse(localStorage.getItem('mydata'))
        data.push({f_name:firstName,l_name:lastName})
        console.log(data);

        // JSON -> stringify, parse
        localStorage.setItem('mydata', JSON.stringify(data))//all tab
        this.setState({myList:data})
        console.log(localData)
        sessionStorage.setItem('mydata',JSON.stringify(data))
    }
    deleteData(indx)
    {
        data.splice(indx,1)
        this.setState({myList:data})
        
    }
    updateData(e,i)
    {

        this.setState({firstName:e.f_name,lastName:e.l_name})
        data.splice(i,1)
        this.setState({myList:data})

    }
    componentDidMount()
    {
        console.log('component did mount');
    }



    render()
    {
        console.log('render');
       
        data = JSON.parse(localStorage.getItem('mydata'))
     
        return(
           <><input type="text" value={this.state.firstName} onChange={(e) => this.changeData(e)} className="form-control" placeholder="enter first name " name='firstName'></input>
          <input type="text" value={this.state.lastName} onChange={(e) => this.changeData(e)} className="form-control" placeholder="enter last name " name='lastName'></input>
          <div>
              <button onClick={(e)=>this.saveData(e)}>Add</button>
          </div>
{ <ol>
   {
    data &&  data.map((item,index)=>{
         return <li>{index+1}firstName:{item.f_name},lastName:{item.l_name}<button onClick={(e=>{this.deleteData(index)})}>Delete</button><button onClick={(e=>{this.updateData(item,index)})}>update</button></li> 
        
       })
       
   }
</ol> }
          </>
        
           
        )
       
    }
}

export default New;

