import FrontendLayout from "@/components/Layouts";
import HomeComonent from "@/components/Pages/Home";
import Image from "next/image";

export default function Home() {
  return (
    <FrontendLayout>
      <div className="container">Home page</div>
      <HomeComonent />
    </FrontendLayout>
  );
}
