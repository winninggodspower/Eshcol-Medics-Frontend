import CustomPageHeader from "../../../../components/CustomPageHeader";
import SettingInput from "../../../../components/Setting/SettingInput";
import { Link } from "react-router-dom";

function NextOfKinSetting() {
  return (
    <div className='relative bg-white grow md:border-e-4'>
      <CustomPageHeader title={'Next Of Kin'} />

      <div className="font-inter mt-11 md:mt-[54px] w-[80%] md:w-[84%] max-w-[519px] mx-auto">

        <SettingInput label={'Next of kin’s name'} defaultValue={'Jane Cooper'} type={'text'} />

        <SettingInput label={'Next of kin’s address'} defaultValue={'2972 Westheimer Rd. Santa Ana.... '} type={'text'} />

        <SettingInput label={'Next of kin’s phone no.'} defaultValue={'(209) 555-0104'} placeholder="XXX" type={'number'} />

      </div>

      <div className="setting-bottom-btn-container">
        <Link to={'/dashboard/settings/billing-information'} className="btn-short bg-secondary">Prev</Link>
        <Link to={'/dashboard/settings/security'} className="btn-short bg-secondary">Next</Link>
      </div>
    </div>
  )
}

export default NextOfKinSetting