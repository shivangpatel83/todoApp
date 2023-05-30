import {useSelector , useDispatch} from "react-redux";
import {useState, useEffect, useRef} from "react";
import {deleteTodo, removeTodo, setTodo, updateTodo} from "./redux/Actions/actions";
import {setBalooBhai, setBitter, setLobster, setSatisfy} from "./redux/Actions/textAction";

export const TodoContainer=()=>{
    const inputRef = useRef()
    const updateRef = useRef()
    const dispatch = useDispatch()
    const dataSet = useSelector(state => state.todoReducer.list)
    const changeText = useSelector(state => state.textReducer)
    // useEffect(()=>{return
    //     const newText= {fontFamily : changeText}},[changeText]
    // )

    const [input, setInput] = useState('')
    const [initialDataSet, setDataset] = useState(()=>dataSet)
    const [error,setError] = useState('')
    const [updatedValue, setUpdatedValue] = useState('')
    const [enable, setEnable] = useState(true)

    const handleEnable=()=>{
        setEnable(!enable)
    }

    useEffect(()=> {
        inputRef.current.focus()
        setDataset(dataSet)
    },[dataSet])

    const setFocus=()=>{
        updateRef.current.focus()
    }
    const toggleEdit = async (id)=>{
        setEnable(false)
        const updated =  dataSet.map(ele=> ele.id === id ? {...ele, isEditMode: true} : ele)
       await setDataset(updated)
         setFocus()
        const getValue = dataSet.filter(ele=> {
            if(ele.id === id){
                return ele
            }
        })
        setUpdatedValue(getValue[0].data)
    }
    const handleInput=()=>{
        if(!input){
            setError('*Please Fill the Field')
        }
        else {
            dispatch(setTodo(input))
            setInput('')
            setError('')

        }
    }

    const handleUpdate= (id,data)=>{
        if(data){
            setError('')
        dispatch(updateTodo(id,data))
            setEnable(true)
        }
        else{
            setError('*Input Field must be filled.')
        }
    }

    return (
        <div style={{fontFamily: changeText}} >
            <h1>Welcome to The TODO APP</h1>

        <div className="container">
            <div className="title mb-4">
            <div className="btn-group">
                <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Change Text
                </button>
                <ul className="dropdown-menu">
                    <li key='1' className="dropdown-item" onClick={()=>dispatch(setBitter())}>Bitter</li>
                    <li key='2' className="dropdown-item" onClick={()=>dispatch(setSatisfy())}>Satisfy</li>
                    <li key='3' className="dropdown-item" onClick={()=>dispatch(setLobster())}>Lobster</li>
                    <li key='4' className="dropdown-item" onClick={()=>dispatch(setBalooBhai())}>Baloo Bhai 2</li>
                </ul>
            </div>
            </div>
            <div className="input-group mb-4" >
                <input disabled={!enable} type="text" ref={inputRef} className="form-control" placeholder="Add Your Task"
                       aria-label="Recipient's username" aria-describedby="button-addon2" value={input} onChange={(e)=>setInput(e.target.value)}/>
                    <button disabled={!enable} className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleInput}>Add TODO</button>
            </div>
            <p>{error}</p>
            {

                initialDataSet.map((element)=>{ return (
                !element.isEditMode ?
            <div className="showTodo my-3" key={element.id}>
                <div className='entry'>
                    <li>{element.data}</li>
                </div>
                <div className="d-grid gap-2 d-md-block">
                <button className="btn btn-primary mx-2" type="button"  onClick={()=>toggleEdit(element.id)}>EDIT</button>
                <button className="btn btn-danger deleteBtn" type="button" onClick={()=>dispatch(deleteTodo(element.id), setEnable(true))}>DELETE</button>
            </div>
            </div>
                :
                    <div className="input-group mb-4" id='update-group'  key={element.id}>
                        <input type="text" ref={updateRef} className="form-control" placeholder="Add Your Task"
                               aria-label="Recipient's username" aria-describedby="button-addon2" value={updatedValue} onChange={(e)=>setUpdatedValue(e.target.value)}/>
                        <button className="btn btn-outline-primary" type="button" id="button-addon2" onClick={()=>handleUpdate(element.id, updatedValue)}>UPDATE TODO</button>
                    </div>
                )})}
            <div className='text-center'>
            {
                dataSet.length>0?
                    <button className="btn btn-danger deleteBtn mx-2" type="button" onClick={()=>dispatch(removeTodo(), setEnable(true))}>CLEAR ALL</button>
                :''
            }

            </div>

        </div>

        </div>
    )
}