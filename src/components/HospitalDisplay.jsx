
function HospitalDisplay({image, name, address}) {
    return (
        <div className="grid grid-cols-[auto_1fr] md:gap-x-4 gap-x-[0.65rem] md:gap-y-2 gap-y-1">
            <img className="row-span-2" src={image} alt="" />
            <h4 className=" text-xs md:text-base font-semibold">{name}</h4>
            <p className="text-[0.625rem] md:text-sm font-normal opacity-70" >{address}</p>
        </div>
    )
}

export default HospitalDisplay
