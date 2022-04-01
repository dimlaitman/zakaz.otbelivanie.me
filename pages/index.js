import MessengerLinks from "./modules/messengerlinks";
import Divider from "./components/divider";
import Header from "./modules/header";
import SocialLinks from "./modules/sociallinks";

export default function Home() {
  return (
    <div className="flex justify-center bg-[url('/bg.jpeg')] bg-center bg-cover h-screen w-screen">
      <div className="flex flex-col sm:mx-0 min-h-fit mx-2 max-w-2xl space-y-3">
        <Header />
        <MessengerLinks />
        <Divider />
        <SocialLinks />
      </div>
    </div>
  );
}
