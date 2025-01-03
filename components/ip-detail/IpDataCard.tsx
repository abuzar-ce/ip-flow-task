import { RiExternalLinkLine } from "react-icons/ri";

const IpDataCard = ({
  title,
  children,
  setDrawer,
}: {
  title: string;
  children: React.ReactNode;
  setDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      <div className="flex flex-col gap-3 h-full justify-between rounded-2xl bg-white-bg p-4">
        <div className="flex flex-shrink-0">
          <p className="text-xs font-bold w-[100%] overflow-hidden overflow-ellipsis whitespace-nowrap">
            {title}
          </p>
          <button className="text-lg">
            <RiExternalLinkLine
              className="text-purple-900"
              onClick={() => setDrawer(true)}
            />
          </button>
        </div>
        <div className="flex-grow">{children}</div>
      </div>
    </>
  );
};

export default IpDataCard;
