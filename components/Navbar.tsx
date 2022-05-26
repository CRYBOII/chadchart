import Image from 'next/image'
import React, { useState } from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { useRouter } from 'next/router'
function Navbar() {
  const { pathname } = useRouter()
  const [menu, setMenu] = useState(false)

  const menus = (
    <>
      <Link href={'/why'}>
        <div
          onClick={() => setMenu(false)}
          className={`btnNav ${
            pathname === '/why' && 'rounded-full bg-black text-white'
          }`}
        >
          <p>ทำไม?</p>
          <p className=" text-sm lg:text-lg    ">Why</p>
        </div>
      </Link>

      <Link href={'/policy'}>
        <div
          onClick={() => setMenu(false)}
          className={`btnNav ${
            pathname.startsWith('/policy') && 'rounded-full bg-black text-white'
          }`}
        >
          <p>นโยบาย</p>
          <p className=" text-sm lg:text-lg  ">Policies</p>
        </div>
      </Link>
      <div
        className={`btnNav`}
        onClick={() => window.open('https://github.com/CRYBOII')}
      >
        <p>นโยบายรายเขต</p>
        <p className=" text-sm lg:text-lg  ">District Policies</p>
      </div>
      <div
        className={`btnNav`}
        onClick={() => window.open('https://share.traffy.in.th/teamchadchart#')}
      >
        <p>ปัญหาเส้นเลือดฝอย</p>
        <p className=" text-sm lg:text-lg  ">Capillaries (micro issues)</p>
      </div>
      <Link href={'/faq'}>
        <div
          onClick={() => setMenu(false)}
          className={`btnNav ${
            pathname.startsWith('/faq') && 'rounded-full bg-black text-white'
          }`}
        >
          <p>ตอบข้อสงสัย</p>
          <p className=" text-sm lg:text-lg  ">FAQ</p>
        </div>
      </Link>
    </>
  )
  return (
    // Stick navbar to the top of the page
    <div className="  sticky top-0 z-50  select-none bg-[#70cc26] shadow-sm">
      <div className="flex items-center justify-between px-2 md:px-14">
        <div className=" flex w-[66px]  cursor-pointer  items-center lg:h-[80px] lg:w-[100px]">
          <Link href={'/'}>
            <Image src="/logo.svg" objectFit="fill" width={100} height={100} />
          </Link>
        </div>
        <div className=" flex items-center">
          <div className="  hidden font-mono text-xl font-bold tracking-tighter lg:flex ">
            {menus}
          </div>
          {!menu ? (
            <MenuIcon
              className=" h-6 w-6 cursor-pointer transition delay-500 ease-in-out  lg:hidden "
              onClick={() => setMenu(!menu)}
            />
          ) : (
            <XIcon
              className=" h-6 w-6 cursor-pointer transition delay-500 ease-in-out  lg:hidden"
              onClick={() => setMenu(!menu)}
            />
          )}
        </div>
      </div>
      {/* Show & Hide if users click on humberger or close ICON */}
      {menu && (
        <div className="absolute z-50  flex w-full flex-col items-center justify-center space-y-2 bg-[#70cc26] py-3  font-mono text-xl font-semibold tracking-tighter lg:hidden">
          {menus}
        </div>
      )}
    </div>
  )
}

export default Navbar
