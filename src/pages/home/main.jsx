import React from 'react'

export default function main() {
  return (
       <div      style={{
    background: 'linear-gradient(180deg, #162556 0%, #2c3a7b 50%, #3b446f 100%)'
  }}
        className="mx-auto flex 
       p-8 flex-col items-center gap-8  w-full  h-[350px]   ">
        <h1 className='text-white font-semibold text-[35px] '>Şəbəkə inzibatçılığı və texniki dəstək şöbəsi</h1>
          <div className=" w-[40%] items-center justify-between rounded-full border border-[#D4D4D4] hover:border-[#92B5F6] sm:flex sm:h-[48px] sm:px-6">
            <input
              onChange={(e) => setInputValue(e?.target?.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleFilter();
                }
              }}
              type="text"
              placeholder="Axtar"
              className="hidden w-full bg-transparent text-base text-[#1A1A1A] placeholder-[#9C9C9C] outline-none sm:block"
            />
            <button className="ml-2  flex-shrink-0 cursor-pointer"> 
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="white" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 22L20 20" stroke="white" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </button>
          </div>
          <button className='px-16 py-3.5 bg-[#e6e6e6] text-[#1E3A8A] border border-[#1E3A8A]  font-semibold rounded-full   hover:bg-[#1E3A8A] hover:border-[#1E3A8A] hover:text-white hover:shadow-lg'>Müraciət et</button>
        </div>
  )
}
