
function ChatBubble({ sender = false, message }) {
    return (
        <div className={'w-9/12 sm:w-7/12 text-xs md:text-base p-5 shadow-[0px_4px_120px_rgba(58,86,78,0.15)] mb-7 sm:mb-12 ' + (sender ? ' bg-tertiary text-white float-right rounded-s-3xl rounded-se-3xl' : 'bg-[#D9D9D9] text-[#5D6066] rounded-e-3xl   rounded-ss-3xl')}>
            {message}
        </div>
    )
}

export default ChatBubble