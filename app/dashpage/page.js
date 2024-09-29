import DashBoard from "@/components/DashBoard"
import ProtectedRoutes from "../ProtectedRoutes"
import DashNavBar from "@/components/DashNavBar"
import DashSidebar from "@/components/DashSidebar"
export default function DashPage() {

    return (
        <div className="">
            <div className="">
            {/* <DashSidebar className='p-4'/> */}
            <ProtectedRoutes route="/auth">
                
                <DashBoard />
            </ProtectedRoutes>
            </div>
        </div>
)
}