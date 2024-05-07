import React from 'react';

const Details = ({ dataDetails }) => {
  return (
    <div className="pl-10">
      <div className="px-6 py-2 pr-0 pt-0 rounded-md bg-white gap-5 shadow-md">
        <div className="flex justify-between">
          <div className="flex pt-4">
            <div className="text-4xl pr-3 mr-4"><img src={`${dataDetails.brand}`} alt='..' /></div>
            <div className="flex flex-col gap-0">
              <div className="font-bold text-xl text-slate-700">{dataDetails.position}</div>
              <span className="text-sm font-semibold text-slate-500">{dataDetails.company}</span>
            </div>
          </div>
          <div className="font-bold px-10 rounded-bl-full py-3 bg-purple-200 text-2xl text-purple-700">{dataDetails.department}</div>
        </div>
        <div className="flex py-10 flex-col gap-x-5 ">
          <div className="grid xl:grid-cols-4 md:grid-cols-3 border">
            <div className="px-10 py-2 border  flex flex-col gap-0">
              <div className="gap-3 text-black flex">
                <img src='/images/timer.png' className='mt-1' alt='logo' style={{ height: "2rem" }} />
                <div>
                  <div className='font-semibold'>{dataDetails.duration} Months</div>
                  <div className="text-slate-600 font-base">Duration</div>
                </div>
              </div>
            </div>
            <div className="px-10 py-2 border  flex flex-col gap-0">
              <div className="gap-3 text-black flex">
                <img src='/images/ranking.png' className='mt-1' alt='logo' style={{ height: "2rem" }} />
                <div>
                  <div className='font-semibold'>{dataDetails.experience}</div>
                  <div className="text-slate-600 font-base">Experience</div>
                </div>
              </div>
            </div>
            <div className="px-10 py-2 border  flex flex-col gap-0">
              <div className="gap-3 text-black flex">
                <img src='/images/walletmoney.png' className='mt-1' alt='logo' style={{ height: "2rem" }} />
                <div>
                  <div className='font-semibold'>{dataDetails.stipend}</div>
                  <div className="text-slate-600 font-base">Stipend</div>
                </div>
              </div>
            </div>
            <div className="px-10 py-2 border  flex flex-col gap-0">
              <div className="gap-3 text-black flex">
                <img src='/images/location.png' className='mt-1' alt='logo' style={{ height: "2rem" }} />
                <div>
                  <div className='font-semibold'>{dataDetails.location}</div>
                  <div className="text-slate-600 font-base">Location</div>
                </div>
              </div>
            </div>
            <div className="px-10 py-2 border  flex flex-col gap-0">
              <div className="gap-3 text-black flex">
                <img src='/images/calendar.png' className='mt-1' alt='logo' style={{ height: "2rem" }} />
                <div>
                  <div className='font-semibold'>{dataDetails.posted} Days Ago</div>
                  <div className="text-slate-600 font-base">Posted</div>
                </div>
              </div>
            </div>
            <div className="px-10 py-2 border  flex flex-col gap-0">
              <div className="gap-3 text-black flex">
                <img src='/images/clipboardclose.png' className='mt-1' alt='logo' style={{ height: "2rem" }} />
                <div>
                  <div className='font-semibold'>{dataDetails.endsin} Days</div>
                  <div className="text-slate-600 font-base">EndsIn</div>
                </div>
              </div>
            </div>
            <div className="px-10 py-2 border  flex flex-col gap-0">
              <div className="gap-3 text-black flex">
                <img src='/images/usertick.png' className='mt-1' alt='logo' style={{ height: "2rem" }} />
                <div>
                  <div className='font-semibold'>{dataDetails.openposition}</div>
                  <div className="text-slate-600 font-base">Open position</div>
                </div>
              </div>
            </div>
            <div className="px-10 py-2 border  flex flex-col gap-0">
              <div className="gap-3 text-black flex">
                <img src='/images/profile2user.png' className='mt-1' alt='logo' style={{ height: "2rem" }} />
                <div>
                  <div className='font-semibold'>{dataDetails.totalapplicant}</div>
                  <div className="text-slate-600 font-base">Total Applicants</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2 px-4 ">
            {dataDetails.skills.map((d, index) => <span key={index} className="bg-slate-100  tracking-wide font-semibold text-black px-3 py-1 rounded-2xl">{d}</span>)}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="py-3 pt-5">
            <div className="font-bold text-black">About Us</div>
            <div className='text-black'>{dataDetails.about}</div>
          </div>
          <div className="py-3">
            <div className="font-bold text-black">Requirements</div>
            <ul className="ml-6 list-disc text-black">
              {dataDetails.requirements.map((d, index) => <li key={index}>{d}</li>)}
            </ul>
          </div>
          <div className="py-3">
            <div className="font-bold text-black">Responsibilities</div>
            <ul className="ml-6 list-disc text-black">
              {dataDetails.requirements.map((d, index) => <li key={index}>{d}</li>)}
            </ul>
          </div>
          <div className=" cursor-pointer underline font-semibold flex ml-3 text-purple-600">Visit website</div>
          <div className="flex justify-center"><button className="px-10 rounded-3xl text-white font-bold text-xl bg-purple-800 py-3">Apply Now</button></div>
        </div>
      </div>
    </div>
  );
}

export default Details;
