import React from 'react'


const Username = async ({ params }) => {
   const { username } = await params;
  return (
    <>
<div className='cover w-full bg-red-50 relative'> 
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp11684748.jpg&f=1&nofb=1&ipt=34faa79d54bddeb076324a57fd46b131cd16aacdf0976296954211267dad0e38&ipo=images" alt="" className='object-cover w-full h-[550]'/>
    <div className='absolute -bottom-20 right-[46%] border-2 border-white rounded-full'>
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F42%2F20%2Faa%2F4220aaaa14f43c8706de5a22259089c7.jpg&f=1&nofb=1&ipt=fd6629d33d7de7e304060b5a08a145478f62822941d4469cbfea0a88cd3bb2d8&ipo=images" alt="" width={150} height={150} className='rounded-full'/>
    </div>
    </div>

    <div className="info flex flex-col justify-center items-center my-25 gap-1">
        <div className='text-lg font-bold'>
            @{username}
        </div>

        <div className='text-slate-200'>
            Coding Projects for everyone to learn and grow
        </div>

        <div className='text-slate-200'>
            200 members . 10 posts . $5000/ release
        </div>
        <div className="payment flex gap-3 w-[80%] mt-15">
            <div className="supporters w-1/2 bg-green-200 rounded-lg text-black p-10">
            <h2 className='font-bold text-2xl my-5'>Supporters</h2>
                <ul className='mx-5 text-md'>
                    <li className=' my-2 flex gap-2 items-center'>
                        <img src="useravatar.png" alt="User avatar" width={25} />
                        <span>Shubham donated <span className='font-bold'>$20</span> with a message "Helpful projects ❤"</span></li>
                   
                </ul>
            </div>
            <div className="makePayment w-1/2 bg-green-200 rounded-lg text-black p-10">
                 <h2 className='font-bold text-2xl my-5'>Make a Payment</h2>
                 <div className='flex flex-col gap-2'>
                    <input type="text" className='w-full p-3 rounded-lg bg-green-100' placeholder='Enter name'/>
                    <input type="text" className='w-full p-3 rounded-lg bg-green-100' placeholder='Enter amount'/>
                    <input type="text" className='w-full p-3 rounded-lg bg-green-100' placeholder='Enter message'/>
                    <button type="button" className="text-white bg-gradient-to-r from-green-600 via-green-700 to-green-800 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 cursor-pointer">Pay</button>
                 </div>
                 <div className='flex gap-2 mt-5'>
                    <button className='bg-green-700 p-3 rounded-lg cursor-pointer text-white'>Pay $10</button>
                    <button className='bg-green-700 p-3 rounded-lg cursor-pointer text-white'>Pay $20</button>
                    <button className='bg-green-700 p-3 rounded-lg cursor-pointer text-white'>Pay $30</button>
                 </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Username