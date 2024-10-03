import DashBoard from "@/components/DashBoard"
import ProtectedRoutes from "../ProtectedRoutes"
import DashNavBar from "@/components/DashNavBar"
import DashSidebar from "@/components/DashSidebar"
import DashFetch from "@/components/DashFetch"
export default async function DashPage() {

    const product = await DashFetch()

    return (
        <div className="">
            <div className="">
            {/* <DashSidebar className='p-4'/> */}
            <ProtectedRoutes route="/auth">
                <DashBoard product={product}/>
            </ProtectedRoutes>
            </div>
        </div>
)
}