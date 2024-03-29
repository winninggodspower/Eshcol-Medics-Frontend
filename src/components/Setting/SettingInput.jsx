import { useRef, useState } from "react"
import EditIcon from "./EditIcon"


function SettingInput({label, defaultValue, type, placeholder}) {
    let [ isDisable, setIsDisable ] = useState(true)
    let inputRef = useRef()

    let handleEditIconClick = ()=>{
        setIsDisable(false);
        inputRef.current.active;
    }

    return (
        <label className="flex justify-between items-center border border-grey-8 border-opacity-40 mx-auto py-4 px-7 md:px-[54px] md:py-5 mt-[15px] relative mb-4 md:mb-7">
            <input ref={inputRef} placeholder={placeholder} className="p-0 text-sm font-light border-0 md:text-xl opacity-40 focus:border-0 focus:outline-none focus:ring-0 " type={type} defaultValue={defaultValue} disabled={isDisable} />
            <EditIcon onClick={handleEditIconClick} />
            <span id="tool-top" className="absolute top-0 left-[calc(1.75rem-15px)] md:left-[calc(54px-15px)] text-sm px-[15px] py-[5px] -translate-y-1/2 bg-white">{label}</span>
        </label>
    )
}

export default SettingInput