import Image from "next/image";

export default function Home() {
  return (
    <>
  <div className="text-white flex flex-col justify-center  items-center h-[44vh] gap-4">
   <div className="font-bold text-3xl">Give A Little</div>
   <p>A crowdfunding platform for creators. Get funded by your fans and followers.</p>
   <div>
    <button type="button" class="text-heading bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5 me-2 mb-2">Start Now!</button>

    <button type="button" class="text-heading bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5 me-2 mb-2">Read More</button>
   </div>
  </div>
  <div className="bg-white h-1 opacity-10">
    sdf
  </div>
  </>
  );
}
