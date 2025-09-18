import { useState } from "react";
import { Link } from "react-router-dom"

const Tabs = ({ tabsData, route, id }) => {
  const [active, setActive] = useState(tabsData[0].label);

  return (
    <div className="flex items-center gap-10 bg-white p-4 rounded-2xl border border-borders overflow-x-auto">
    {tabsData.map((tab) => (
      <Link
        key={tab.path}
        to={`/${route}/${id}/${tab.path}`}
        onClick={() => setActive(tab.label)}
        className={`${active === tab.label ? 'text-blue-600 font-semibold  border-blue-600/100' : 'text-gray-600 hover:text-blue-500 hover:border-blue-600/100 '} min-w-fit text-xs md:text-base border-b-2 border-blue-600/0 transition-all duration-300`} >
        {tab.label}
      </Link>
    ))}
  </div>  )
}

export default Tabs