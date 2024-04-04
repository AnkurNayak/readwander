/* ----------------------------------------------------------------------------------------------------- */
/*  @ imports.
/* ----------------------------------------------------------------------------------------------------- */
import ContinueReading from "./ContinueReadingComponent";
import LatestReadingComponent from "./LatestReadingCoponent";
import Recommend from "./RecommendComponent";
import StreakComponent from "./StreakComponent";
import Featured from "./FeaturedComponent";
import { useOutletContext } from "react-router-dom";

/* ----------------------------------------------------------------------------------------------------- */
/*  @ Base : <HomepageContainerMain />
/* ----------------------------------------------------------------------------------------------------- */
const HomepageContainerMain = () => {
  const { books } = useOutletContext();
  if (books) {
    return (
      <>
        <StreakComponent />
        <LatestReadingComponent latestBook={books} />
        <ContinueReading continueBooks={books} />
        <Recommend recommendBooks={books} />
        <Featured featuredBooks={books} />
      </>
    );
  }
};

export default HomepageContainerMain;
