import { NextApiRequest, NextApiResponse } from 'next';
import { Bai_Jamjuree, Noto_Sans_Thai } from 'next/font/google';
import Link from 'next/link';
const notoSansThai = Bai_Jamjuree({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});
function Error({ statusCode }: { statusCode: number }) {
  return (
    <>
      <div
        className={`h-screen flex items-center justify-center ${notoSansThai.className}`}
      >
        {statusCode === 404 ? (
          <div className="flex items-center justify-center flex-col gap-4">
            <img src="/img/logo.png" alt="logo" className="h-12 py-2" />
            <p className="text-9xl font-bold">404</p>
            <p className="text-3xl ">ไม่พบหน้าที่คุณต้องการ</p>
            <Link href="/home" className="mt-4">
              <p className="text-main font-semibold text-xl cursor-pointer px-8 py-2 rounded-md border hover:shadow-sm hover:-translate-y-[0.1rem] transition-all ease-in-out duration-200">
                กลับสู่หน้าหลัก
              </p>
            </Link>
          </div>
        ) : (
          <p className="text-9xl font-bold">
            {statusCode
              ? `An error ${statusCode} occurred on server`
              : 'An error occurred on client'}
          </p>
        )}
      </div>
    </>
  );
}

Error.getInitialProps = ({
  res,
  err,
}: {
  res: NextApiRequest;
  err: NextApiResponse;
}) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
