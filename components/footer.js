import React from "react";
import { LightningBoltIcon } from "@heroicons/react/solid";
import { useRouter } from "next/dist/client/router";
import Link from 'next/link';



function Footer() {
  return <footer className="grid w-full bg-gray-100 text-gray-500 p-3">
    <div className="grid grid-cols-1 text-sm md:grid-cols-2 lg:grid-cols-3 gap-y-4 grid-flow-row-dense">
      {/* top/middle section */}
      <div className="flex justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2"> {/* items center makes centered vertcally */}
        <LightningBoltIcon className="h-5 mr-1 text-green-400"/>
        <div>
          <Link href="https://sustainability.google/commitments/?utm_source=googlehpfooter&utm_medium=housepromos&utm_campaign=bottom-footer&utm_content=">
          <p className="link">Carbon neutral since 2007</p>
          </Link>
        </div>
        
      </div>

      {/* left 3 links */}
      <div className="flex justify-center space-x-8 pl-10 whitespace-nowrap md:justify-start">
        <div>
          <Link href="https://www.google.com/intl/en_us/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1">
            <p className="link">Advertising</p>
          </Link>
        </div>
        <div>
          <Link href="https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1">
            <p className="link">Business</p>  
          </Link>
        </div>
        <div>
          <Link href="https://google.com/search/howsearchworks/?fg=1">
            <p className="link">How Search works</p>
          </Link>
        </div>
      </div>

      {/* right 3 links */}
      <div className="flex justify-center space-x-8 pr-10 md:ml-auto">
        <div>
          <Link href="https://policies.google.com/privacy?hl=en&fg=1">
            <p className="link">Privacy</p>
          </Link>
        </div>
        <div>
          <Link href="https://policies.google.com/terms?hl=en&fg=1">
            <p className="link">Terms</p>
          </Link>
        </div>
        <div>
          <p className="link">Settings</p>
        </div>
      </div>

    </div>
  </footer>
}

export default Footer;
