import { createSlice } from "@reduxjs/toolkit"; 


const todolist=localStorage.getItem('todo')!==null?JSON.parse(localStorage.getItem('todo')):[];
const todoSlice=createSlice({
    name:"Todo",
    initialState:todolist,
    reducers:{
       addTodo:(state,action)=>{
        state.push(action.payload)
        console.log(action)
        localStorage.setItem('todo',JSON.stringify(state))
       },
       deleteTodo:(state,action)=>{
        const {id}=action.payload;
        const tos=state.find(todo=>todo.id===id);
        if(tos){
            localStorage.setItem('todo',JSON.stringify(state.filter(f=>f.id!==id)))
            return state.filter(f=>f.id!==id)
        }
        
       },
       updateTodo:(state,action)=>{
             const {id,desc}=action.payload;
            const tod=state.find(todo=>todo.id===id);
            console.log("REDUCER PAGE:: ",id)
            if(tod){
                tod.desc=desc;
                // console.log(tod.id)
            }  
            localStorage.setItem('todo',JSON.stringify(state))   
       },
       updateTodoNext:(state,action)=>{
             const {id,location,PtypeInd,PtypeGrp,eventOffline,eventOnline,hybrid,judging,likes,memMax,memMin,privateMode}=action.payload;
            const tod=state.find(todo=>todo.id===id);
            console.log("REDUCER PAGE NEXT: ",id)
            if(tod){
                tod.location=location;
                tod.PtypeInd=PtypeInd;
                tod.PtypeGrp=PtypeGrp;
                tod.eventOffline=eventOffline;
                tod.eventOnline=eventOnline;
                tod.hybrid=hybrid;
                tod.judging=judging;
                tod.likes=likes;
                tod.memMax=memMax;
                tod.memMin=memMin;
                tod.private=privateMode;
                // console.log(tod.id)
            }  
            localStorage.setItem('todo',JSON.stringify(state))   
       },
       markedTodo:(state,action)=>{
        const {id,mark}=action.payload;
        const tod=state.find(todo=>todo.id===id);
        if(tod){
            tod.mark=!mark;

        }
    //    state.map(todo =>(todo.id === id)  ? {...todo, mark: !mark}: todo)

        console.log(action)
        localStorage.setItem('todo',JSON.stringify(state))
       }
    }
})
export const {addTodo,deleteTodo,updateTodo, markedTodo,updateTodoNext}=todoSlice.actions;
export default todoSlice.reducer;