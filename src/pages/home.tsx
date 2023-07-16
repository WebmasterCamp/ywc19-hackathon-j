import Layout from '@/components/Layout/layout';
import { Bai_Jamjuree, Inter } from 'next/font/google';
import Link from 'next/link';

const baiJamjuree = Bai_Jamjuree({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export default function HomePage() {
  return (
    <Layout tab={0}>
      <div className="flex flex-col pb-28 w-screen overflow-hidden">
        <div className="flex w-full items-center justify-center bg-primary-1 px-8 py-5">
          <Link className="h-full w-1/4 " href={'/home'}>
            <img src="/img/logo.png" className="h-full" alt="" />
          </Link>
          {/* <div className="flex items-center justify-center gap-2">
            <div className="rounded-full px-4 py-1 border border-primary-1 text-[#333333	] bg-white">
              เข้าสู่ระบบ
            </div>
            <div className="rounded-full px-4 py-1 bg-[#F8C308] text-[#333333]">
              สมัครสมาชิก
            </div>
          </div> */}
        </div>
        <div className="px-8 py-4 gap-6 flex flex-col">
          <div className="mt-4 rounded-lg relative flex flex-col justify-between p-6 h-[10rem] bg-gradient-to-b from-[#rounded-full1 bg-[#F8C308] from-[#481237] to-[#953D79]">
            <p className="text-white">ซื้อสลากกินแบ่งรัฐบาล</p>
            <Link
              href={'/huay'}
              className="rounded-full px-4 py-1 bg-[#F8C308] text-[#333333] w-[5rem] text-center"
            >
              ซื้อเลย
            </Link>
            <img
              src="/img/artwork.png"
              className="absolute -right-[4rem]"
              alt=""
            />
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center w-full justify-between">
              <p className="text-[16px]">ผลสลากกินแบ่งรัฐบาล</p>
              <p className="text-[12px]">วันที่ 1 กรกฎาคม 2566</p>
            </div>

            <div className="flex items-center justify-center w-full flex-col rounded-lg shadow-md border p-4 gap-4">
              <p>รางวัลที่ 1</p>
              <p>รางวัลละ 6,000,000</p>
              <ul className="flex items-center gap-2 px-2">
                <li className="h-[40px] w-[40px] text-center rounded-md border flex items-center justify-center mb-2 text-xl">
                  9
                </li>
                <li className="h-[40px] w-[40px] text-center rounded-md border flex items-center justify-center mb-2 text-xl">
                  2
                </li>
                <li className="h-[40px] w-[40px] text-center rounded-md border flex items-center justify-center mb-2 text-xl">
                  2
                </li>
                <li className="h-[40px] w-[40px] text-center rounded-md border flex items-center justify-center mb-2 text-xl">
                  6
                </li>
                <li className="h-[40px] w-[40px] text-center rounded-md border flex items-center justify-center mb-2 text-xl">
                  0
                </li>
                <li className="h-[40px] w-[40px] text-center rounded-md border flex items-center justify-center mb-2 text-xl">
                  5
                </li>
              </ul>
            </div>
            <div className="flex w-full items-center gap-4">
              <div className="flex items-center justify-center w-1/2 flex-col rounded-lg shadow-md border p-4 gap-4">
                <p>เลขหน้า 3 ตัว</p>
                <p className="text-sm text-center">2 รางวัลๆ ละ 4,000 บาท</p>
                <div className="flex items-center gap-6">
                  <ul className="flex items-center gap-1 text-sm">
                    <li className=" text-center rounded-md flex items-center justify-center mb-2 text-xl">
                      2
                    </li>
                    <li className=" text-center rounded-md flex items-center justify-center mb-2 text-xl">
                      8
                    </li>
                    <li className=" text-center rounded-md flex items-center justify-center mb-2 text-xl">
                      1
                    </li>
                  </ul>
                  <ul className="flex items-center gap-1 text-sm">
                    <li className=" text-center rounded-md flex items-center justify-center mb-2 text-xl">
                      8
                    </li>
                    <li className=" text-center rounded-md flex items-center justify-center mb-2 text-xl">
                      6
                    </li>
                    <li className=" text-center rounded-md flex items-center justify-center mb-2 text-xl">
                      7
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center justify-center w-1/2 flex-col rounded-lg shadow-md border p-4 gap-4">
                <p>เลขท้าย 3 ตัว</p>
                <p className="text-sm text-center">2 รางวัลๆ ละ 4,000 บาท</p>
                <div className="flex items-center gap-6">
                  <ul className="flex items-center gap-1 text-sm">
                    <li className=" text-center rounded-md flex items-center justify-center mb-2 text-xl">
                      4
                    </li>
                    <li className=" text-center rounded-md flex items-center justify-center mb-2 text-xl">
                      9
                    </li>
                    <li className=" text-center rounded-md flex items-center justify-center mb-2 text-xl">
                      1
                    </li>
                  </ul>
                  <ul className="flex items-center gap-1 text-sm">
                    <li className=" text-center rounded-md flex items-center justify-center mb-2 text-xl">
                      9
                    </li>
                    <li className=" text-center rounded-md flex items-center justify-center mb-2 text-xl">
                      4
                    </li>
                    <li className=" text-center rounded-md flex items-center justify-center mb-2 text-xl">
                      7
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-full flex-col rounded-lg shadow-md border p-4 gap-4">
              <p>รางวัลเลขท้าย 2 ตัว</p>
              <p>1 รางวัลๆ ละ 1,000 บาท</p>
              <ul className="flex items-center gap-6">
                <li className=" text-center rounded-md flex items-center justify-center mb-2 text-xl">
                  1
                </li>
                <li className=" text-center rounded-md flex items-center justify-center mb-2 text-xl">
                  6
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <p className="text-center flex items-center gap-2">
              <span className="mb-1">ดูผลรางวัลทั้งหมด </span>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5 5L1 9"
                  stroke="#481237"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 1L9 5L5 9"
                  stroke="#481237"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </p>
          </div>
          <div className="w-full flex items-center justify-center">
            <p className="text-center flex items-center gap-2 bg-[#F8C308] px-4 py-1 rounded-full">
              <span className="mb-1">ตรวจสอบผลรางวัล </span>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
