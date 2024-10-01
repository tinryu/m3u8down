import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center">
        <ul className="flex gap-6 *:shadow-lg text-2xl capitalize font-mono text-green-500">
          <li>
            <Link href="/" className="cursor-none opacity-40">/ videodownloader</Link>
          </li>
          <li>
            <Link href="/" className="cursor-none opacity-40">/ m3u8downloader</Link>
          </li>
        </ul>
        <div className="flex flex-col gap-4 p-4 items-center bg-green-600 w-full h-[150px] font-mono text-white text-center text-xs pl-5">
          <p>The cloud slowly make some tiny rains, I stay calm see cross line</p>
          <p>typing click ... tap tap..</p>
          <p>typing tap tap..</p>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Link href="https://landing-booking.vercel.app/">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><g fill="none"><rect width="40" height="32" x="4" y="8" stroke="#000" stroke-linejoin="round" stroke-width="4" rx="3"/><path fill="#2f88ff" stroke="#000" stroke-width="4" d="M4 11C4 9.34315 5.34315 8 7 8H41C42.6569 8 44 9.34315 44 11V20H4V11Z"/><circle r="2" fill="#fff" transform="matrix(0 -1 -1 0 10 14)"/><circle r="2" fill="#fff" transform="matrix(0 -1 -1 0 16 14)"/></g></svg>
        </Link>
        <Link href="https://www.facebook.com/buitruongtin/">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="#1877f2" d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"/><path fill="#fff" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z"/></svg>
        </Link>
        <Link href="">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><g fill="none"><rect width="40" height="32" x="4" y="8" stroke="#000" stroke-linejoin="round" stroke-width="4" rx="3"/><path fill="#2f88ff" stroke="#000" stroke-width="4" d="M4 11C4 9.34315 5.34315 8 7 8H41C42.6569 8 44 9.34315 44 11V20H4V11Z"/><circle r="2" fill="#fff" transform="matrix(0 -1 -1 0 10 14)"/><circle r="2" fill="#fff" transform="matrix(0 -1 -1 0 16 14)"/></g></svg>
        </Link>
        <Link href="https://t.me/TinTruong">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><defs><linearGradient id="logosTelegram0" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#2aabee"/><stop offset="100%" stop-color="#229ed9"/></linearGradient></defs><path fill="url(#logosTelegram0)" d="M128 0C94.06 0 61.48 13.494 37.5 37.49A128.04 128.04 0 0 0 0 128c0 33.934 13.5 66.514 37.5 90.51C61.48 242.506 94.06 256 128 256s66.52-13.494 90.5-37.49c24-23.996 37.5-56.576 37.5-90.51s-13.5-66.514-37.5-90.51C194.52 13.494 161.94 0 128 0"/><path fill="#fff" d="M57.94 126.648q55.98-24.384 74.64-32.152c35.56-14.786 42.94-17.354 47.76-17.441c1.06-.017 3.42.245 4.96 1.49c1.28 1.05 1.64 2.47 1.82 3.467c.16.996.38 3.266.2 5.038c-1.92 20.24-10.26 69.356-14.5 92.026c-1.78 9.592-5.32 12.808-8.74 13.122c-7.44.684-13.08-4.912-20.28-9.63c-11.26-7.386-17.62-11.982-28.56-19.188c-12.64-8.328-4.44-12.906 2.76-20.386c1.88-1.958 34.64-31.748 35.26-34.45c.08-.338.16-1.598-.6-2.262c-.74-.666-1.84-.438-2.64-.258c-1.14.256-19.12 12.152-54 35.686c-5.1 3.508-9.72 5.218-13.88 5.128c-4.56-.098-13.36-2.584-19.9-4.708c-8-2.606-14.38-3.984-13.82-8.41c.28-2.304 3.46-4.662 9.52-7.072"/></svg>
        </Link>
        <Link href="tel:+84979989759">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="#2f88ff" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M16.9964 7.68584C17.7229 7.68584 18.3923 8.07986 18.745 8.7151L21.1914 13.1219C21.5117 13.6989 21.5268 14.3968 21.2316 14.9871L18.8748 19.7008C18.8748 19.7008 19.5578 23.2122 22.4162 26.0706C25.2747 28.929 28.7743 29.6002 28.7743 29.6002L33.4872 27.2438C34.0779 26.9484 34.7763 26.9637 35.3535 27.2846L39.7728 29.7416C40.4075 30.0945 40.801 30.7635 40.801 31.4896V36.5631C40.801 39.1468 38.4011 41.0129 35.9531 40.1868C30.9251 38.4903 23.1204 35.2601 18.1736 30.3132C13.2268 25.3664 9.99649 17.5617 8.29995 12.5338C7.47393 10.0857 9.34002 7.68584 11.9237 7.68584H16.9964Z"/></svg>
        </Link>
      </footer>
    </div>
  );
}
