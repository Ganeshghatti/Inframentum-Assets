import Rental_First_Image from "@/Components/RentalFirst_Page_Components/Rental_First_Image";
import Rental_First_Intro from "@/Components/RentalFirst_Page_Components/Rental_First_Intro";

export default function RentalFirst() {
  return (
    <section className="container mx-auto border bg-background_Color_2 flex flex-col md:flex-row items-center justify-around gap-10 md:gap-5 p-8 rounded-3xl">
      <Rental_First_Image />
      <Rental_First_Intro />
    </section>
  );
}
