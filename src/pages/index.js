import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div className="h-screen bg-black">
        <iframe
          src="http://express.adobe.com/page/uWBT4Xqx98HGi/"
          width="100%"
          height="100%"
          // allowtransparency="true"
          // allow="encrypted-media"
        ></iframe>
      </div>
    </div>
  );
}
