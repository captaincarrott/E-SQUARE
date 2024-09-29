'use client'
import en from '../public/locales/en/common.json'
import ar from '../public/locales/ar/common.json'
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
const Dashboard = () => {
  const searchParams = useSearchParams();
  const currentLocale = searchParams.get('lang');

  const translate = currentLocale === 'en' ? en : ar
  
  return (
    <div className="min-h-screen flex">
      {/* Sidebar
      <aside className="w-64 bg-gray-800 text-white">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
        <nav className="mt-8">
          <ul>
            <li className="px-4 py-2 hover:bg-gray-700">
              <a href="#home">Home</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700">
              <a href="#profile">Profile</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700">
              <a href="#settings">Settings</a>
            </li>
          </ul>
        </nav>
      </aside> */}

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        <header className="mb-6">
          <h2 className="text-3xl font-semibold">{translate.dashboard.title}</h2>
        </header>
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-4 shadow rounded-lg">
              <h3 className="text-xl font-bold mb-2">{translate.dashboard.statistics}</h3>
              <p className="text-gray-600">{translate.dashboard.someStatsInfo}</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-4 shadow rounded-lg">
              <h3 className="text-xl font-bold mb-2">{translate.dashboard.recentActivity}</h3>
              <p className="text-gray-600">{translate.dashboard.RecentUpdates}</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-4 shadow rounded-lg">
              <h3 className="text-xl font-bold mb-2">{translate.dashboard.userInsights}</h3>
              <p className="text-gray-600">{translate.dashboard.userDetails}</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;

// 'use client'
// import { Line } from '@ant-design/plots';
// import { useSelector } from 'react-redux';

// export default function DashBoard() {
//   const sideClose = useSelector((state) => state.sidebar.sideClose);
//   const data = [
//     {
//       year: '1991',
//       value: 3,
//       type: 'Lon',
//     },
//     {
//       year: '1992',
//       value: 4,
//       type: 'Lon',
//     },
//     {
//       year: '1993',
//       value: 3.5,
//       type: 'Lon',
//     },
//     {
//       year: '1994',
//       value: 5,
//       type: 'Lon',
//     },
//     {
//       year: '1995',
//       value: 4.9,
//       type: 'Lon',
//     },
//     {
//       year: '1996',
//       value: 6,
//       type: 'Lon',
//     },
//     {
//       year: '1997',
//       value: null,
//       type: 'Lon',
//     },
//     {
//       year: '1998',
//       value: null,
//       type: 'Lon',
//     },
//     {
//       year: '1999',
//       value: null,
//       type: 'Lon',
//     },
//     {
//       year: '1991',
//       value: null,
//       type: 'Bor',
//     },
//     {
//       year: '1992',
//       value: null,
//       type: 'Bor',
//     },
//     {
//       year: '1993',
//       value: null,
//       type: 'Bor',
//     },
//     {
//       year: '1994',
//       value: null,
//       type: 'Bor',
//     },
//     {
//       year: '1995',
//       value: null,
//       type: 'Bor',
//     },
//     {
//       year: '1996',
//       value: 6,
//       type: 'Bor',
//     },
//     {
//       year: '1997',
//       value: 7,
//       type: 'Bor',
//     },
//     {
//       year: '1998',
//       value: 9,
//       type: 'Bor',
//     },
//     {
//       year: '1999',
//       value: 13,
//       type: 'Bor',
//     },
//   ];

//   const config = {
//     data,
//     xField: 'year',
//     yField: 'value',
//     seriesField: 'type', // Use seriesField to distinguish data types
//     lineStyle: (item) => {
//       // Set dashed line for 'Bor'
//       return item.type === 'Bor' ? { lineDash: [4, 4] } : { lineDash: [0, 0] };
//     },
//     color: ['#2688FF', 'red'], // Set colors for the two series
//     tooltip: {
//       customContent: (title, items) => {
//         const filteredItems = items.filter((item) => item.value !== null);
//         return (
//           <div key={title}>
//             <h4>{title}</h4>
//             {filteredItems.map((item) => (
//               <div key={item.name} style={{ display: 'flex', justifyContent: 'space-between' }}>
//                 <div>
//                   <span
//                     style={{
//                       display: 'inline-block',
//                       width: 6,
//                       height: 6,
//                       borderRadius: '50%',
//                       backgroundColor: item.color,
//                       marginRight: 6,
//                     }}
//                   ></span>
//                   <span>{item.name}</span>
//                 </div>
//                 <b>{item.value}</b>
//               </div>
//             ))}
//           </div>
//         );
//       },
//     },
//     legend: false,
//   };

//   return <div className={`sm:col-span-7 md:col-span-10 bg-white`}>
//     <Line {...config} />
//   </div>
// }
