import Link from 'next/link';
export default function PhotoSearchPage() {
  return (
    <div className="page flex flex-col justify-between relative">
      <div className="live-feedback absolute z-[100] flex flex-col justify-center items-center w-full h-full">
      <p className="text-2xl my-5 font-bold text-white">Mushroom too close...</p>
        <div className="w-60 h-60 border-2 border-white"></div>
        <p className="text-2xl my-5 font-bold text-white drop-shadow-2xl">Move back!</p>
      </div>
      <img 
        src="/images/user_img_lg.png" 
        alt="user photo of mushroom" 
        className="absolute w-full h-full object-cover z-[50]"
      />
      <div className="top relative w-full h-40 opacity-100 z-[100] flex flex-row justify-center items-center">
        <div className="toolbar absolute z-[150] flex flex-row">
          <Link href="/dashboard" passHref>
            <img src="/icons/back_arrow.svg"/>
          </Link>
          
          <img className="ml-60" src="/icons/flash.svg"/>
        </div>


        <div className="bg-black opacity-50 w-full h-full"></div>
      </div>
      <div className="bottom relative w-full h-40 opacity-100 z-[100] flex flex-row justify-center items-center">
        <div className="toolbar absolute z-[150] flex flex-row">
          <img src="/icons/album.svg"/>
          <Link href="/mushroom" passHref>
            <div className="take-photo mx-20 w-20 h-20 bg-gray-500 rounded-full border-4 border-white opacity-100"></div>
          </Link>
          <img src="/icons/flip.svg"/>
        </div>


        <div className="bg-black opacity-50 w-full h-full"></div>
      </div>
    </div>
  );
}
