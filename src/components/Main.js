// import React from "react";
// // import DatePicker from "./components/DatePicker";
// import Datetime from 'react-datetime';
// import "react-datetime/css/react-datetime.css";
// // import { DatePicker } from 'rsuite';
// import 'react-datetime-picker/dist/DateTimePicker.css';
// import 'react-calendar/dist/Calendar.css';
// import 'react-clock/dist/Clock.css'
// import Switch from '@mui/material/Switch';
// import { FileUploader } from "react-drag-drop-files";
// import { Upload } from "./Upload";
// const fileTypes = ["JPG", "PNG", "GIF"];
// function Main() {


//   const [openpop,setOpenpop]=React.useState(false);
//   const [popnext,setPopnext]=React.useState(false);
//   const [value, onChange] = React.useState(new Date());
//   const [evalue, eonChange] = React.useState(new Date());

//   const [checked, setChecked] = React.useState(true);
//   const [isActivePop,setIsActivePop]=React.useState(false)
//   const [isActivePopGrp,setIsActivePopGrp]=React.useState(false)
//   const [filesClose,setFilesClose]=React.useState(false)
//   const [BannerFilesClose,setBannerFilesClose]=React.useState(false)

//   const [file, setFile] = React.useState(null);
//   const handleChangeFiles = (file) => {
//     setFile(file);
//   };
//   const handleIndividual=()=>{
//     setIsActivePop(true);
//     setIsActivePopGrp(false);
//   }
//   const handleGroup=()=>{
//     setIsActivePop(false);
//     setIsActivePopGrp(true);
//   }

//   const handlenext=()=>{
//     setPopnext(true)
//     setOpenpop(false);
//   }
//   const handleBack=()=>{
//     setPopnext(false);
//     setOpenpop(true);
//   }
//   const handleChange = (event) => {
//     setChecked(event.target.checked);
//   };
//   return (
//     <>
//       <div className="flex h-[100vh]">
//         <div className="flex bg-blue-100 w-[40vh] flex-col border-r-2  border-slate-300  justify-between">
//           <div className="">
//             <div className="text-3xl uppercase mb-4 bg-white px-10 font-semibold py-5">Skia</div>
//             <div className="text-lg px-10 flex flex-col gap-2 font-semibold text-slate-600">
//               <div>Home</div>
//               <div>Clubs</div>
//               <div className="text-black">Events</div>
//               <div>Analytics</div>
//             </div>
//           </div>
//           <div className="text-sm px-10 flex flex-col my-4 gap-2 text-slate-600">
//             <div className="whitespace-nowrap">Help & Information</div>
//             <div>Logout</div>
//           </div>
//         </div>
//         <div className="flex w-full bg-blue-100">
//           <div className="flex flex-col w-full  m-5 mt-24 rounded-md bg-white">
//             <div className="flex flex-wrap px-10 pt-5 justify-between">
//               <div className="text-3xl font-semibold">Events</div>
//               <div className="flex flex-wrap gap-4">
//                 <input className="transparent rounded-md border border-black px-10 sm:w-[40vh] md:w-[60vh] py-2 " placeholder="search.."/>
//                 <button onClick={()=>setOpenpop(true)} className="px-6 py-2 bg-blue-600 rounded-full text-white font-semibold hover:bg-blue-500">Add new</button>
//               </div>
//             </div>
//             <div className="px-10 mx-10 mt-6 py-5 rounded-md border border-black flex  justify-between">
//               <div className="flex gap-5">
//                 <img src="hakathon.png"  alt="desc" />
//               <div className="flex flex-col whitespace-nowrap justify-around">
//                <div className="text-2xl">Stuck in the Sound</div>
//                <div className="text-lg">Synolo</div>
//                <div><button className="flex bg-blue-200 justify-center px-4 rounded-sm text-blue-500">Ongoing</button></div>
//               </div>
//               </div>
//               <div className="flex">
//               <div className="flex flex-col gap-4 py-3 whitespace-nowrap justify-end">
//                 <div className="flex gap-2"><div className="text-black text-xl">30,000 </div><span className="text-sm mt-1">in prizes</span></div>
//                 <div className="flex gap-2"><div className="text-black text-xl">256 </div><span className="text-sm mt-1">registered</span></div>
//               </div>
//               <div className="flex justify-around flex-col mx-5 border-l-2 border-slate-200 whitespace-nowrap px-5">
//                 <div>Hackathon</div>
//                 <div>Courtyard</div>
//                 <div>04-12-2022</div>
//               </div>
//               </div>
              
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* popup */}
//      { openpop && <div style={{ backgroundColor: "rgba(0,0,0,0.5)", position: "fixed",height: "100%", width: "100%", top: 0,left: 0, display: "flex" ,alignItems: "center",justifyContent: "center",overflow: "auto",zIndex: 99999}}>
//       <div className="bg-white p-10 flex flex-col gap-5 rounded-md" >
//         <div>
//           <div className="font-medium">Event Title</div>
//           <input className="transparent rounded-md border border-slate-500 px-10 sm:w-[40vh] md:w-[60vh] py-2 "/>
//         </div>
//         <div>
//           <div className="font-medium">Description</div>
//           <textarea style={{resize:"none",height:"20vh"}} className="transparent  rounded-md border border-slate-500 px-10 sm:w-[40vh] md:w-[60vh] py-2 "/>
//         </div>
//         <div className="flex justify-between gap-3">
//           <div className="font-medium">Upload Image</div>
//           <div>
//             <label className="flex whitespace-nowrap flex-col px-2 py-2 bg-white rounded-lg border border-slate-500 text-4xl cursor-pointer">
//                 <span onClick={()=>setFilesClose(true)} className="px-20 text-slate-500 font-semibold text-base leading-normal">Upload Files</span>
//             </label>
//           </div>
//         </div>
//         <div className="flex justify-between gap-3">
//           <div className="font-medium">Upload Banner Image</div>
//           <div>
//             <label className="flex whitespace-nowrap flex-col px-2 py-2 bg-white rounded-lg border border-slate-500 text-4xl cursor-pointer">
//                 <span onClick={()=>setBannerFilesClose(true)} className="px-20 text-slate-500 font-semibold text-base leading-normal">Upload Files</span>
//             </label>

