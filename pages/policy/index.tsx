import { SearchIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import React, { useState } from 'react'
import {
  filterByCategory,
  filterByPolicy,
  policiesAll,
} from '../../MOCK/policies'

function policy() {
  const [selectCate, setSelectCate] = useState<string>('ทั้งหมด')
  const [seeMore, setSeeMore] = useState<boolean>(false)
  const all = policiesAll
  const policies = filterByPolicy
  return (
    <div
      className=""
      style={{
        backgroundImage:
          'linear-gradient(to left bottom, #d2fbfb, #c7fbf0, #c4f9df, #c8f6cb, #d5f1b5)',
      }}
    >
      <div className="container mx-auto max-w-7xl py-16 px-5">
        <div className=" flex  flex-col  space-y-6 lg:flex-row lg:space-y-0 lg:space-x-6">
          <h1 className=" text-3xl font-bold  lg:w-1/3 lg:text-5xl">นโยบาย</h1>
          <span className=" text-xl text-gray-500 lg:text-3xl">
            ละการเข้าพื้นที่พบกับคนที่อยู่อาศัยทั่วกรุงเทพฯ
            อยู่บนรากฐานของข้อมูลสถิติที่เป็นวิทยาศาสตร์
            คิดสร้างสรรค์ร่วมกับนักวิชาการชั้นแนวหน้าจากหลายสถาบันการศึกษา
            และพร้อมที่จะลงมือดำเนินการได้ทันทีด้วยฝีมือของผู้บริหารคุณภาพ
          </span>
        </div>
        <div className="  my-11  flex    max-w-xl items-center rounded-full border-2  border-gray-900 bg-white  py-2 px-3 text-xl shadow-inner">
          <input
            type="text"
            placeholder="ค้นหานโยบาย"
            className=" flex-1 bg-transparent outline-none"
          />
          <SearchIcon className="h-4 w-4 " />
        </div>
        {/* Scaping DATA from from original web app   */}
        <div className=" flex flex-col space-y-6 py-6">
          <h2 className="text-lg font-bold lg:text-2xl">ดูนโยบายตามหมวดหมู่</h2>
          <div className=" flex select-none  flex-wrap ">
            {Object.keys(policies).map((x, i) => (
              <button
                key={i}
                className={`btnPolicy1 ${
                  selectCate === x && 'bg-black  text-white'
                }`}
                onClick={() => setSelectCate(x)}
              >
                {x} ({policies[x].length})
              </button>
            ))}
          </div>
        </div>
        {/* Don't have enough data to mapping related subjects into policies array, so i can't do nothings with it*/}
        <div className=" flex flex-col space-y-6 py-6">
          <div className=" flex items-center justify-between">
            <h2 className=" text-lg font-bold lg:text-2xl">
              หัวข้อที่เกี่ยวข้อง
            </h2>
            {seeMore && (
              <XIcon
                className=" h-6 w-6 cursor-pointer"
                onClick={() => setSeeMore(false)}
              />
            )}
          </div>
          <div className=" flex flex-wrap  transition-all ease-out ">
            {seeMore ? (
              filterByCategory.map((x, i) => (
                <button className=" btnPolicy1">{x}</button>
              ))
            ) : (
              <>
                {filterByCategory.slice(0, 6).map((x, i) => (
                  <button className=" btnPolicy1">{x}</button>
                ))}

                <button
                  className=" btnPolicy1"
                  onClick={() => setSeeMore(true)}
                >
                  ดูหัวข้อทั้งหมด •
                </button>
              </>
            )}
          </div>
        </div>
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
                  <h2 className=" text-md font-semibold text-gray-500 lg:text-lg">
                    {all[x].des}
                  </h2>
                </div>
                <div className=" flex space-x-3">
                  {all[x].tags.map((t) => (
                    <div className="btnPolicy1 h-fit border-[1px] text-sm ">
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

export default policy
