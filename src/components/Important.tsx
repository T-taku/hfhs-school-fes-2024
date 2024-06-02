import { getImportants } from "@/lib/newt_important";

export default async function Important(){
  const { displays } = await getImportants({
    limit: 1,
  });
  return(
    <>
      <div className="fixed z-[300] top-24 md:top-6 left-6 rounded-3xl bg-primary_color text-primary_text_color">
        <span className="m-2">
          本校の駐車場は使用できません。詳しくはこちら
        </span>
      </div>
    </>
  )
}