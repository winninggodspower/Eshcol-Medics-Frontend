import CustomPageHeader from "../../../components/CustomPageHeader";
import SettingInput from "../../../components/Setting/SettingInput";

function BillingInformationSetting() {
  return (
    <div className='bg-white grow md:border-e-4'>
      <CustomPageHeader title={'Billing information'} />

      <div className="font-inter mt-11 md:mt-[54px] ">

        <SettingInput label={'Card details'} defaultValue={'1235XXXXXXXXXXX'} type={'text'} />

        <SettingInput label={'Expiry date'} defaultValue={'19/07'} type={'date'} />

        <SettingInput label={'CVV'} defaultValue={'XXX'} placeholder="XXX" type={'number'} />

      </div>
    </div>
  )
}

export default BillingInformationSetting