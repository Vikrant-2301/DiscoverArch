import Banner from "./components/Banner/index";
import Aboutus from "./components/Aboutus/index";
import Articles from "./components/Articles/index";
import Joinus from "./components/Joinus/index";
import Insta from "./components/Insta/index";
import MyTeam from "./components/MyTeam";

export default function Home() {
  return (
    <main>
      <Banner />
      <Aboutus />
      <MyTeam />
      <Articles />
      <Joinus />
      <Insta />
    </main>
  );
}
