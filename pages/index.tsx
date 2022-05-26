import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Home: NextPage = () => {
  const policies: string[] = [
    'ปลอดภัยดี',
    'สุขภาพดี',
    'สร้างสรรค์ดี',
    'สิ่งแวดล้อมดี',
    'บริหารจัดการดี',
    'บริหารจัดการดี',
    'เรียนดี',
    'โครงสร้างดี',
    'โครงสร้างดี',
    'เศรษฐกิจดี',
    'เดินทางดี',
  ]
  return (
    <div className="">
      {/* Using Next Image to optimize loading time for web app */}
      <div className="relative h-[260px] w-full  md:h-[360px] lg:h-[800px] ">
        <Image
          src="/cover.jpeg"
          alt="Logo"
          layout="fill" // required
          objectFit="cover" // change as you like
        />
      </div>
      {/* Index page intro section*/}
      <div className=" mx-auto flex   flex-col items-center  py-16 px-6 lg:max-w-[95vw]">
        <div className=" flex flex-col items-center justify-center space-y-6">
          <h2 className="text-2xl font-bold lg:text-4xl ">
            สิ่งที่ผมอยากเห็น คือ กรุงเทพฯ เป็นเมืองน่าอยู่ "สำหรับทุกคน”
          </h2>
          <p className=" text-md font-semibold text-gray-600">
            ชัชชาติ สิทธิพันธุ์
          </p>
        </div>
        <div className=" lg:space-x-18 flex  flex-wrap space-y-9 py-24 lg:flex-nowrap ">
          <div className=" flex flex-col justify-center  space-y-10 lg:w-4/6  ">
            <h2 className="text-2xl font-bold lg:text-5xl ">
              ทำไม? ผู้ว่า กทม.
            </h2>
            <p className="text-lg text-gray-500">
              ผมเป็นคนกรุงเทพฯ ตั้งแต่เกิด ใช้ชีวิตและพบเจอปัญหาเช่นเดียวกัน
              ผมมั่นใจว่าจะสามารถสร้างความร่วมมือร่วมใจ ร่วมกันทำกรุงเทพฯ
              ให้เป็นเมืองที่น่าอยู่สำหรับ ทุกคน
            </p>
            <h4 className="text-lg font-bold lg:text-3xl ">อ่านเพิ่มเติม</h4>
          </div>
          <div className=" m-0  flex  w-full justify-center ">
            <div className="relative min-h-[350px] w-full   lg:min-w-full ">
              <Image
                src="/policy_mock_thumbnail.1ae9c20.jpg"
                alt="Logo"
                layout="fill" // required
                objectFit="cover" // change as you like
              />
            </div>
            {/* <img src="/policy_mock_thumbnail.1ae9c20.jpg" alt="" /> */}
          </div>
        </div>
      </div>

      <div
        className=" min-h-32  w-full "
        style={{
          backgroundImage:
            'linear-gradient(to left bottom, #dcfdf7, #a7f5da, #7febaf, #6ddd75, #70cc26)',
        }}
      >
        <div className=" mx-auto flex   flex-col items-center  py-16 px-6 text-gray-800 lg:max-w-[80vw]">
          <div className="  flex-warb space-y-8 md:flex-nowrap lg:flex lg:space-x-12">
            <div className="flex-warb items-center text-4xl md:flex-nowrap lg:flex lg:space-x-5 lg:text-5xl">
              <p className="  font-bold">200</p>
              <div className=" flex  items-center space-x-2  font-bold ">
                <p className="">นโยบาย</p>
                <div className=" h-[3px] w-7 bg-black " />
              </div>
            </div>
            <div>
              <p className=" text-gray-600  lg:text-2xl">
                กรุงเทพฯ เมืองน่าอยู่สำหรับทุกคน"
                คือโจทย์หลักที่ใช้ในการออกแบบนโยบาย
                ทีมเพื่อนชัชชาติจึงศึกษาดัชนีชี้วัดเมืองน่าอยู่ (The Global
                Liveability Index) ของ Economist Intelligence Unit (EIU)
                เพื่อใช้เป็นพื้นฐานในการจัดกลุ่มนโยบายและ
                ดัดแปลงให้ครอบคลุมบริบทของเมืองกรุงเทพฯ จึงนำมาสู่ "กรุงเทพฯ 9
                ดี" หรือ นโยบาย 9 มิติ ดังนี้
              </p>
              <h3 className=" py-4 text-xl font-bold  lg:text-3xl">
                ดูนโยบายทั้งหมด
              </h3>
            </div>
          </div>
        </div>

        <div className=" mx-auto max-w-4xl flex-wrap items-center space-x-8 py-16  text-center lg:flex">
          <div className=" flex flex-col  space-y-7 py-8 text-gray-900  lg:items-end ">
            {policies.map((x, i) => (
              <div
                className=" flex-wrap items-center space-y-4 text-center lg:flex lg:space-x-12"
                key={i}
              >
                <h4 className="bigPolicy lea">{x}</h4>
                <Link href={'/policy'}>
                  <button className=" btnPolicy items-center ">ดูนโนบาย</button>
                </Link>
              </div>
            ))}
          </div>
          <div className=" flex-wrap items-center lg:flex"></div>
          <h1 className=" text-4xl font-bold ">=</h1>
          <h1 className=" text-5xl font-bold "> เมืองน่าอยู่</h1>
        </div>
      </div>
      <div className=" bg-[#70cc26] py-6">
        <div className=" mx-auto flex max-w-2xl flex-col  space-y-8 text-center">
          <div className="mx-auto ">
            <img src="/help.svg" alt="" />
          </div>
          <h4 className=" text-xl font-bold lg:text-3xl">เพื่อนชัชชาติ</h4>
          <div className="mx-auto lg:flex">
            <div className="py-2  px-4 lg:border-r-2">
              <h1 className=" text-5xl font-bold">11,800</h1>
              <p className=" text-2xl">คน</p>
            </div>
            <div className="border-t-2 border-white px-4   py-2 lg:border-t-0">
              <h1 className=" text-5xl font-bold">50</h1>
              <p className=" text-2xl">เขต</p>
            </div>
          </div>
          <button className=" mx-auto w-fit transform rounded-full bg-black  px-6 py-2 text-xl font-bold  text-white transition duration-200 ease-in-out   hover:scale-x-105">
            ชวนอ่านหนังสือพิมพ์ชัชชาติ
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
