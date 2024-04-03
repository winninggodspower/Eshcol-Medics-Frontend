import CustomPageHeader from "../../../../components/CustomPageHeader";
import SettingInput from "../../../../components/Setting/SettingInput";
import { Link } from "react-router-dom";

function SecuritySetting() {
  return (
   <div className='relative bg-white grow md:border-e-4'>
      <CustomPageHeader title={'Security'} />

      <div className="font-inter mt-11 md:mt-[54px] w-[80%] md:w-[84%] max-w-[519px] mx-auto">

        <SettingInput label={'Email'} defaultValue={'xoycn@yahoo.com'} type={'text'} />

        <SettingInput label={'Password'} defaultValue={'XXXXXXXX'} placeholder="XXXXXXXX" type={'password'} />

      </div>

      <div className="setting-bottom-btn-container">
        <Link to={'/dashboard/settings/next-of-kin'} className="btn-short bg-secondary">Prev</Link>
        <Link to={''} className="btn-short bg-secondary">Finish</Link>
      </div>
    </div>
  )
}

export default SecuritySetting