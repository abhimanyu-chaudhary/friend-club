import Login from "../login/Login";
import TopSection from "./TopSection";

function HomePage(){
    return(
        <div className="max-w-screen-xl mx-auto text-xl font-bold">
            <Login />
            <TopSection />
        </div>
    )
}
export default HomePage;