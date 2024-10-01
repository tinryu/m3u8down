'use client'
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import DynamicProgressBar from "../components/progressBar";
import ButtonEditInput from "../components/editbutton";
import { formarSize } from '../../helpers/format';
import Loading from '../components/loading';

const page = () => {
  // const obj = {
  //     "contentType": "video/mp4",
  //     "format": "mp4",
  //     "headers": {
  //         "Cookie": "tt_chain_token=2XxSBIb4wFPPBhb5EULV0Q==; store-country-code-src=uid; passport_csrf_token=00db675a1a05f25fb0f808bb49fa33cd; passport_csrf_token_default=00db675a1a05f25fb0f808bb49fa33cd; multi_sids=6856357447972865026%3A740d42a15dcf703bb1f05944877c165d; cmpl_token=AgQQAPOFF-RO0o8YQmIztB07_5iDR4aVP4UOYNWfjQ; sid_guard=740d42a15dcf703bb1f05944877c165d%7C1722400866%7C15552000%7CMon%2C+27-Jan-2025+04%3A41%3A06+GMT; uid_tt=5a7b169024411330dfc8fc7037d17e29fe8070f3e01b5c934126346b37da9b1c; uid_tt_ss=5a7b169024411330dfc8fc7037d17e29fe8070f3e01b5c934126346b37da9b1c; sid_tt=740d42a15dcf703bb1f05944877c165d; sessionid=740d42a15dcf703bb1f05944877c165d; sessionid_ss=740d42a15dcf703bb1f05944877c165d; sid_ucp_v1=1.0.0-KDI1YjJjZjg5N2QyMTRhZmRhOGQ4MDFjOWMzOTYzOTAyMzYyZTNmOTEKIQiCiJvc25irk18Q4oCntQYYswsgDDD32pr5BTgIQApIBBADGgZtYWxpdmEiIDc0MGQ0MmExNWRjZjcwM2JiMWYwNTk0NDg3N2MxNjVk; ssid_ucp_v1=1.0.0-KDI1YjJjZjg5N2QyMTRhZmRhOGQ4MDFjOWMzOTYzOTAyMzYyZTNmOTEKIQiCiJvc25irk18Q4oCntQYYswsgDDD32pr5BTgIQApIBBADGgZtYWxpdmEiIDc0MGQ0MmExNWRjZjcwM2JiMWYwNTk0NDg3N2MxNjVk; store-idc=alisg; store-country-code=vn; tt-target-idc=alisg; tt-target-idc-sign=f65CmVd_Qw9U7XDenvbzWQyOvEREnQEryrL06k5xTJnrvqzBigFkmv2GB8TwJPOuNnBe3R67YelaAldijXSrE49v1fGOKe7tEyvbxb7ZKbkYmetCI8rg4OuSrwPTyENFbd3ttm0T-JJR_eK9lhjw-r-tILlW4PanLKykwLsmPsXpIOgN3gstgJFmHB5wJXqfTmJgI73IbXpQC0GwjaMg4G_KpWuYr-seK8hXNTXZp8sdBUZvPNSgYsUHHTANA5p60h7sZz9z1zi9LQ43s5m4JN7JkA7f8nUVx2fmR2MljrHdfSWJ-CAYo3xWyiPzj7zc5wuvYk_lRdqwhuBw8kw0AeJCnyd9OKxCwJxjzXYDPpULxTeqt_GV3ZfyyIyU_3c9-QKrQXRnSccDPKsCFudRt71lxokeJn9O4H0pvL8THDWQ_H5Khlu-hHXd7mNQK0B1akZhWpo0ojlnmlIULvfZ-fESxu3AX44PHxRSsohEjnc8E1emS_CLsvNjYN-9QFdC; tt_csrf_token=q4vxG7HQ-rN-3KnTCsAAF-Wn4wTfhM6sRitE; ak_bmsc=E6E850FC253C202F363D1138C21119E5~000000000000000000000000000000~YAAQPPrSF+299iuSAQAA2/8eLRly8qYYKkX/Ki1g9/coPV24CVBBSKt60diTrclV9kz1HXEMtFPYzz46yErxig0HpXE/sJShL4Qj9IU1Sy7gerarxuVSg0fJcY/wVeOr20wiyya1ocQS+laqvzV7gHkF++D3rjx78+tC51eJSF+JAXEgVTwoY18NNRof8rjsKWQnDN6ZUI0usZjWc+5SxvZ27Bl4UMltEBfdE1o9dPrvO6rzEm7omBFWV5RAIcDZwS7O5H976m6VJCqRH7D1pA31r0IFVK4UyYo40mGQcefandNjp4OZ/Bm9qmnTQArT+Rac8bzoNEOIKsxmvmIq9pRncWvHbkDJMONAdG/7NxdAql4X7Xq6aXnqVErp4Qi2zZlrv6G0kgPTQQ==; bm_sv=52BB321E52E4A9B3021DB35E60F8E760~YAAQPfrSF86wOSqSAQAAHVcuLRlUoGa8DoqxvlwB88zMW50ZNHljA6WWOJA5A7e0WLDm6AaKJLyDWB9z23YSwTX8XPZgrrcYPiFSThGg7RR6U8h97G2KGlvl+Z3FoL/wqgvjViw85JhDM9VN0L3F6ZjPeWSdZ5RBCVu6xLJ62lZ8nXYsIkK9EyWY5/6EgJe4Tg6UxBNK7gX+1vZWhnXs02vm1ZMKudF939m0V1gNeC7MwVDDEOgXwaCMmMOKXvAj~1; odin_tt=e50cfce4e064c2fb9db72c5bad323fb329d5fec190f5de9bd80515feff3613c75da33ebff60e999e3f05ad07f94c22908a89244075a18709f5f72c8610f7822163f4a1059832ab6216323f1e3fe99639; ttwid=1%7C2BI-nDlFab6EoLnAD_6zNvK22zz4t4UD4YwBACmiqUw%7C1727334866%7C0b0865082635a4cde91df66230433be28326b86f7d895224e92ca3e53b7a30ce; msToken=QBt0WMI9Lo-ZvIl8F8bwCH5O6qBL0N0DoiyZ_RNOfMQtyky-EzfW9RF4IArrGT4hxmOvgOaG9GJbhxXPGTwFzvVOMWBsKxkI0hHuYkhPP0EL4b3luyHqe8yo1QHNEEFw4lgeZLM6n_8aFcKBkaP_ZKFI",
  //         "Referer": "https://www.tiktok.com/",
  //         "Sec-Fetch-Dest": "video",
  //         "Sec-Fetch-Mode": "no-cors",
  //         "Sec-Fetch-Site": "same-site",
  //         "Sec-GPC": "1",
  //         "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
  //         "sec-ch-ua": "\"Brave\";v=\"129\", \"Not=A?Brand\";v=\"8\", \"Chromium\";v=\"129\"",
  //         "sec-ch-ua-mobile": "?0",
  //         "sec-ch-ua-platform": "\"Windows\""
  //     },
  //     "method": "GET",
  //     "name": "no-filename",
  //     "requestId": "13478",
  //     "size": 57969153,
  //     "storageKey": "storage1335337559",
  //     "type": "mp4",
  //     "url": "https://v16-webapp-prime.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/o8nUmAp5ZYz3pCriSEKBslBPiZQyApzwExIB5/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=3624&bt=1812&cs=0&ds=6&ft=I~da4oTzD12Nv0KZohIxRRhNglBF-UjNSEopiX&mime_type=video_mp4&qs=0&rc=Nmk5ZGc4NTg6Omk3OWU0NEBpamw6M205cmV4dDMzODczNEAtMF9fXzFeNV4xNGNfYDY0YSNoMGNqMmQ0YWBgLS1kMS1zcw%3D%3D&btag=e00098000&expire=1727356714&l=20240926071424FE32A3369857240D31A9&ply_type=2&policy=2&signature=5d5530210f115a8df15a469098400577&tk=tt_chain_token",
  //     "initiator": "https://www.tiktok.com/explore",
  //     "title": "(50)Explore - Find your favourite videos on TikTok"
  // }
  const searchParams = useSearchParams();
  const store = searchParams.get('store');
  const [data, setData] = useState<any>(Object);
  const apiLocal = 'http://localhost:5050/api/video';

  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await fetch(apiLocal + `/m3u8/` + store);
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
