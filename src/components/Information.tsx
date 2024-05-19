export default function Information(){
  return(
    <>
      <div className="relative top-[100vh]">
        <div className="text-primary_text_color w-screen p-2 md:p-8 space-y-3 text-center">
          <div className="flex justify-end items-start h-full">
          <div className="absolute top-0 bg-[#786A5C] text-primary_text_color p-2 py-10 md:p-10 md:py-20 flex items-center justify-center">
            <div className="[writing-mode:vertical-rl] flex flex-col items-start">
              <span className="text-sm mb-2">Information</span>
              <span className="text-2xl md:text-3xl">開催情報</span>
            </div>
          </div>
          </div>
          <div className="p-4 md:p-10 bg-primary_color">
            <div className="border-primary_text_color border-solid border-2 p-10">
              <h3 className="text-xl md:text-2xl hidden md:block">2024年6月7日(金) 生徒開催</h3>
              <h3 className="text-xl md:text-2xl hidden md:block">2024年6月7日(土) 一般開放</h3>
              <h3 className="text-xl md:text-2xl block md:hidden">2024年6月7日(金)<br/>生徒開催</h3>
              <h3 className="text-xl md:text-2xl block md:hidden">2024年6月7日(土)<br/>一般開放</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}