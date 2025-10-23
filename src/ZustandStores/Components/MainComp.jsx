import Count from "./Count";
import Inc from "./Inc";
import Dec from "./Dec";
import Reset from "./Reset";
import DisplayTheme from "./DisplayTheme";
import ToggleTheme from "./ToggleTheme";
import ChackMatchComp from "./ChackMatchComp";

// in here goes every thing just to view that even tho all components in same place
// only the triggred comp. will render

export default function MainComp() {
  return (
    <>
      <Count />
      <Inc />
      <Dec />

      <Reset />
      <ChackMatchComp />
      <DisplayTheme />
      <ToggleTheme />
    </>
  );
}
