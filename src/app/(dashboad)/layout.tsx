import { Navbar } from "@/src/components/navbar"


const DashboardLayout = ({ children} : {children: React.ReactNode}) => {
  return (
    <div>
      <Navbar />
        <div className="p-6">
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout