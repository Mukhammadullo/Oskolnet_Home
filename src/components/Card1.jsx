import React from 'react'

const Card1 = ({ title, intitle, num }) => {
    return (
        <div className='mob:m-[10px]'>
            <h1 className='m-[5px] font-bold text-[26px] text-[#263057]'>{title}</h1>
            <h2 className='m-[5px] font-bold'>{intitle}</h2>
            <p className=' m-[5px] font-mono'>Подробнее</p>
            <div className='flex'>
                <h1 className='font-bold text-[18px]'>{num}</h1>
                <p>₽/мес</p>
            </div>

            <button className='w-[180px] h-[40px] rounded-[16px] mt-[10px] text-[white] bg-[#6984F0]'>Подключить</button>
        </div>
    )
}

export default Card1