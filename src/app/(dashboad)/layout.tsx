import { Navbar } from "@/src/components/navbar/navbar"


const DashboardLayout = ({ children} : {children: React.ReactNode}) => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-start p-6">
        <div className="max-w-[1600]">
          {children}
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout