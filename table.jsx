import React, { Component } from 'react'

export default class table extends Component {
    constructor(props){
        super(props);
        this.state={
            name: '',
            surname:'',
            data:[
                {id: 1, name: 'Vohidjon', surname: 'To`lqinov', },
                {id: 2, name: 'Samandar', surname: 'Shukurov', },
                {id: 3, name: 'Shoxrux', surname: 'Bosimova', },
                {id: 4, name: 'Sardor', surname: 'Akramov', },
            ]
        }
    }
    render() {
        const onDelete=(id)=>{
            console.log('delete', id);
            const newData =this.state.data.filter((value)=>value.id !==id);
            this.setState({data: newData})
        }
        const onAdd=()=>{
            console.log(this.state.name, this.state.surname);
            const newData=[ ...this.state.data, {id: this.state.data.length+1, name: this.state.name, surname: this.state.surname }]
            this.setState({data: newData})
        }
        const onChangeName=(e)=>{
            this.setState({name: e.target.value})
        }
        const onChangeSurname=(e)=>{
            this.setState({surname: e.target.value})
        }
        const sort=(e)=>{
             const newData=this.state.data.sort((a,b)=> a.name.localeCompare(b.name))
             this.setState({name: e.target.value })
        }
        return (
            <div>
                <input onChange={onChangeName} placeholder='Name' type="text" />
                <input onChange={onChangeSurname} placeholder='Surname' type="text" />
                <button onClick={onAdd}>add</button>
                
                <table border='1' style={{borderCollapse:'collapse'}}>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.data.map((value)=>{
                            return(
                                
                                <tr key={value.id}>
                                <td>{value.id}</td>
                                <td>{value.name}</td>
                                <td>{value.surname}</td>
                                <td><button onClick={()=>onDelete(value.id)}>delete</button></td>
                                <td><button onClick={sort} >Sort</button></td>
                            </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}
