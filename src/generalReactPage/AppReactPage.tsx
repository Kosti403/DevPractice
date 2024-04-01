import Header from "../components/header/header";
import Feedback from "../components/feedback/feedback";
import MainCardReact from "./mainCardReact/mainCardReact";
import ModuleProject from "./moduleProjects/moduleProject";
import OnlineLearningAndCost from "./onlineLearningAndCost/onlineLearningAndCost";
import SoftwareStack from "./softwareStack/softwareStack";
import Footer from "../components/footer/footer";

const mainMenuItems = [
  { name: "Практические навыки", link: "#softwareStack" },
  { name: "Программа курса", link: "#moduleProject" },
  { name: "Отзывы", link: "#feedback" },
  { name: "Цены", link: "#onlineLearningAndCost" },
  { name: "Формат обучения", link: "#onlineLearningAndCost" },
];

export default function AppReactPage() {
  return (
    <div style={{ margin: "0 80px" }}>
      <Header menuItems={mainMenuItems} />
      <MainCardReact />
      <SoftwareStack />
      <ModuleProject />
      <OnlineLearningAndCost />
      <Feedback />
      <Footer navbar={mainMenuItems} />
    </div>
  );
}