//           </div>
//         </div>
//         <div className="flex justify-between gap-3">
//           <div className="font-medium">Event Mode</div>
//           <div className="flex gap-4">
//             <button className="px-14 py-2 rounded-md border border-slate-500 text-slate-500">offline</button>
//             <button className="bg-blue-400 px-14 py-2 rounded-md text-white">online</button>
//           </div>
//         </div>
//         <div className="flex justify-between gap-3">
//           <div className="font-medium">Event Type</div>
//           <div>
//           <select className="px-14 py-2 rounded-md border border-slate-500 text-slate-500 mr-20" id = "dropdown">
//             <option value="option">Select event type</option>
//             <option value="1">1</option>
//             <option value="2">2</option>
//           </select>
//           </div>
//         </div>
//          <div className="flex mt-10 justify-around">
//            <button onClick={()=>setOpenpop(false)} className="px-10 border border-blue-400  rounded-md py-1">Cancel</button>
//            <button onClick={handlenext} className="bg-blue-500 px-10 rounded-md py-1 text-white ">Next &rarr;</button>
//          </div>
//       </div>
//       {filesClose && <div style={{ backgroundColor: "rgba(0,0,0,0.5)", position: "fixed",height: "100%", width: "100%", top: 0,left: 0, display: "flex" ,alignItems: "center",justifyContent: "center",overflow: "auto",zIndex: 99999}}>
//         <div className="flex flex-col gap-2 bg-white px-5 py-5 rounded-xl">
//           <div className="text-xl font-semibold">Upload Image</div>
//               <Upload
//             onDrop={files => {
//               console.log(files);
//             }}
//            />
//           <div className="flex mx-20 mt-10 gap-10 justify-around">
//            <button onClick={()=>setFilesClose(false)} className="px-10 border border-blue-400  rounded-xl py-2">Cancel</button>
//            <button className="bg-blue-500 px-10 rounded-xl py-2 text-white ">Browse Files</button>
//          </div>
//         </div>
//       </div>}
//       {BannerFilesClose && <div style={{ backgroundColor: "rgba(0,0,0,0.5)", position: "fixed",height: "100%", width: "100%", top: 0,left: 0, display: "flex" ,alignItems: "center",justifyContent: "center",overflow: "auto",zIndex: 99999}}>
//         <div className="flex flex-col gap-2 bg-white px-5 py-5 rounded-xl">
//           <div className="text-xl font-semibold">Upload Banner Image</div>
//               <Upload
//             onDrop={files => {
//               console.log(files);
//             }}
//            />
//           <div className="flex mx-20 mt-10 gap-10 justify-around">
//            <button onClick={()=>setBannerFilesClose(false)} className="px-10 border border-blue-400  rounded-xl py-2">Cancel</button>
//            <button className="bg-blue-500 px-10 rounded-xl py-2 text-white ">Browse Files</button>
//          </div>
//         </div>
//       </div>}
//       </div>}
//      { popnext && <div style={{ backgroundColor: "rgba(0,0,0,0.5)", position: "fixed",height: "100%", width: "100%", top: 0,left: 0, display: "flex" ,alignItems: "center",justifyContent: "center",overflow: "auto",zIndex: 99999}}>
//       <div className="bg-white p-10 flex flex-col gap-5 rounded-md" >
//         <div className="flex justify-between gap-3">
//           <div className="font-medium whitespace-wrap">Participation type</div>
//           <div className="flex gap-2">
//             <button onClick={handleIndividual}  className={`[&.active]:bg-blue-400 pr-20 [&.active]:text-white ${isActivePop?'active':''} px-5 py-2 rounded-md border border-slate-500 text-slate-500`}>Individual</button>
//             <button onClick={handleGroup}  className={`[&.active]:bg-blue-400 pr-20 [&.active]:text-white  ${isActivePopGrp?'active':''} px-5 py-2 rounded-md border border-slate-500 text-slate-500`}>Group</button>
//           </div>
//         </div>
//         {isActivePopGrp && <div className="flex justify-between gap-3">
//           <div className="font-medium">Members</div>
//           <div className="flex w-full">
//             <input type="text" className="py-1 border border-slate-500 text-slate-500"/>
//             <input type="text" className="py-1 border border-slate-500 text-slate-500"/>
//           </div>
//         </div>}
//         <div className="flex justify-between gap-3">
//           <div className="font-medium">Start Date and time</div>
//           <Datetime  onChange={onChange} value={value} className='w-60 appearance-none shadow border rounded py-3 px-2 text-gray-darker'/>
//         </div>
//         <div className="flex justify-between gap-3">
//           <div className="font-medium">End Date and time</div>
//           <Datetime  onChange={eonChange} value={evalue} className='w-60 appearance-none shadow border rounded py-3 px-2 text-gray-darker'/>
        
