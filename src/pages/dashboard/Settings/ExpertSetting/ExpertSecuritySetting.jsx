import { Link } from "react-router-dom";
import CustomPageHeader from "../../../../components/CustomPageHeader";
import SettingInput from "../../../../components/Setting/SettingInput";

function ExpertSecuritySetting() {

  return (
    <div className='relative bg-white grow md:border-e-4'>
      <CustomPageHeader title={'Security'} />

      <div className="font-inter mt-11 md:mt-[54px] w-[80%] md:w-[84%] max-w-[519px] mx-auto">

        <SettingInput label={'Email'} defaultValue={'xoycn@yahoo.com'} type={'email'} />

        <SettingInput label={'Password'} defaultValue={'XXXXXXXX'} type={'text'} />

      </div>

      <div className="setting-bottom-btn-container">
        <Link to={'/dashboard/settings/expert/medical-department'} className="btn-short bg-secondary">Prev</Link>
        <Link to={'/dashboard/settings/expert/security'} className="btn-short bg-secondary">Finish</Link>
      </div>
    </div>
  )
}

export default ExpertSecuritySetting