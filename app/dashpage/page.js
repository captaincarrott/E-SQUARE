export const dynamic = "force-dynamic";

import DashBoard from "@/components/DashBoard";
import ProtectedRoutes from "../ProtectedRoutes";
import DashFetch from "@/components/DashFetch";

export default async function DashPage() {

    const product = await DashFetch();

    return (
        <div>
            {/* <ProtectedRoutes route="/auth"> */}
                <DashBoard product={product} />
            {/* </ProtectedRoutes> */}
        </div>
    );
}