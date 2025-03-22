

interface SidebarItemProps {
  text: string;
  icon: React.ReactNode;
}

export function SidebarItem({ text, icon }: SidebarItemProps) {
  return(
    <>
    <div className="flex pl-8 items-center text-lg h-12" >
    {icon} &nbsp; {text}
    </div>
    </>
  )
}