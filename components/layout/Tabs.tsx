import tab from "@/assets/tab.svg";
import Image from "next/image";

export default function Tabs({
  tabs,
  setActiveTab,
  activeTab,
  sec,
  smSec,
  minw,
}: any) {
  return (
    <div className="text-[#B3B3B3] mt-5 border-b border-[#E0E0E0] z-20">
      <div className="flex flex-wrap justify-center items-center gap-y-1 lg:text-[13px] ">
        {tabs.map((item: any) => (
          <button
            key={item.id}
            className={`w-1/${
              sec || "4"
            }  sm:rounded-none py-3 sm:py-2 text-[13px] min-h-9  sm:text-xs rounded-t-2xl overflow-hidden relative md:w-1/2 z-20  ${
              item.value === activeTab ? "text-white " : ""
            } 
               ${smSec ? "sm:w-1/2" : " sm:w-full min-w-[250px] "} relative`}
            onClick={() => setActiveTab(item.value)}
          >
            <span
              className={`absolute block h-full w-full transition-all duration-300 -z-10  ${
                item.value === activeTab ? "bottom-0" : "-bottom-[100%]"
              }`}
            >
              <Image src={tab} alt="tab" className="h-full w-full" />
            </span>
            {item.name}
            {item.notification && (
              <span
                className={`ml-1 ${
                  item.value === activeTab ? "text-white" : "text-red-500"
                }`}
              >
                ({item.notification})
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
