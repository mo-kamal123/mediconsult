import { Outlet } from "react-router-dom"
import MainHeader from "../../../../shared/UI/main-header"

const PricelistManagement = () => {
  return (
    <section className="w-[95%] m-auto flex flex-col gap-10">
        <MainHeader>Pricelists Management</MainHeader>
        <div>
            <Outlet />
        </div>
    </section>
  )
}

export default PricelistManagement