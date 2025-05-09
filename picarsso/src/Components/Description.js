import { Typography } from "@mui/material";
import "../Styles/Description.css";

const Description = () => {
    return(
        <>
            <Typography variant='h4' component="div" gutterBottom sx={{marginTop: 2, padding: 2, borderRadius: 4, bgcolor: "#F1C40F", flexGrow:0}} >Game</Typography>
            <Typography vaiant="p" component="div" gutterBottom sx= {{marginTop: 2, padding: 2 , flexGrow:0, width:"50%", textAlign: "justify"}}>
                The Game <i style={{ backgroundColor: "#9B59B6"}}><b>PicARsso</b></i> is designed for teams of 2 people who are competing for the highest rank on the game's leaderboard.
                This game is an <i style={{ backgroundColor: "#9B59B6"}}><b>Augmented Reality</b></i> game, where the players use a headset and an interactive pen connected to the headset
                to draw persistent artwork into their own surrounding without leaving actually permanent marks.
            </Typography>
            <Typography vaiant="p" component="div" gutterBottom sx= {{padding: 2 , flexGrow:0, width:"50%", textAlign: "justify"}}>
                <h3 style={{display: "inline", border: "2px solid white", padding: 4, borderRadius: 10}}>1</h3> The <i style={{ backgroundColor: "#9B59B6"}}><b>first player</b></i> of the team puts on the headset, <i style={{ backgroundColor: "#9B59B6"}}><b>chooses a difficulty</b></i>, a team name, and starts the game. In this section the player is shown an artwork
                and music is played in order to inspire the user to create unique drawings. The emphasize is on the 
                <i style={{ backgroundColor: "#9B59B6"}}><b>free drawing</b></i> which means that the player does not have to copy anything from the
                shown artwork, rather create something based on the <i style={{ backgroundColor: "#9B59B6"}}><b>visual and audio input</b></i> during the game.
                This part of the game consists of <i style={{ backgroundColor: "#9B59B6"}}><b>3 consecutive rounds</b></i>. Each round with new painting and sound.
            </Typography>
            <Typography vaiant="p" component="div" gutterBottom sx= {{padding: 2 , flexGrow:0, width:"50%", textAlign: "justify"}}>
                <h3 style={{display: "inline", border: "2px solid white", padding: 4, borderRadius: 10}}>2</h3> The <i style={{ backgroundColor: "#9B59B6"}}><b>second player</b></i> of the team puts on the headset and continues the game.
                In this section the player is shown the drawings made by the previous player.
                This player then has to answer a short quiz where paintings and audios are shown and the player has to <i style={{ backgroundColor: "#9B59B6"}}><b>guess which one was the base</b></i> for the drawing user.
                If the answer is correct the player <i style={{ backgroundColor: "#9B59B6"}}><b>gets points</b></i> based on the difficulty.
                <ul>
                    <li>Easy: 1 point</li>
                    <li>Medium: 1.5 points</li>
                    <li>Hard: 2 point</li>
                </ul>
            </Typography>
            <Typography vaiant="p" component="div" gutterBottom sx= {{padding: 2 , paddingTop: 0, flexGrow:0, width:"50%", textAlign: "justify"}}>
                In the end the players get to know their rank on the leaderboard.
            </Typography>
        </>
    )
}

export default Description;