import React from 'react';

export const Navbar = () => (
    <div>
        <div className="flex justify-between flex-wrap px-5 py-4 shadow-md sticky top-0">
            <p className=" cursor-pointer font-bold text-black ml-10 font-sans text-3xl">InternBrand</p>
            <div className="flex font-bold text-lg text-slate-500 gap-10">
                <div className='flex gap-2 text-purple-600 cursor-pointer'>
                    <img src="/images/copy.png" className='mt-1' alt="logo" style={{ height: "1.4rem" }} />
                    <span>Browse Listings</span>
                </div>
                <div className='flex gap-2 cursor-pointer'>
                    <img src="/images/task.png" className='mt-1' alt="logo" style={{ height: "1.4rem" }} />
                    <span>Application history</span>
                </div>
                <div className='flex gap-2 cursor-pointer'>
                    <img src="/images/edit.png" className='mt-1' alt="logo" style={{ height: "1.4rem" }} />
                    <span>Blog</span>
                </div>
                <div className='flex gap-2 cursor-pointer'>
                    <img src="/images/message.png" className='mt-1' alt="logo" style={{ height: "1.4rem" }} />
                    <span>Contact us</span>
                </div>
            </div>

            <div className='flex gap-x-4 cursor-pointer'>
                <img src="/images/notification.png" className='mt-1' alt="logo" style={{ height: "2rem" }} />
                <img src="/images/profile.png" alt="logo" />
            </div>
        </div>
    </div>
);

export default Navbar;
