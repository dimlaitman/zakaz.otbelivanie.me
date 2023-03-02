import MessengerLinks from "./modules/messengerlinks";
import Divider from "./components/divider";
import Header from "./modules/header";
import SocialLinks from "./modules/sociallinks";
import MainSiteLink from "./modules/mainsitelink";
import Expected from "./modules/expected";

export default function Home() {
  return (
    <div className="flex justify-center bg-[url('/bg.jpeg')] bg-center bg-cover  ">
      <div className="flex flex-col sm:mx-0 min-h-fit mx-2 max-w-2xl space-y-3 mb-3">
        <Header />
        <MessengerLinks />
        <Divider />
        <MainSiteLink />
        <Expected />
      </div>
    </div>
  );
}
