import { Link } from "react-router-dom";
import CustomPageHeader from "../../../../components/CustomPageHeader";
import SettingInput, { SettingHospitalInputDisplay } from "../../../../components/Setting/SettingInput";
import hospitalImage from "../../../../assets/hospital_image.png";

function ExpertPersonalInfomationSetting() {

  return (
    <div className='relative bg-white grow md:border-e-4'>
      <CustomPageHeader title={'Personal information'} />

      <div className="font-inter mt-11 md:mt-[54px] w-[80%] md:w-[84%] max-w-[519px] mx-auto">

        <SettingInput label={'Full name'} defaultValue={'Wade Justin Warren'} type={'text'} />

        <SettingInput label={'Date of birth'} defaultValue={'19/07/2001'} type={'date'} />

        <SettingInput label={'Phone number'} defaultValue={'0906667354'} type={'phone'} />

        <SettingInput label={'Home address'} defaultValue={'No 4 anyt drive, Dakota'} type={'text'} />

        <SettingHospitalInputDisplay 
          image={hospitalImage} 
          name={'Acton Crawford Hospital'} 
          address={'2972 Westheimer Rd. Santa Ana, Illinois 85486'}
        />

      </div>

      <div className="setting-bottom-btn-container">
        <button className="opacity-50 btn-short bg-secondary" disabled>Prev</button>
        <Link to={'/dashboard/settings/expert/payment-information'} className="btn-short bg-secondary">Next</Link>
      </div>
    </div>
  )
}

export default ExpertPersonalInfomationSetting