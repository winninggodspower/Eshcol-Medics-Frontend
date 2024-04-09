import { Link } from "react-router-dom";
import CustomPageHeader from "../../../../components/CustomPageHeader";
import SettingInput from "../../../../components/Setting/SettingInput";

function PaymentInformationSetting() {

  return (
    <div className='relative bg-white grow md:border-e-4'>
      <CustomPageHeader title={'Payment information'} />

      <div className="font-inter mt-11 md:mt-[54px] w-[80%] md:w-[84%] max-w-[519px] mx-auto">

        <SettingInput label={'Account number'} defaultValue={'234154367289'} type={'number'} />

        <SettingInput label={'Bank name'} defaultValue={'First bank'} type={'text'} />

      </div>

      <div className="setting-bottom-btn-container">
        <Link to={'/dashboard/settings/expert/personal-information'} className="btn-short bg-secondary">Prev</Link>
        <Link to={'/dashboard/settings/expert/medical-department'} className="btn-short bg-secondary">Next</Link>
      </div>
    </div>
  )
}

export default PaymentInformationSetting