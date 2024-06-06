import { getImportants } from "@/lib/newt_important";
import Link from "next/link";
import { TfiAnnouncement } from "react-icons/tfi";

export default async function Important(){
  const { displays } = await getImportants({
    limit: 1,
  });
  if (!displays || displays.length === 0) {
    return null;
  }
  return(
      <Link href={displays[0].link}>
        <div className="fixed flex justify-center items-center z-[10] p-2 border border-primary_text_color top-24 md:top-6 left-6 rounded-full bg-primary_color text-primary_text_color">
          <span className="mr-2"><TfiAnnouncement /></span>
          <span className="text-lg">
            {displays[0].display}
          </span>
        </div>
      </Link>
  )
}