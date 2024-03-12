import CustomPageHeader from "../../../components/CustomPageHeader";
import SettingInput from "../../../components/Setting/SettingInput";

function NextOfKinSetting() {
  return (
    <div className='bg-white grow md:border-e-4'>
      <CustomPageHeader title={'Next Of Kin'} />

      <div className="font-inter mt-11 md:mt-[54px] ">

        <SettingInput label={'Next of kin’s name'} defaultValue={'Jane Cooper'} type={'text'} />

        <SettingInput label={'Next of kin’s address'} defaultValue={'2972 Westheimer Rd. Santa Ana.... '} type={'text'} />

        <SettingInput label={'Next of kin’s phone no.'} defaultValue={'(209) 555-0104'} placeholder="XXX" type={'number'} />

      </div>
    </div>
  )
}

export default NextOfKinSetting