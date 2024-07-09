import BestSeller3 from "../components/BestSeller"
import DiscountsPage from "../components/DiscountsPage"
import CategoryPage from "../pages/CategoryPage"
const HomePage = () => {
  return (
   <>
   <BestSeller3/>
   <DiscountsPage/>
   <div className="mt-4">
   <CategoryPage/>
   </div>
   </>
  )
}

export default HomePage
