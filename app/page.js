import Image from "next/image";

export default function Home() {
  return (
    <>
  <div className="flex justify-center flex-col gap-4 items-center text-white h-[44vh] px-5 md:px-0 text-xs md:text-base  ">
   <div className="font-bold text-5xl flex gap-2 items-center">Give A Little <span><img src="/helping.gif" width={40} alt="" /></span></div>
   <p>A crowdfunding platform for creators. Get funded by your fans and followers.</p>
   <div>
    <button type="button" className="text-heading bg-gradient-to-r from-green-200 via-green-400 to-green-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5 me-2 mb-2 cursor-pointer">Start Now!</button>

    <button type="button" className="text-heading bg-gradient-to-r from-green-200 via-green-400 to-green-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5 me-2 mb-2 cursor-pointer text">Read More</button>
   </div>
  </div>


  <div className="bg-white h-1 opacity-15"></div>

  <div className="text-white container mx-auto pb-32 pt-14">
    <h2 className="text-3xl font-bold text-center mb-13">Your fans can help you a little.</h2>
    <div className="flex gap-5 justify-around">

    <div className="item space-y-2 cursor-pointer flex flex-col justify-center items-center">
    <img src="/person.png" width={100} alt="" className="p-2 rounded-full bg-slate-400"/>
     <p className="font-bold">Fans want to help you</p>
    <p className="text-center">Your fans are avaialble for you to help you.</p>
    </div>

    <div className="item space-y-2 cursor-pointer flex flex-col justify-center items-center">
    <img src="/fandom.png" width={100} alt="" className="p-2  rounded-full bg-slate-400"/>
    <p className="font-bold">Fans want to help you</p>
    <p className="text-center">Your fans are avaialble for you to help you.</p>
    </div>

    <div className="item space-y-2 cursor-pointer flex flex-col justify-center items-center">
    <img src="/money.png" width={100} alt="" className="p-2  rounded-full bg-slate-400"/>
    <p className="font-bold">Fans want to help you</p>
    <p className="text-center">Your fans are avaialble for you to help you.</p>
    </div>

    </div>
  </div>

  <div className="bg-white h-1 opacity-15"></div>
  <div className="text-white container mx-auto pb-32 pt-14 flex flex-col items-center">
    <h2 className="text-3xl font-bold text-center mb-13">Your fans can help you a little.</h2>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/QtaorVNAwbI?si=XQ_O8CLkJNhiHe8t" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>

  </>
  );
}
