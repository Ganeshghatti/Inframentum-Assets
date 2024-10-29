import Future_First_Box from "./Future_First_Box";
import Future_Second_Box from "./Future_Second_Box";
import Future_Third_Box from "./Future_Third_Box";

export default function Our_Future_Plan_Components() {
    return (
        <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl capitalize font-semibold text-center font-semibold">Our Future plans</h1>
            <div className="grid max-ld:grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="max-lg:col-span-2">
                    <Future_First_Box />
                </div>
                <div className="max-lg:col-span-2">
                    <Future_Second_Box />
                </div>
                <div className="col-span-2">
                    <Future_Third_Box />
                </div>
            </div>
        </div>
    )
}
