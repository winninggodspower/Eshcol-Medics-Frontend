import CustomPageHeader from "../../../components/CustomPageHeader";
import EditIcon from "../EditIcon";

function PersonalInfomationSettings() {

  return (
    <div className='bg-white grow md:border-e-4'>
      <CustomPageHeader title={'Personal information'} />

      <div className="font-inter mt-11 md:mt-[54px] ">
        
        <label className="flex justify-between items-center border border-grey-8 border-opacity-40 w-[80%] md:w-[84%] max-w-[519px] mx-auto py-4 px-7 md:px-[54px] md:py-5 mt-[15px] relative mb-4 md:mb-7">
          <input className="p-0 text-sm font-light border-0 md:text-xl opacity-40 focus:border-0 focus:outline-none focus:ring-0 " type="text" defaultValue={'Wade Justin Warren'} />
          <EditIcon />
          <span id="tool-top" className="absolute top-0 left-[calc(1.75rem-15px)] md:left-[calc(54px-15px)] text-sm px-[15px] py-[5px] -translate-y-1/2 bg-white">Full name</span>
        </label>

        <label className="flex justify-between items-center border border-grey-8 border-opacity-40 w-[80%] md:w-[84%] max-w-[519px] mx-auto py-4 px-7 md:px-[54px] md:py-5 mt-[15px] relative mb-4 md:mb-7">
          <input className="p-0 text-sm font-light border-0 md:text-xl opacity-40 focus:border-0 focus:outline-none focus:ring-0 hide-date-picker-icon" type="date" defaultValue={'19/07/2001'} />
          <EditIcon />
          <span id="tool-top" className="absolute top-0 left-[calc(1.75rem-15px)] md:left-[calc(54px-15px)] text-sm px-[15px] py-[5px] -translate-y-1/2 bg-white">Date of birth</span>
        </label>

        <label className="flex justify-between items-center border border-grey-8 border-opacity-40 w-[80%] md:w-[84%] max-w-[519px] mx-auto py-4 px-7 md:px-[54px] md:py-5 mt-[15px] relative mb-4 md:mb-7">
          <input className="p-0 text-sm font-light border-0 md:text-xl opacity-40 focus:border-0 focus:outline-none focus:ring-0 " type="email" defaultValue={'wade@gmail.com'} />
          <EditIcon />
          <span id="tool-top" className="absolute top-0 left-[calc(1.75rem-15px)] md:left-[calc(54px-15px)] text-sm px-[15px] py-[5px] -translate-y-1/2 bg-white">Email</span>
        </label>

        <label className="flex justify-between items-center border border-grey-8 border-opacity-40 w-[80%] md:w-[84%] max-w-[519px] mx-auto py-4 px-7 md:px-[54px] md:py-5 mt-[15px] relative mb-4 md:mb-7">
          <input className="p-0 text-sm font-light border-0 md:text-xl opacity-40 focus:border-0 focus:outline-none focus:ring-0 " type="text" defaultValue={'No 4 anyt drive, Dakota'} />
          <EditIcon />
          <span id="tool-top" className="absolute top-0 left-[calc(1.75rem-15px)] md:left-[calc(54px-15px)] text-sm px-[15px] py-[5px] -translate-y-1/2 bg-white">Home address</span>
        </label>

      </div>
    </div>
  )
}

export default PersonalInfomationSettings