import CustomPageHeader from "../../../components/CustomPageHeader";
import SettingInput from "../../../components/Setting/SettingInput";

function SecuritySetting() {
  return (
   <div className='bg-white grow md:border-e-4'>
      <CustomPageHeader title={'Security'} />

      <div className="font-inter mt-11 md:mt-[54px] ">

        <SettingInput label={'Email'} defaultValue={'xoycn@yahoo.com'} type={'text'} />


        <SettingInput label={'Password'} defaultValue={'XXXXXXXX'} placeholder="XXXXXXXX" type={'password'} />

      </div>
    </div>
  )
}

export default SecuritySetting