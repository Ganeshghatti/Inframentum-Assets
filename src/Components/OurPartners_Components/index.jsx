import OurPartners_Details_Page from "./OurPartners_Details_Page";
import OurPartners_Slides from "./OurPartners_Slides";

export default function OurPartners_Components() {
    return (
        <div className="">
            <OurPartners_Slides />
            <div className="w-[90%] mx-auto">
                <div className=" bg-secondaryColor py-5 md:py-10 mt-14 rounded-3xl">
                    <h1 className="max-md:text-3xl text-5xl text-center capitalize font-semibold text-white">Our Partners</h1>
                </div>
                <div className="mt-10">
                    <OurPartners_Details_Page />
                </div>
            </div>
        </div>
    )
}