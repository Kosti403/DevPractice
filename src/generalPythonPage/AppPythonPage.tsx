import Footer from "../components/footer/footer";
import Feedback from "../components/feedback/feedback";
import Header from "../components/header/header";
import OnlineLearningAndCost from "../generalReactPage/onlineLearningAndCost/onlineLearningAndCost";
import MainCard from "./mainCardPython/mainCardPython";
import ModuleProjectPython from "./moduleProjects/moduleProject";
import SoftwareStack from "./softwareStackPython/softwareStackPython";

const mainMenuItems = [
  { name: "Практические навыки", link: "#softwareStack" },
  { name: "Программа курса", link: "#moduleProject" },
  { name: "Отзывы", link: "#feedback" },
  { name: "Цены", link: "#onlineLearningAndCost" },
  { name: "Формат обучения", link: "#onlineLearningAndCost" },
];
export default function AppPythonPage() {
  return (
    <div style={{ margin: "0 80px" }}>
      <Header menuItems={mainMenuItems} />
      <MainCard />
      <SoftwareStack />
      <ModuleProjectPython />
      <OnlineLearningAndCost />
      <Feedback />
      <Footer navbar={mainMenuItems} />
    </div>
  );
}
