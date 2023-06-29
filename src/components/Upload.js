import React, { useState, useEffect, useRef } from "react";

function removeItems(arr, item) {
  for (var i = 0; i < item; i++) {
    arr.pop();
  }
}

function useFiles({ initialState = [], maxFiles }) {
  const [state, setstate] = useState(initialState);
  function withBlobs(files) {
    const destructured = [...files];
    if (destructured.length > maxFiles) {
      const difference = destructured.length - maxFiles;
      removeItems(destructured, difference);
    }
    const blobs = destructured
      .map(file => {
        if (file.type.includes("image")) {
          console.log("image");
          file.preview = URL.createObjectURL(file);
          return file;
        }
        console.log("not image");
        return null;
      })
      .filter(elem => elem !== null);

    setstate(blobs);
  }
  return [state, withBlobs];
}

function Upload({ onDrop, maxFiles = 1 ,filesClose,title}) {

  const [over, setover] = useState(false);
  const [files, setfiles] = useFiles({ maxFiles });
  // const [files, setfiles] = useState({});
   

  const $input = useRef(null);
  useEffect(() => {
    if (onDrop) {
      onDrop(files);
    }
  }, [files]);

  const handlecut=()=>{
    setfiles("");
  }


console.log("MONA LIEK: ",files)

const [imgs,setImgs] =useState()
   
const handleChnage=(e)=>{
    console.log(e.target.files)
    const data = new FileReader()
    setfiles(e.target.files)
    data.addEventListener('load',()=>{
        setImgs(data.result)
        localStorage.setItem("pic", data.result);
    })
    data.readAsDataURL(e.target.files[0])
}

console.log(imgs)
//  const [closefile,setCloseFile]=useState(filesClose);
  return (
    <>
    <div  className="flex flex-col gap-2 bg-white px-5 py-5 rounded-xl">
      <div className="text-xl font-semibold">{title}</div>
        <div
          onClick={() => {
            $input.current.click();
          }}
          onDrop={e => {
            e.preventDefault();
            e.persist();
            setfiles(e.dataTransfer.files);
            setover(false);
          }}
          onDragOver={e => {
            e.preventDefault();
            setover(true);
          }}
          onDragLeave={e => {
            e.preventDefault();
            setover(false);
          }}
          className={over ? "upload-container over" : "upload-container"}
        >
          <div className="border mx-10 mt-10 px-10 py-10 text-slate-400 border-2 border-dashed border-slate-400"> 
              Drag and drop files here. 
              <input
            style={{ display: "none" }}
            type="file"
            name="file"
            accept="image/*"
            ref={$input}
            // onChange={e => {
            //   setfiles(e.target.files);
            // }}
            onChange={handleChnage} 
            multiple={maxFiles > 1}
          />
              </div>
              {/* <img src={files} height="200px" width="200px" /> */}
        </div>
      {files[0] &&<div className="flex mt-10 whitespace-nowrap justify-between px-2 py-1 bg-white rounded-lg border border-slate-500 text-4xl cursor-pointer">
            <div className="flex gap-2">
              <img style={{height:"3.6rem"}} className="py-2" src="upload.png" alt="uploaded"/>
              <div className="flex flex-col">
              {files?.map(file => (
               <div className="text-[1rem]">{file.name}</div>
              ))}
                <div className="text-sm text-slate-400">Uploaded</div>
              </div>
            </div>
            <div className="">
            <span onClick={handlecut} className="bg-red-200 px-2 rounded-md mx-3 font-semibold text-red-500 text-[1.4rem]">X</span>
            </div>
          </div>}
          <div className="flex mx-20 mt-10 gap-10 justify-around">
           <button onClick={()=>filesClose(false)} className="px-10 border border-blue-400  rounded-xl py-2">Cancel</button>
           <button className="bg-blue-500 px-10 rounded-xl py-2 text-white ">Browse Files</button>
         </div>
          </div> 
    </>
  );
}

export { Upload };
