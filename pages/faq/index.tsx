import { XIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import React, { useState } from 'react'
import { faqAll, filterByFaq } from '../../MOCK/policies'
import { mapPoclicyToArr } from '../../utils/data_structuring'

const faqIndex = () => {
  const [selectCate, setSelectCate] = useState<string>('ทุกคำถาม')
  const [seeMore, setSeeMore] = useState<boolean>(false)
  const all = faqAll
  const policies = filterByFaq
  return (
    <div
      className=""
      style={{
        backgroundImage:
          'linear-gradient(to left bottom, #d2fbfb, #c7fbf0, #c4f9df, #c8f6cb, #d5f1b5)',
      }}
    >
      <div className="container mx-auto max-w-3xl py-16 px-5 lg:max-w-7xl">
        <div className=" flex  flex-col  space-y-6 lg:space-y-6">
          <h1 className=" text-3xl font-bold  lg:w-1/3 lg:text-5xl">
            ตอบข้อสงสัย
          </h1>
          <span className=" text-xl text-gray-500 lg:text-3xl">
            ตอบทุกข้อสงสัยกับชัชชาติ สิทธิพันธุ์ ทั้งเรื่องราวของชัชชาติ
            ปัญหาเมือง แนวทางนโยบาย และการร่วมเป็นอาสาสมัคร
            เพื่อช่วยกันสร้างกรุงเทพฯ ให้น่าอยู่สำหรับทุกคน
          </span>
        </div>

        <div className=" flex flex-col space-y-6 py-8 lg:py-24">
          <div className=" flex select-none  flex-wrap  ">
            {Object.keys(policies).map((x, i) => (
              <button
                key={i}
                className={`btnPolicy1 ${
                  selectCate === x && 'bg-black  text-white'
                }`}
                onClick={() => {
                  policies[x].length !== 0 && setSelectCate(x)
                }}
              >
                {x} {policies[x].length !== 0 && `(${policies[x].length})`}
              </button>
            ))}
          </div>
        </div>
        {/* Don't have enough data to mapping related subjects into policies array, so i can't do nothings with it*/}

        {/* Green Line */}
        <div className=" flex flex-col space-y-4">
          <div className=" h-[2px] w-full bg-green-400"></div>
          <h2 className=" py-4 text-xl font-semibold lg:text-2xl">
            {policies[selectCate].length} นโยบาย
          </h2>
          {policies[selectCate].map((x: any, i: any) => (
            <Link href={`/policy/example`}>
              <div
                key={i}
                className="  cursor-pointer bg-white p-6 shadow-md transition ease-out hover:bg-green-100 lg:flex lg:justify-between"
              >
                <div className=" flex flex-col  space-y-5">
                  <h1 className="text-lg  font-bold text-gray-700 lg:text-xl">
                    {all[x].name}
                  </h1>
                  {all[x].tags.map((t) => (
                    <div className="btnPolicy1 h-fit w-fit border-[1px] text-sm">
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default faqIndex
