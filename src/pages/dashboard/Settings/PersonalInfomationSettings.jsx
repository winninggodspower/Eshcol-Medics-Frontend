import CustomPageHeader from "../../../components/CustomPageHeader";
import SettingInput from "../../../components/Setting/SettingInput";
import EditIcon from "../../../components/Setting/EditIcon";

function PersonalInfomationSettings() {

  return (
    <div className='bg-white grow md:border-e-4'>
      <CustomPageHeader title={'Personal information'} />

      <div className="font-inter mt-11 md:mt-[54px] ">

        <SettingInput label={'Full name'} defaultValue={'Wade Justin Warren'} type={'text'} />

        <SettingInput label={'Date of birth'} defaultValue={'19/07/2001'} type={'date'} />

        <SettingInput label={'Email'} defaultValue={'wade@gmail.com'} type={'email'} />

        <SettingInput label={'Home address'} defaultValue={'No 4 anyt drive, Dakota'} type={'text'} />

      </div>
    </div>
  )
}

export default PersonalInfomationSettings