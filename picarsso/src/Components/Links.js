import { Typography, Box, Button } from "@mui/material";
import EditDocumentIcon from '@mui/icons-material/EditDocument';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';

const Links = () => {

    function TakeSurvey(){
        window.location = "https://docs.google.com/forms/d/e/1FAIpQLSdYA-yuWY0nGaq7D7Fetl_BHG0SyIMe_n5kAAe2ZXJxA2DijQ/viewform?usp=send_form";
    }

    function VisitItchIo(){
        window.location = "https://platak1sm.itch.io/aar25t2"
    }

    function VisitLeaderBoard(){
        window.location = "https://kornimate.github.io/AR-Leaderboard/"
    }

    return(
        <>
            <Typography variant='h4' component="div" gutterBottom sx={{marginTop: 6, padding: 2, borderRadius: 4, bgcolor: "#F1C40F", flexGrow:0}} >Links</Typography>
            <Box sx={{ width: "50%", mx: "auto", mt: 4, marginBottom: 10, }}>
                <Button variant="contained" endIcon={<EditDocumentIcon />} onClick={TakeSurvey} sx={{bgcolor: "#E74C3C", marginBottom: 2, width: "80%"}}>Take the After-Game Survey</Button>
                <br />
                <Button variant="contained" endIcon={<VideogameAssetIcon />} onClick={VisitItchIo} sx={{bgcolor: "#E74C3C", marginBottom: 2, width: "80%"}}>Visit Game Itch.io Page</Button>
                <br />
                <Button variant="contained" endIcon={<LeaderboardIcon />} onClick={VisitLeaderBoard} sx={{bgcolor: "#E74C3C", marginBottom: 2, width: "80%"}}>Visit Leaderboard</Button>
            </Box>
            <span style={{color: "gray"}}>(Last updated: 2025.05.09)</span>
        </>
    )
}

export default Links;