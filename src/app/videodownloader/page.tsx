'use client'
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import DynamicProgressBar from "../components/progressBar";
import ButtonEditInput from "../components/editbutton";
import { formarSize } from '../../helpers/format';
import Loading from '../components/loading';

const page = () => {
  const searchParams = useSearchParams();
  const store = searchParams.get('store');
  const [data, setData] = useState<any>(Object);
  const apiLocal = 'http://localhost:5050/api/video';

  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await fetch(apiLocal + `/video/` + store);
        const { data } = await response.json();
        if(data)
          setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);
  if(!data)
    return <Loading/>;
  
  return (
    <div className="box-content container xs:max-w-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg m-auto p-6">
      <div className="border rounded-md overflow-hidden shadow-sm mb-4">
        <div className="flex justify-between items-center px-4 py-2 border-b-2 border-gray-500 bg-gray-400 text-white">
          <span className="icon-[solar--wind-broken]"></span>
          <h1 className="text-lg font-light mb-0"> MP4 Video Downloader</h1>
        </div>
        <div id="container" className="py-4 px-3">
          <div id="panel" className="mx-auto" style={{ maxWidth: "760px" }}>
            <div id="has-data">
              <div className="flex justify-center items-center flex-col">
                <div className="relative">
                  <span className="icon-[bi--file-earmark] text-7xl"></span>
                  <span
                    id="file-type"
                    className="absolute bottom-1 -end-1 px-2 py-1 mb-3 rounded shadow-sm text-white bg-purple-600"
                  >
                    {data.format}
                  </span>
                </div>
              </div>
              <div
                className="flex justify-center items-center mb-3"
                style={{ maxWidth: "860px", minWidth: "120px" }}
              >
                <span className="text-nowrap bg-gray-800 text-white px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10 me-2 rounded-md">
                  File Name
                </span>
                <ButtonEditInput title={data.title} />
                <Link
                  id="open-source"
                  className="text-gray-800 bg-gray-100 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xl px-2.5 py-2 me-2 leading-5"
                  type="button"
                  href="https://example.com" target="_blank"
                >
                  <span className="icon-[material-symbols--open-in-new-rounded] text-slate-600"></span>
                </Link>
              </div>
              <div className="progress w-full">
                <DynamicProgressBar progresTime={0}/>
              </div>
              <div className="flex justify-center items-center text-base pb-3 font-light">
                <div className="text-end" style={{ minWidth: "120px" }}>
                  <span id="size">10M</span>/<span id="total">{formarSize(data.size)}</span>
                </div>
                <span id="speed" className="ms-3">
                  0Byte/s
                </span>
              </div>
              <div className="flex justify-center items-center mb-4">
                <button
                  id="cancel"
                  type="button"
                  className="p-2.5 mx-2 shadow-lg leading-3 rounded-md bg-[#f8f9fa]"
                >
                  <span className="icon-[bi--x-circle] text-4xl text-red-400"></span>
                </button>
                <button
                  id="start"
                  type="button"
                  className="p-2.5 mx-2 shadow-lg leading-3 rounded-md bg-[#f8f9fa]"
                >
                  <span className="icon-[bi--caret-right-fill] text-4xl text-gray-700"></span>
                </button>
                <button
                  id="pause"
                  type="button"
                  className="p-2.5 mx-2 shadow-lg leading-3 rounded-md bg-[#f8f9fa]"
                >
                  <span className="icon-[bi--pause-fill] text-4xl text-gray-700"></span>
                </button>
                <button
                  id="save"
                  type="button"
                  className="p-2.5 mx-2 shadow-lg leading-3 rounded-md bg-[#f8f9fa]"
                >
                  <span className="icon-[bi--save-fill] text-4xl text-gray-700"></span>
                </button>
                <button
                  id="options"
                  type="button"
                  className="p-2.5 mx-2 shadow-lg leading-3 rounded-md bg-[#f8f9fa]"
                >
                  <span className="icon-[bi--gear-fill] text-4xl text-gray-700"></span>
                </button>
                <button
                  id="downloads-list"
                  type="button"
                  className="p-2.5 mx-2 shadow-lg leading-3 rounded-md bg-[#f8f9fa]"
                >
                  <span className="icon-[bi--folder-symlink] text-4xl text-gray-700"></span>
                </button>
              </div>

              <div className="text-center">
                <p id="clear-cache-status" className="hidden">
                  Cache will be cleared(<span id="clear-cache-timer">0</span>)
                </p>
                <p id="clear-cache-end" className="hidden">
                  Cache cleared
                </p>
                <p id="error-pause" className="text-warning-emphasis hidden">
                  <span id="request-error-detail"></span> / The task has been
                  automatically paused due to more than 30 error requests. Try
                  reducing the download threads and resume.
                </p>
                <p id="error" className="text-danger hidden"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
