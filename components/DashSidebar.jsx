'use client'
import { useSelector } from "react-redux";

export default function DashSidebar() {
    const sideClose = useSelector((state) => state.sidebar.sideClose); 

    return (
        <aside className={`absolute z-10 bg-white ${sideClose ? 'w-0 transition-all' : 'w-[50%] transition-all'}`}>
            <div className={`${sideClose ? 'hidden' : 'flex flex-col'}`}>
                <button className="font-bold pb-4 text-[#1C65A2]">
                    Statistics
                </button>
                <button className="font-bold text-[#1C65A2]">
                    Materials
                </button>
            </div>
        </aside>
    );
}
