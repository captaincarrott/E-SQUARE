'use client'
import Navbar from "@/components/Navbar";
import DashPage from "./dashpage/page";


export default function Home() {
  // const router = useRouter()
  // const token = useAppSelector((state) => state.auth.token)
  return (
    <div className="">
      <Navbar />
      <main className="">
        {/* {token ? router.push('/dashpage') : router.push('/auth')} */}
        
      </main>
    </div>
  );
}
