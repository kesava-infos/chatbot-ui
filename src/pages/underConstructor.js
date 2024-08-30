import InDev from "../assets/indev.jpg";
import { useLocation } from "react-router-dom";
export default function InDevelopment() {

    return <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-xl">
            {
                useLocation().pathname + " - coming soon"
            }
        </h1>
        <img src={InDev} alt="Under Construction" />
    </div>
} 