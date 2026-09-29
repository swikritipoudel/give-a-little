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
        <div className="payment flex gap-3 w-[80%]">
            <div className="supporters w-1/2 bg-green-200 rounded-lg text-black p-10">
            <h2 className='font-bold text-lg'>Supporters</h2>
                <ul>
                    <li>Shubham donated 200</li>
                    <li>Sujal donated aalu</li>
                    <li>Sujal donated aalu</li>
                    <li>Sujal donated aalu</li>
                    <li>Sujal donated aalu</li>
                    <li>Sujal donated aalu</li>
                    <li>Sujal donated aalu</li>
                    <li>Sujal donated aalu</li>
                    <li>Sujal donated aalu</li>
                    <li>Sujal donated aalu</li>
                    <li>Sujal donated aalu</li>
                    <li>Sujal donated aalu</li>
                    <li>Sujal donated aalu</li>
                    <li>Sujal donated aalu</li>
                    <li>Sujal donated aalu</li>
                    <li>Sujal donated aalu</li>
                    <li>Sujal donated aalu</li>
                </ul>
            </div>
            <div className="makePayment w-1/2 bg-green-200 rounded-lg text-black p-10">
                
            </div>
        </div>
    </div>
    </>
  )
}

export default Username