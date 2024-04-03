import { Link } from "react-router-dom";
import CustomPageHeader from "../../../../components/CustomPageHeader";
import SettingInput from "../../../../components/Setting/SettingInput";

function BillingInformationSetting() {
  return (
    <div className='relative bg-white grow md:border-e-4'>
      <CustomPageHeader title={'Billing information'} />

      <div className="font-inter mt-11 md:mt-[54px] w-[80%] md:w-[84%] max-w-[519px] mx-auto">

        <SettingInput label={'Card details'} defaultValue={'1235XXXXXXXXXXX'} type={'text'} />

        <SettingInput label={'Expiry date'} defaultValue={'19/07'} type={'date'} />

        <SettingInput label={'CVV'} defaultValue={'XXX'} placeholder="XXX" type={'number'} />

      </div>

      <div className="setting-bottom-btn-container">
        <Link to={'/dashboard/settings/personal-information'} className="btn-short bg-secondary">Prev</Link>
        <Link to={'/dashboard/settings/next-of-kin'} className="btn-short bg-secondary">Next</Link>
      </div>
    </div>
  )
}

export default BillingInformationSetting