import { Link } from "react-router-dom";
import CustomPageHeader from "../../../../components/CustomPageHeader";
import SettingInput from "../../../../components/Setting/SettingInput";

function PersonalInfomationSetting() {

  return (
    <div className='relative bg-white grow md:border-e-4'>
      <CustomPageHeader title={'Personal information'} />

      <div className="font-inter mt-11 md:mt-[54px] w-[80%] md:w-[84%] max-w-[519px] mx-auto">

        <SettingInput label={'Full name'} defaultValue={'Wade Justin Warren'} type={'text'} />

        <SettingInput label={'Date of birth'} defaultValue={'19/07/2001'} type={'date'} />

        <SettingInput label={'Email'} defaultValue={'wade@gmail.com'} type={'email'} />

        <SettingInput label={'Home address'} defaultValue={'No 4 anyt drive, Dakota'} type={'text'} />

      </div>

      <div className="setting-bottom-btn-container">
        <button className="opacity-50 btn-short bg-secondary" disabled>Prev</button>
        <Link to={'/dashboard/settings/billing-information'} className="btn-short bg-secondary">Next</Link>
      </div>
    </div>
  )
}

export default PersonalInfomationSetting