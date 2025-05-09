import Description from "./Description";
import Images from "./Images";
import Links from "./Links";
import Team from "./Team";
import VideoContainer from "./VideoContainer";

const Container = () => {
    return(
        <>
            <Description />
            <VideoContainer />
            <Images />
            <Links />
            <Team />
        </>
    )
}

export default Container;