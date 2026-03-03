

const Contact = () => {
  return (
    <div className='min-h-screen py-12'>
        <div className=" max-w-lg mx-auto pt-12 text-center">
            <h1 className=" text-4xl font-bold text-primary mb-2"> Talk to our friendly team</h1>
            <p className=" text-xl "> We'll help you find the perfect house, exactly to your taste</p>
        </div>
        <div className=" max-w-6xl mx-auto grid lg:grid-cols-2 mt-12">
           
           <form action="">
            <div className=" max-w-lg">
                <div className=" grid gap-4 lg:grid-cols-2">
                    <div className="">
                        <label htmlFor="fname">First name*</label>
                        <input type="text" name="fname" id="fname" placeholder='First name' className="px-3 py-1 rounded-lg h-8 w-full ountline-none border border-gray-200" />
                    </div>
                    <div className="">
                        <label htmlFor="lname">Last name*</label>
                        <input type="text" name="lname" id="lname" placeholder='lastName' className="px-3 py-1 rounded-lg h-8 w-full ountline-none border border-gray-200" />
                    </div>
                </div>
                    <div className="">
                        <label htmlFor="email">Email*</label>
                        <input type="text" name="email" id="email" placeholder='you@example.com' className="px-3 py-1 rounded-lg h-8 w-full ountline-none border border-gray-200" />
                    </div>
                    <div className="">
                        <label htmlFor="phone">Phone*</label>
                        <input type="text" name="phone" id="phone" placeholder='09032343233...' className="px-3 py-1 rounded-lg h-8 w-full ountline-none border border-gray-200" />
                    </div>
                    <div className="">
                        <label htmlFor="message">Message*</label>
                        <textarea type="text" name="message" id="message" placeholder='Leave us a message...' className="px-3 py-1 rounded-lg h-8 w-full ountline-none border border-gray-200 min-h-24" > </textarea>
                    </div>

            </div>
           </form>
        </div>
    </div>
  )
}

export default Contact