//          </div>
//         <div className="flex justify-between gap-3">
//           <div className="font-medium whitespace-wrap">Judging mode</div>
//           <div className="flex gap-2">
//             <button className="px-4 py-1 rounded-md border border-slate-500 text-slate-500">Likes</button>
//             <button className="bg-blue-400 px-4 py-1 rounded-md text-white">Judging</button>
//             <button className="bg-blue-400 px-4 py-1 rounded-md text-white">Hybrid</button>
//           </div>
//         </div>
//         <div className="flex justify-between gap-3">
//           <div className="font-medium">Location</div>
//             <input type="text" placeholder="Enter event location" className="py-2 rounded-md p-10 w-full border border-slate-500 text-slate-500"/>
//         </div>
//         <div className="flex gap-3">
//           <div className="font-medium">Private</div>

//           <Switch
//           checked={checked}
//           onChange={handleChange}
//           inputProps={{ 'aria-label': 'controlled' }}
//          />
//         </div>
//          <div className="flex mt-10 justify-around">
//            <button onClick={handleBack} className="px-10 border border-blue-400  rounded-md py-1">&larr; Back</button>
//            <button className="bg-blue-500 px-10 rounded-md py-1 text-white">Proceed</button>
//          </div>
         
//       </div>
//       </div>}
      
//     </>
//   );
// }

// export default Main;
