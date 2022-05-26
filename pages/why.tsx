import Image from 'next/image'
import React from 'react'

function whyPage() {
  return (
    <div>
      {/* Top intro for Why page */}
      <div
        className=" "
        style={{
          backgroundImage:
            ' linear-gradient(to right bottom, #86c546, #61ca74, #44cc9c, #43cbba, #60c8cd)',
        }}
      >
        <div className="relative mx-auto flex flex-col items-center space-y-6 pb-16 lg:max-w-6xl lg:flex-row">
          <img src="/why.jpg" alt="" className="z-10 " />
          <div className="lg:max-w-1xl static right-12 z-10 text-center text-3xl text-gray-100 lg:absolute lg:text-5xl">
            <h1 className=" ">“มาร่วมกันทำให้กรุงเทพฯ เป็น</h1>
            <h1>เมืองน่าอยู่สำหรับทุกคน”</h1>
            <p className="py-10 text-xl">ชัชชาติ สิทธิพันธุ์</p>
          </div>
        </div>
      </div>

      {/* Details of  page */}

      <div className=" mx-auto flex max-w-2xl flex-col space-y-14 py-24 px-4">
        <h4 className="text-3xl font-bold lg:text-5xl">
          ทำไมชัชชาติถึงลงสมัครเป็นผู้ว่าฯ กทม.
        </h4>
        <span className="text-md leading-8 text-gray-500 lg:text-lg">
          “ผมเป็นคนกรุงเทพฯ ตั้งแต่เกิด ได้เห็นปัญหาและเรียนรู้เมืองกรุงเทพฯ
          จากหลากหลายมุม ผ่านการใช้ชีวิตไม่ต่างจากพวกเราอีกนับล้าน ๆ
          คนในกรุงเทพฯ ใช้ขนส่งสาธารณะเป็นประจำ
          วิ่งออกกำลังกายในสวนสาธารณะทุกเช้า เดินถนน กินข้าว ตามข้างทาง
          รับรู้ถึงปัญหา อุปสรรค ข้อขัดข้องต่าง ๆ ของคนใช้ชีวิตในเมืองหลวง
          ตั้งแต่ระดับผู้บริหาร พนักงานเงินเดือน นักธุรกิจ พ่อค้า แม่ค้า
          มอเตอร์ไซค์รับจ้าง นักเรียน นักศึกษา ประกอบกับความรู้และประสบการณ์
          ที่เคยทำงานทั้งในฐานะวิศวกร อาจารย์ นักวิจัย งานการเมือง นักธุรกิจ
          ผู้บริหาร งานชุมชน
          ทำให้ผมมั่นใจว่าจะสามารถเสนอแนวทางที่จะทำให้กรุงเทพฯ ดีขึ้น
          ผมเชื่อว่าการทำให้กรุงเทพฯ ดีขึ้น
          ไม่สามารถทำให้สำเร็จได้ด้วยคนเพียงคนเดียว
          ต้องอาศัยความร่วมแรงร่วมใจของคนจำนวนมาก ผมมั่นใจว่าจะสามารถประสานงาน
          สร้างความไว้ใจ เสริมความร่วมมือร่วมใจของคนทุกกลุ่ม
          เพื่อให้เกิดความสามัคคี ร่วมกันทำกรุงเทพฯ
          ให้เป็นเมืองที่น่าอยู่สำหรับทุกคน”
        </span>
        <div className="relative min-h-[380px] w-full   lg:min-w-full ">
          <Image
            src="/why1.jpg"
            alt="Logo"
            layout="fill" // required
            objectFit="cover" // change as you like
          />
        </div>
      </div>
      <img src="/gline.svg" alt="" className="mx-auto rounded-sm px-12 py-8" />
      <h4 className=" text-center text-3xl font-bold">แชร์หน้านี้</h4>
      <div className="mx-auto flex flex-col items-center  justify-center py-6 ">
        <div className="flex space-x-4">
          <img src="/bfb.svg" alt="" className="" />
          <img src="/bline.svg" alt="" />
          <img src="/share.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default whyPage
