export default function Information(){
  return(
    <>
      <div className="relative top-[100vh]">
        <div className="text-primary_text_color w-screen p-8 space-y-3 text-center">
          <div className="flex justify-end items-start h-full">
          <div className="absolute top-0 bg-[#786A5C] text-primary_text_color p-10 py-20 flex items-center justify-center">
            <div className="[writing-mode:vertical-rl] flex flex-col items-start">
              <span className="text-sm mb-2">Information</span>
              <span className="text-3xl">開催情報</span>
            </div>
          </div>
          </div>
          <div className="p-10 bg-primary_color">
            <div className="border-primary_text_color border-solid border-2 p-10">
              <h3 className="text-2xl">2024年6月7日(金) 生徒向け開催</h3>
              <h3 className="text-2xl">2024年6月7日(土) 一般開放</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}