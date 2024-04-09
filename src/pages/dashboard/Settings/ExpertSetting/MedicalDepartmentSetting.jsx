import { Link } from "react-router-dom";
import CustomPageHeader from "../../../../components/CustomPageHeader";
import SettingInput from "../../../../components/Setting/SettingInput";

function MedicalDepartmentSetting() {

  return (
    <div className='relative bg-white grow md:border-e-4'>
      <CustomPageHeader title={'Medical department'} />

      <div className="font-inter mt-11 md:mt-[54px] w-[80%] md:w-[84%] max-w-[519px] mx-auto">

        <SettingInput label={'Medical department'} defaultValue={'Pediatrician'} type={'text'} />

        <SettingInput label={'What age do you treat'} defaultValue={'infant,teen,adult'} type={'text'} />

      </div>

      <div className="setting-bottom-btn-container">
      <Link to={'/dashboard/settings/expert/payment-information'} className="btn-short bg-secondary">Prev</Link>
        <Link to={'/dashboard/settings/expert/security'} className="btn-short bg-secondary">Next</Link>
      </div>
    </div>
  )
}

export default MedicalDepartmentSetting