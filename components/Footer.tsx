import React from 'react'

function Footer() {
  return (
    <div className=" bg-black lg:flex ">
      <div className="mx-auto py-14 text-center text-white lg:flex lg:max-w-[80vw] lg:space-x-9  lg:text-left">
        <div className=" flex flex-col  items-center lg:flex lg:w-1/4 lg:items-start lg:space-y-5 ">
          <img src="logow.svg" alt="" className=" w-[100px]" />
          <p className=" max-w-xs  text-sm  lg:max-w-full">
            ท่าน ชัชชาติ ไม่ได้เป็นคนสร้างเว็บนี้ เเต่เว็บนี้ถูกสร้างขึ้นเอง
            จากนโยบาย 200+ ข้อของท่าน ชัชชาติ
          </p>
        </div>
        <div className=" py-4  lg:flex lg:space-x-14">
          <div className=" flex flex-col space-y-4 text-lg font-bold">
            <h4>ทำไม?</h4>
            <h4>นโยบาย</h4>
            <h4>ตอบข้อสงสัย</h4>
          </div>
          <div className=" flex flex-col space-y-4 text-lg font-bold">
            <h4>ติดต่อ</h4>
            <h4>666699999@gmail.com</h4>
            <div className="mx-auto flex space-x-4 lg:mx-0">
              <img src="/fb.svg" alt="" />
              <img src="/line.svg" alt="" />
            </div>
          </div>
        </div>
        <div className=" flex-1"></div>
      </div>
    </div>
  )
}

export default Footer
