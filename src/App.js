import React from "react";
// import DatePicker from "./components/DatePicker";
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
// import { DatePicker } from 'rsuite';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css'
import Switch from '@mui/material/Switch';
// import { FileUploader } from "react-drag-drop-files";
import { Upload } from "./components/Upload";
import { useDispatch, useSelector } from 'react-redux';
import { addTodo,updateTodo,updateTodoNext} from './Reducers/todoReducer';
// const fileTypes = ["JPG", "PNG", "GIF"];
function App() {


  const [openpop,setOpenpop]=React.useState(false);
  const [popnext,setPopnext]=React.useState(false);
  const [filesClose,setFilesClose]=React.useState(false)
  const [BannerFilesClose,setBannerFilesClose]=React.useState(false)
  // const [file, setFile] = React.useState(null);

  //all the content in one state
  const [value, onChange] = React.useState(new Date());
  const [evalue, eonChange] = React.useState(new Date());

  const [checked, setChecked] = React.useState(true);
  const [isActivePop,setIsActivePop]=React.useState(false)
  const [isActivePopGrp,setIsActivePopGrp]=React.useState(false)

  const [title,setTitle]=React.useState();
  const [desc,setDesc]=React.useState();
  const [etype,setEType]=React.useState();
  const [likes,setLikes]=React.useState(false);
  const [judging,setJudging]=React.useState(true);
  const [hybrid,setHybrid]=React.useState(false);
  const [loc,setLoc]=React.useState();
  const [memMin,setMemMin]=React.useState();
  const [memMax,setMemMax]=React.useState();
  const [isActiveOnline,setIsActiveOnline]=React.useState(false);
  const [isActiveOffline,setIsActiveOffline]=React.useState(true);


  console.log("Title: ",title, " Description: ",desc," event Online: ",isActiveOnline," event Offline: ",isActiveOffline," likes: ",likes," hybrid: ",hybrid," judging: ",judging," location: ",loc," startTime:",value," endTime:",evalue)
  const handleEventType=(e)=>{
    setEType(e.target.value)
  }
  console.log("EVENT TYPE: ",etype, " EventTypeIndividual: ",isActivePop," EventTypeGrp: ",isActivePopGrp)
  console.log(" memMin: ",memMin," memMax: ",memMax," Private: ",checked)
  const handleLikes=()=>{
    setLikes(true);
    setHybrid(false);
    setJudging(false);
  }
  const handleJudging=()=>{
    setLikes(false);
    setHybrid(false);
    setJudging(true);
  }
  const handleHybrid=()=>{
    setLikes(false);
    setHybrid(true);
    setJudging(false);
  }
  const handleOffline=()=>{
    setIsActiveOnline(false);
    setIsActiveOffline(true);
  }
  const handleOnline=()=>{
    setIsActiveOnline(true);
    setIsActiveOffline(false);
  }
  // const handleChangeFiles = (file) => {
  //   setFile(file);
  // };
  const handleIndividual=()=>{
    setIsActivePop(true);
    setIsActivePopGrp(false);
  }
  const handleGroup=()=>{
    setIsActivePop(false);
    setIsActivePopGrp(true);
  }

  const handlenext=()=>{
    setPopnext(true)
    setOpenpop(false);
  }
  const handleBack=()=>{
    setPopnext(false);
    setOpenpop(true);
  }
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };


  //final dispatch
  const dispatch=useDispatch();
  const todo=useSelector((state)=>state.todo);

 

  const [pageNav,setPageNav]=React.useState(true);
  const [pageId,setPageId]=React.useState();
  const[content,setContent]=React.useState();

  console.log("CONTENT: ",content)
  

  const contentID=pageId;
  const existingTodo=todo.filter(f=>f.id===contentID);

  //1st box edit
  const [Cdesc,setCDesc]=React.useState();
  //2nd box edit
  const [Cloc,setCloc]=React.useState();
  const [CtypeInd,setCtypeInd]=React.useState();
  const [CtypeGrp,setCtypeGrp]=React.useState();
  const [Cjudging,setCjudging]=React.useState();
  const [Clikes,setClikes]=React.useState();
  const [Chybrid,setChybrid]=React.useState();
  const [COnline,setCOnline]=React.useState();
  const [COffline,setCOffline]=React.useState();
  const [CMin,setCMin]=React.useState();
  const [CMax,setCMax]=React.useState();
  const [CPrivate,setCPrivate]=React.useState();

  const desctodo=existingTodo[0]?.desc;
  // const [newdesc,setNewDesc]=React.useState(Cdesc);
  console.log("set desc",Cdesc)
  const handleEdit=()=>{
     dispatch(updateTodo({
        id:contentID,
        desc:Cdesc
     }))
     setContent({desc:desctodo})
  }

  const handleEditnext=()=>{
    dispatch(updateTodoNext({
      id:contentID,
      location:Cloc,
      PtypeInd:CtypeInd,
      PtypeGrp:CtypeGrp,
      hybrid:Chybrid,
      likes:Clikes,
      judging:Cjudging,
      eventOffline:COffline,
      eventOnline:COnline,
      memMin:memMin,
      memMax:memMax,
      privateMode:CPrivate,
    }))
  }
  const handleSubmit=(event)=>{
    const newid=~~(Math.random()*999);
    dispatch(addTodo({id:newid,title:title,desc:desc,eventOnline:isActiveOnline,eventOffline:isActiveOffline,eventType:etype,PtypeInd:isActivePop,PtypeGrp:isActivePopGrp,memMin:memMin,memMax:memMax,SDate:value,EDate:evalue,likes:likes,judging:judging,hybrid:hybrid,location:loc,private:checked}))
    // setOpen(false);
    setOpenpop(false)
    setPopnext(false)
    setPageNav(false)
    setCDesc(desc);
    setCtypeInd(isActivePop)
    setCtypeGrp(isActivePopGrp)
    setCjudging(judging)
    setClikes(likes)
    setChybrid(hybrid)
    setCOffline(isActiveOffline)
    setCOnline(isActiveOnline)
    setCMin(memMin)
    setCMax(memMax)
    setCPrivate(checked)
    setCloc(loc)

    setContent({id:newid,
      title:title,desc:desc,
      eventOnline:isActiveOnline,
      eventOffline:isActiveOffline,
      eventType:etype,PtypeInd:isActivePop,
      PtypeGrp:isActivePopGrp,memMin:memMin,
      memMax:memMax,SDate:value,EDate:evalue,
      likes:likes,judging:judging,hybrid:hybrid,
      location:loc,private:checked})
  }
  
  return (
    <>
      <div className="flex">
        <div className="flex bg-blue-50 h-[100vh] flex-col border-r-2 border-slate-200 justify-between" style={{position:"fixed",zIndex:100,top: 0 ,left: 0,overflowX: "hidden"}}>
          <div className="">
            <div className="text-3xl pl-16 uppercase mb-4 bg-white px-10 font-medium py-5">Skia</div>
            <div className="text-lg px-10 flex flex-col gap-6 font-medium text-slate-500">
              <div className="flex gap-2"><img src="Home.png" style={{height:"1.5rem"}} alt="home"/><div>Home</div></div>
              <div className="flex gap-2"><img src="Chield.png" style={{height:"1.5rem"}} alt="home"/><div>Clubs</div></div>
              <div className="text-black flex gap-2"><img src="Date_range.png" style={{height:"1.5rem"}} alt="home"/><div>Events</div></div>
              <div className="flex gap-2"><img src="Waterfall.png" style={{height:"1.5rem"}} alt="home"/><div>Analytics</div></div>
            </div>
          </div>
          <div className="text-sm px-10 flex flex-col my-4 gap-2 text-slate-600">
            <div className="whitespace-nowrap flex gap-2"><img src="info.png" style={{height:"1rem"}} alt="home"/><div>Help & Information</div></div>
            <div className="flex gap-2"><img src="remove.png" style={{height:"1rem"}} alt="home"/><div>Logout</div></div>
          </div>
        </div>
        <div className="flex px-[14rem] mt-[4.7rem]  bg-blue-50">
         { pageNav?<div  className="flex flex-col min-h-[78vh] 2xl:w-[70rem] xl:w-[60rem] md:w-[50rem]  mx-10 my-10 rounded-md bg-white">
            <div className="flex flex-wrap px-10 pt-5 justify-between">
              <div className="text-3xl font-semibold">Events</div>
              <div className="flex flex-wrap gap-4">
                <input className="transparent rounded-md border border-black px-10 sm:w-[40vh] md:w-[60vh] py-2 " placeholder="search.."/>
                <button onClick={()=>setOpenpop(true)} className="px-6 py-2 bg-blue-600 rounded-full text-white font-semibold hover:bg-blue-500">Add new</button>
              </div>
            </div>
           { todo.map((t,index)=><div key={index} onClick={()=>{
            setPageNav(false)
            setPageId(t.id)
            setCDesc(t.desc)

            setCloc(t.location)
            setCtypeInd(t.PtypeInd)
            setCtypeGrp(t.PtypeGrp)
            setClikes(t.likes)
            setChybrid(t.hybrid)
            setCOnline(t.eventOnline)
            setCOffline(t.eventOffline)
            setCMin(t.memMin)
            setCMax(t.memMax)
            setCPrivate(t.private)
            
            setContent({id:t.id,title:t.title,desc:t.desc,eventOnline:t.eventOnline,eventOffline:t.eventOffline,eventType:t.eventType,PtypeInd:t.PtypeInd,PtypeGrp:t.PtypeGrp,memMin:t.memMin,memMax:t.memMax,SDate:t.SDate,EDate:t.EDate,likes:t.likes,judging:t.judging,hybrid:t.hybrid,location:t.location,private:t.private})
            }} className="px-10 cursor-pointer mx-10 mt-6 py-5 rounded-md border border-black flex  justify-between">
              <div className="flex gap-5">
                <img src="hakathon.png"  alt="desc" />
              <div className="flex flex-col whitespace-nowrap justify-around">
               <div className="text-2xl">{t.title}</div>
               <div className="text-lg">Synolo</div>
               <div><button className="flex bg-blue-200 justify-center px-4 rounded-sm text-blue-500">Ongoing</button></div>
              </div>
              </div>
              <div className="flex">
              <div className="flex flex-col gap-4 py-3 whitespace-nowrap justify-end">
                <div className="flex gap-2"><div className="text-black text-xl flex"><img src="rupees.png" alt="paisa"/>30,000 </div><span className="text-sm mt-1">in prizes</span></div>
                <div className="flex gap-2"><div className="text-black text-xl flex gap-2"><img src="blackpeople.png" className="mt-1" style={{height:"1.4rem"}} alt="paisa"/>256 </div><span className="text-sm mt-1">registered</span></div>
              </div>
              <div className="flex justify-around flex-col mx-5 border-l-2 border-slate-200 whitespace-nowrap px-5">
                <div className="flex gap-1"><img src="lable_duotone.png" alt="event"/><div className="mt-2 capitalize">{t.eventType}</div></div>
                <div className="flex gap-3"><img style={{height:"1.3rem"}} src="locationblack.png" alt="event"/><div className=" capitalize">{t.location}</div></div>
                <div className="flex gap-3"><img style={{height:"1.4rem"}}src="Date_today_duotone_line.png" alt="event"/><div className="capitalize">04-12-2022</div></div>
              </div>
              </div>
              
            </div>)}
          </div>:
          <div className="flex flex-col mx-10 my-10 rounded-md bg-white">
            <div className="relative"> 
            <img src="banner.png" className="rounded-md" alt="banner"/>
            <div className="absolute top-2 left-2"><button onClick={()=>setPageNav(true)} className="px-2 text-white text-xl">&larr;</button></div>
            </div>
            <div className="m-5 mr-20">
              <div className="text-2xl font-medium">{content?.title}</div>
              <div className="flex gap-10 mt-5 border-b border-black">
                <div>Overview</div>
                <div>Evaluation</div>
                <div>Rewards</div>
                <div>Timeline</div>
              </div>
              <div className="mt-8 flex flex-col gap-5">
                <div>
                  <div className="text-xl mb-3">Description</div>
                  <div className="px-10 py-4 flex  border rounded-md shadow-lg border-slate-400">
                    <div className="flex w-full">
                    <textarea defaultValue={Cdesc} onChange={(e)=>setCDesc(e.target.value)} className="w-full border-0 pb-20 overflow-hidden" style={{resize:"none"}}>
                    </textarea>
                    </div>
                   
                    <div className="flex flex-col justify-end">
                    <button onClick={handleEdit} className="bg-orange-600 hover:bg-orange-500 px-12 text-white text-sm rounded-md py-2">Edit</button>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-xl mb-3">Details</div>
                  <div style={{width:"100%"}} className="px-10 py-4 flex flex-nowrap gap-4 justify-between border rounded-md shadow-lg border-slate-400">
                   <div style={{width: "fitContent"}} className="flex flex-col gap-6">
                   <div className="flex justify-between gap-3">
                     <div className="font-medium">Location</div>
                      <input value={Cloc} onChange={(e)=>setCloc(e.target.value)}  type="text" placeholder="Enter event location" className="py-2 rounded-md p-10 border border-slate-500 text-slate-500"/>
                  </div>
                  
                  <div className="flex justify-between gap-3">
                    <div className="font-medium whitespace-wrap">Participation type</div>
                    <div className="flex gap-2">
                    <button onClick={()=>{
                         setCtypeInd(true)
                         setCtypeGrp(false)
                      }} className={`[&.active]:bg-blue-400 gap-2  [&.active]:text-white ${CtypeInd?'active':''} px-14 py-2 rounded-md border border-slate-500 text-slate-500 flex relative`}>
            <div className={`[&.active]:bg-white [&.kimchi]:bg-blue-400 ${CtypeInd?'active':'kimchi'} absolute left-2 flex rounded-md px-2 py-1`}>
              {CtypeInd?<img style={{height:"1rem"}} src="personblue.png" alt="offline"/>:<img style={{height:"1rem"}} src="personwhite.png" alt="offline"/>}
              </div>
              <div className="">Individual</div>
            </button>
                    <button onClick={()=>{
                         setCtypeInd(false)
                         setCtypeGrp(true)
                      }} className={`[&.active]:bg-blue-400 gap-2  [&.active]:text-white ${CtypeGrp?'active':''} px-14 py-2 rounded-md border border-slate-500 text-slate-500 flex relative`}>
            <div className={`[&.active]:bg-white [&.kimchi]:bg-blue-400 ${CtypeGrp?'active':'kimchi'} absolute left-2 flex rounded-md px-2 py-1`}>
              {CtypeGrp?<img style={{height:"1rem"}} src="groupblue.png" alt="offline"/>:<img style={{height:"1rem"}} src="groupwhite.png" alt="offline"/>}
              </div>
              <div className="">Group</div>
            </button>
                      {/* <button onClick={()=>{
                         setCtypeInd(true)
                         setCtypeGrp(false)
                      }}  className={`[&.active]:bg-blue-400 pr-20 [&.active]:text-white ${CtypeInd?'active':''} px-5 py-2 rounded-md border border-slate-500 text-slate-500`}>Individual</button> */}
                      {/* <button onClick={()=>{
                         setCtypeInd(false)
                         setCtypeGrp(true)
                      }} className={`[&.active]:bg-blue-400 pr-20 [&.active]:text-white ${CtypeGrp?'active':''} px-5 py-2 rounded-md border border-slate-500 text-slate-500`}>Group</button> */}
                    </div>
                    </div>
                    <div className="flex justify-between gap-3">
                  <div className="font-medium whitespace-wrap">Judging mode</div>
                  <div className="flex gap-2">
                  <button onClick={()=>{
                       setClikes(true)
                       setChybrid(false)
                       setCjudging(false)
                     }}  
                      className={`[&.active]:bg-blue-400  gap-2 pr-20 [&.active]:text-white ${Clikes?'active':''} px-20 py-2 rounded-md border border-slate-500 text-slate-500 flex relative`}>
             <div className={`[&.active]:bg-white [&.kimchi]:bg-blue-400 ${Clikes?'active':'kimchi'} absolute left-2 flex rounded-md px-2 py-1`}>
              {Clikes?<img style={{height:"1rem"}} src="heartblue.png" alt="offline"/>:<img style={{height:"1rem"}} src="heartwhite.png" alt="offline"/>}
              </div>
              <div className="absolute left-12">Likes</div>
              </button>
                  <button onClick={()=>{
                       setClikes(false)
                       setChybrid(false)
                       setCjudging(true)
                    }} 
                      className={`[&.active]:bg-blue-400  gap-2 pr-20 [&.active]:text-white ${Cjudging?'active':''} px-20 py-2 rounded-md border border-slate-500 text-slate-500 flex relative`}>
             <div className={`[&.active]:bg-white [&.kimchi]:bg-blue-400 ${Cjudging?'active':'kimchi'} absolute left-2 flex rounded-md px-2 py-1`}>
              {Cjudging?<img style={{height:"1rem"}} src="gavelblue.png" alt="offline"/>:<img style={{height:"1rem"}} src="gavelwhite.png" alt="offline"/>}
              </div>
              <div className="absolute left-12">Judging</div>
              </button>
                  <button onClick={()=>{
                      setClikes(false)
                      setChybrid(true)
                      setCjudging(false)
                    }} 
                      className={`[&.active]:bg-blue-400  gap-2 pr-20 [&.active]:text-white ${Chybrid?'active':''} px-20 py-2 rounded-md border border-slate-500 text-slate-500 flex relative`}>
             <div className={`[&.active]:bg-white [&.kimchi]:bg-blue-400 ${Chybrid?'active':'kimchi'} absolute left-2 flex rounded-md px-2 py-1`}>
              {Chybrid?<img style={{height:"1rem"}} src="groupblue.png" alt="offline"/>:<img style={{height:"1rem"}} src="groupwhite.png" alt="offline"/>}
              </div>
              <div className="absolute left-12">Hybrid</div>
              </button>
                    {/* <button 
                     onClick={()=>{
                       setClikes(true)
                       setChybrid(false)
                       setCjudging(false)
                     }}
                     className={`[&.active]:bg-blue-400 pr-20 [&.active]:text-white ${Clikes?'active':''} px-5 py-2 rounded-md border border-slate-500 text-slate-500`}>Likes</button> */}
                    {/* <button onClick={()=>{
                       setClikes(false)
                       setChybrid(false)
                       setCjudging(true)
                    }}
                     className={`[&.active]:bg-blue-400 pr-20 [&.active]:text-white ${Cjudging?'active':''} px-5 py-2 rounded-md border border-slate-500 text-slate-500`}>Judging</button> */}
                    {/* <button onClick={()=>{
                      setClikes(false)
                      setChybrid(true)
                      setCjudging(false)
                    }} className={`[&.active]:bg-blue-400 pr-20 [&.active]:text-white ${Chybrid?'active':''} px-5 py-2 rounded-md border border-slate-500 text-slate-500`}>Hybrid</button> */}
                  </div>
                  </div>
                   </div>
                   <div style={{width: "fitContent"}} className="flex gap-6 flex-col">
                    <div className="flex flex-col gap-8">
                    <div className="flex justify-between gap-3">
                      <div className="font-medium">Event Mode</div>
                      <div className="flex gap-4">
                      <button onClick={()=>{
                           setCOffline(true)
                           setCOnline(false)
                      } }  
                      className={`[&.active]:bg-blue-400  gap-2 pr-20 [&.active]:text-white ${COffline?'active':''} px-20 py-2 rounded-md border border-slate-500 text-slate-500 flex relative`}>
             <div className={`[&.active]:bg-white [&.kimchi]:bg-blue-400 ${COffline?'active':'kimchi'} absolute left-2 flex rounded-md px-2 py-1`}>
              {COffline?<img style={{height:"1rem"}} src="locationblue.png" alt="offline"/>:<img style={{height:"1rem"}} src="locationwhite.png" alt="offline"/>}
              </div>
              <div className="absolute left-12">offline</div>
              </button>
                      <button onClick={()=>{
                          setCOffline(false)
                          setCOnline(true)
                      }} 
                      className={`[&.active]:bg-blue-400  gap-2 pr-20 [&.active]:text-white ${COnline?'active':''} px-20 py-2 rounded-md border border-slate-500 text-slate-500 flex relative`}>
             <div className={`[&.active]:bg-white [&.kimchi]:bg-blue-400 ${COnline?'active':'kimchi'} absolute left-2 flex rounded-md px-2 py-1`}>
              {COnline?<img style={{height:"1rem"}} src="worldwideblue.png" alt="offline"/>:<img style={{height:"1rem"}} src="Vector.png" alt="offline"/>}
              </div>
              <div className="absolute left-12">online</div>
              </button>
                      {/* <button onClick={()=>{
                           setCOffline(true)
                           setCOnline(false)
                      } } className={`[&.active]:bg-blue-400 pr-20 [&.active]:text-white ${COffline?'active':''} px-5 py-2 rounded-md border border-slate-500 text-slate-500`}>offline</button> */}
                      {/* <button onClick={()=>{
                          setCOffline(false)
                          setCOnline(true)
                      }} className={`[&.active]:bg-blue-400 pr-20 [&.active]:text-white ${COnline?'active':''} px-5 py-2 rounded-md border border-slate-500 text-slate-500`}>online</button> */}
                      </div>
                    </div>
                    {CtypeGrp && <div className="flex justify-between gap-3">
                    <div className="font-medium">Members</div>
                    <div className="flex">
                      <input value={CMin} onChange={(e)=>setCMin(e.target.value)} placeholder=" &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; min" type="text" className="py-1 w-[7rem] rounded-l-md pl-3 border border-slate-500 text-slate-500"/>
                      <input value={CMax} onChange={(e)=>setCMax(e.target.value)} placeholder=" &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; max" type="text" className="py-1 w-[7rem] rounded-r-md pl-3 border border-slate-500 text-slate-500"/>
                    </div>
                    </div>}
                    <div className="flex gap-3">
                      <div className="font-medium">Private</div>
                      <Switch
                      checked={CPrivate}
                      onChange={(e)=>setCPrivate(e.target.checked)}
                      inputProps={{ 'aria-label': 'controlled' }}
                    />
                  </div>
                
                    </div>
                   <div className="flex justify-end">
                    <button onClick={handleEditnext} style={{width:"2rem"}} className="bg-orange-600 flex justify-center hover:bg-orange-500 px-12 text-white text-sm rounded-md py-2">Edit</button>
                    </div>
                   </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>}
        </div>
      </div>
      {/* popup */}
     { openpop && <div style={{ backgroundColor: "rgba(0,0,0,0.5)", position: "fixed",height: "100%", width: "100%", top: 0,left: 0, display: "flex" ,alignItems: "center",justifyContent: "center",overflow: "auto",zIndex: 99999}}>
      <div className="bg-white p-10 flex flex-col gap-5 rounded-md" >
        <div className="flex flex-col w-full">
          <div className="font-medium">Event Title</div>
          <input type="text" onChange={(e)=>setTitle(e.target.value)} className="transparent rounded-md border border-slate-500 px-5  py-2 "/>
        </div>
        <div className="flex flex-col">
          <div className="font-medium">Description</div>
          <textarea onChange={(e)=>setDesc(e.target.value)} style={{resize:"none",height:"20vh"}} className="transparent  rounded-md border border-slate-500 px-5 py-2 "/>
        </div>
        <div className="flex justify-between gap-3">
          <div className="font-medium">Upload Image</div>
          <div>
            <label className="flex whitespace-nowrap flex-col px-2 py-2 bg-white rounded-lg border border-slate-500 text-4xl cursor-pointer">
                <span onClick={()=>setFilesClose(true)} className="px-20 flex text-slate-500 font-regular text-base leading-normal"><div>Upload Files</div><img src="Upload_light.png"  className="mt-1" alt="banner" /></span>
            </label>
          </div>
        </div>
        <div className="flex justify-between gap-3">
          <div className="font-medium">Upload Banner Image</div>
          <div>
            <label className="flex whitespace-nowrap flex-col px-2 py-2 bg-white rounded-lg border border-slate-500 text-4xl cursor-pointer">
                <span onClick={()=>setBannerFilesClose(true)} className="px-20 flex text-slate-500 font-regular text-base leading-normal"><div>Upload Files</div><img src="Upload_light.png"  className="mt-1" alt="banner" /></span>
            </label>

          </div>
        </div>
        <div className="flex justify-between gap-3">
          <div className="font-medium">Event Mode</div>
          <div className="flex gap-4">
            <button onClick={handleOffline}  className={`[&.active]:bg-blue-400  gap-2 pr-20 [&.active]:text-white ${isActiveOffline?'active':''} px-20 py-2 rounded-md border border-slate-500 text-slate-500 flex relative`}>
             <div className={`[&.active]:bg-white [&.kimchi]:bg-blue-400 ${isActiveOffline?'active':'kimchi'} absolute left-2 flex rounded-md px-2 py-1`}>
              {isActiveOffline?<img style={{height:"1rem"}} src="locationblue.png" alt="offline"/>:<img style={{height:"1rem"}} src="locationwhite.png" alt="offline"/>}
              </div>
              <div className="absolute left-12">offline</div>
              </button>
            <button onClick={handleOnline} className={`[&.active]:bg-blue-400 gap-2 pr-20 [&.active]:text-white ${isActiveOnline?'active':''} px-14 py-2 rounded-md border border-slate-500 text-slate-500 flex relative`}>
            <div className={`[&.active]:bg-white [&.kimchi]:bg-blue-400 ${isActiveOnline?'active':'kimchi'} absolute left-2 flex rounded-md px-2 py-1`}>
              {isActiveOnline?<img style={{height:"1rem"}} src="worldwideblue.png" alt="offline"/>:<img style={{height:"1rem"}} src="vector.png" alt="offline"/>}
              </div>
              <div className="">online</div>
            </button>
          </div>
        </div>
        <div className="flex justify-between gap-3">
          <div className="font-medium">Event Type</div>
          <div>
          <select onChange={handleEventType} className="px-14 py-2 rounded-md border border-slate-500 text-slate-500 mr-20" id = "dropdown">
            <option  value="option">Select event type</option>
            <option value="hackathon">Hackathon</option>
            <option value="codeathon">Codeathon</option>
          </select>
          </div>
        </div>
         <div className="flex mt-10 justify-around">
           <button onClick={()=>setOpenpop(false)} className="px-10 border border-blue-400  rounded-md py-1">Cancel</button>
           <button onClick={handlenext} className="bg-blue-500 px-10 rounded-md py-1 text-white ">Next &rarr;</button>
         </div>
      </div>
      {filesClose && <div key={1} style={{ backgroundColor: "rgba(0,0,0,0.5)", position: "fixed",height: "100%", width: "100%", top: 0,left: 0, display: "flex" ,alignItems: "center",justifyContent: "center",overflow: "auto",zIndex: 99999}}>
              <Upload
              title="Upload Image"
            onDrop={files => {
              console.log(files);
            }}
            filesClose={setFilesClose}
           />
           </div>
           }
      {BannerFilesClose && <div key={2} style={{ backgroundColor: "rgba(0,0,0,0.5)", position: "fixed",height: "100%", width: "100%", top: 0,left: 0, display: "flex" ,alignItems: "center",justifyContent: "center",overflow: "auto",zIndex: 99999}}>
              <Upload
              title="Upload Image"
            onDrop={files => {
              console.log(files);
            }}
            filesClose={setBannerFilesClose}
           />
      </div>}
      </div>}
     { popnext && <div style={{ backgroundColor: "rgba(0,0,0,0.5)", position: "fixed",height: "100%", width: "100%", top: 0,left: 0, display: "flex" ,alignItems: "center",justifyContent: "center",overflow: "auto",zIndex: 99999}}>
      <div className="bg-white p-10 flex flex-col gap-5 rounded-md" >
        <div className="flex justify-between gap-3">
          <div className="font-medium whitespace-wrap">Participation type</div>
          <div className="flex gap-2">
              <button onClick={handleIndividual} className={`[&.active]:bg-blue-400 gap-2  [&.active]:text-white ${isActivePop?'active':''} px-14 py-2 rounded-md border border-slate-500 text-slate-500 flex relative`}>
            <div className={`[&.active]:bg-white [&.kimchi]:bg-blue-400 ${isActivePop?'active':'kimchi'} absolute left-2 flex rounded-md px-2 py-1`}>
              {isActivePop?<img style={{height:"1rem"}} src="personblue.png" alt="offline"/>:<img style={{height:"1rem"}} src="personwhite.png" alt="offline"/>}
              </div>
              <div className="">Individual</div>
            </button>
              <button onClick={handleGroup} className={`[&.active]:bg-blue-400 gap-2  [&.active]:text-white ${isActivePopGrp?'active':''} px-14 py-2 rounded-md border border-slate-500 text-slate-500 flex relative`}>
            <div className={`[&.active]:bg-white [&.kimchi]:bg-blue-400 ${isActivePopGrp?'active':'kimchi'} absolute left-2 flex rounded-md px-2 py-1`}>
              {isActivePopGrp?<img style={{height:"1rem"}} src="groupblue.png" alt="offline"/>:<img style={{height:"1rem"}} src="groupwhite.png" alt="offline"/>}
              </div>
              <div className="">Group</div>
            </button>
            {/* <button onClick={handleGroup}  className={`[&.active]:bg-blue-400 pr-20 [&.active]:text-white  ${isActivePopGrp?'active':''} px-5 py-2 rounded-md border border-slate-500 text-slate-500`}>Group</button> */}
          </div>
        </div>
        {isActivePopGrp && <div className="flex justify-between gap-3">
          <div className="font-medium">Members</div>
          <div className="flex">
            <input onChange={(e)=>setMemMin(e.target.value)} placeholder=" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; min"  type="text" className="py-1 pl-3 border rounded-l-md border-slate-500 text-slate-500"/>
            <input onChange={(e)=>setMemMax(e.target.value)}  placeholder=" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;max" type="text" className="py-1  pl-3 border rounded-r-md border-slate-500 text-slate-500"/>
          </div>
        </div>}
        <div className="flex justify-between gap-3">
          <div className="font-medium">Start Date and time</div>
          <Datetime  onChange={onChange} value={value} className='w-60 appearance-none shadow border rounded py-3 px-2 text-gray-darker'/>
        </div>
        <div className="flex justify-between gap-3">
          <div className="font-medium">End Date and time</div>
          <Datetime  onChange={eonChange} value={evalue} className='w-60 appearance-none shadow border rounded py-3 px-2 text-gray-darker'/>
        
         </div>
        <div className="flex justify-between gap-3">
          <div className="font-medium whitespace-wrap">Judging mode</div>
          <div className="flex gap-2">
          <button onClick={handleLikes} className={`[&.active]:bg-blue-400 gap-2  [&.active]:text-white ${likes?'active':''}  py-2 rounded-md border border-slate-500 text-slate-500 flex relative`}>
            <div className={`[&.active]:bg-white [&.kimchi]:bg-blue-400 ${likes?'active':'kimchi'} absolute left-2 flex rounded-md px-2 py-1`}>
              {likes?<img style={{height:"1rem"}} src="heartblue.png" alt="offline"/>:<img style={{height:"1rem"}} src="heartwhite.png" alt="offline"/>}
              </div>
              <div className="ml-12 mr-4">Likes</div>
            </button>
          <button onClick={handleJudging} className={`[&.active]:bg-blue-400 gap-2  [&.active]:text-white ${judging?'active':''}  py-2 rounded-md border border-slate-500 text-slate-500 flex relative`}>
            <div className={`[&.active]:bg-white [&.kimchi]:bg-blue-400 ${judging?'active':'kimchi'} absolute left-2 flex rounded-md px-2 py-1`}>
              {judging?<img style={{height:"1rem"}} src="gavelblue.png" alt="offline"/>:<img style={{height:"1rem"}} src="gavelwhite.png" alt="offline"/>}
              </div>
              <div className="ml-12 mr-4">Judging</div>
            </button>
          <button onClick={handleHybrid} className={`[&.active]:bg-blue-400 gap-2  [&.active]:text-white ${hybrid?'active':''}  py-2 rounded-md border border-slate-500 text-slate-500 flex relative`}>
            <div className={`[&.active]:bg-white [&.kimchi]:bg-blue-400 ${hybrid?'active':'kimchi'} absolute left-2 flex rounded-md px-2 py-1`}>
              {hybrid?<img style={{height:"1rem"}} src="groupblue.png" alt="offline"/>:<img style={{height:"1rem"}} src="groupwhite.png" alt="offline"/>}
              </div>
              <div className="ml-12 mr-4">Hybrid</div>
            </button>
            {/* <button onClick={handleLikes} className={`[&.active]:bg-blue-400  [&.active]:text-white ${likes?'active':''} px-5 py-2 rounded-md border border-slate-500 text-slate-500`}>Likes</button> */}
            {/* <button onClick={handleJudging} className={`[&.active]:bg-blue-400  [&.active]:text-white ${judging?'active':''} px-5 py-2 rounded-md border border-slate-500 text-slate-500`}>Judging</button> */}
            {/* <button onClick={handleHybrid} className={`[&.active]:bg-blue-400  [&.active]:text-white ${hybrid?'active':''} px-5 py-2 rounded-md border border-slate-500 text-slate-500`}>Hybrid</button> */}
          </div>
        </div>
        <div className="flex justify-between gap-3">
          <div className="font-medium flex pr-16">Location</div>
            <input onChange={(e)=>setLoc(e.target.value)} type="text" placeholder="Enter event location" className="py-2 w-full rounded-md p-10 border border-slate-500 text-slate-500"/>
        </div>
        <div className="flex gap-3">
          <div className="font-medium">Private</div>

          <Switch
          checked={checked}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
         />
        </div>
         <div className="flex mt-10 justify-around">
           <button onClick={handleBack} className="px-10 border border-blue-400  rounded-md py-1">&larr; Back</button>
           <button onClick={handleSubmit} className="bg-blue-500 px-10 rounded-md py-1 text-white">Proceed</button>
         </div>
         
      </div>
      </div>}
      
    </>
  );
}

export default App;
