import { Typography, Box } from "@mui/material";
import video from "../assets/DemoAAR25.mp4";

const VideoContainer = () => {
    return(
        <>
            <Typography variant='h4' component="div" gutterBottom sx={{marginTop: 2, padding: 2, borderRadius: 4, bgcolor: "#F1C40F", flexGrow:0}} >Gameplay Video</Typography>
            <Box sx={{ width: "90%", mx: "auto", mt: 4, padding: 2, backgroundColor: "#9B59B6", borderRadius: 5 }}>
                <video
                src={video}
                width="100%"
                height="400"
                controls
                style={{ borderRadius: "8px" }}
                >
                </video>
            </Box>
        </>
    )
}

export default VideoContainer;