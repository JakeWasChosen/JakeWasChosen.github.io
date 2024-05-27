import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import * as React from "react";
import {useContext} from "react";
import {TimelineOppositeContent} from "@mui/lab";
import {Box, Paper, Typography, useTheme} from "@mui/material";
import Button from '@mui/material/Button';
import hash from './hasher';
import {IconContext} from "react-icons";
import generateGlassmorphismStyle from "../utils/Glass.js";
import {ColorContext} from "../../App.jsx";
import pSBC from "../utils/ColorConv.js";

export default function TimelineCard(date, content, icon, position, links, isFirst, isLast) {
    const {color} = useContext(ColorContext);
    const glass = generateGlassmorphismStyle({transparency: 0.4, color: color.rgb, blur: 9.2, outline: 0.3});
    const theme = useTheme();

    return (
        <TimelineItem key={hash(content + date)}>
            <TimelineOppositeContent sx={{margin: 'auto 0', color: 'primary.light'}} style={{float: position}} varient="body2">
                <b>{date}</b>
            </TimelineOppositeContent>
            <IconContext.Provider value={{size: "1.5em"}}>
                <TimelineSeparator>
                    {/* Conditional Connector Before Dot */}
                    {!(isFirst && !isLast) && <TimelineConnector/>}       {/*todo: rewrite using visibility: hidden as this messes with some margins */}

                    {/* Center Dot */}
                    <TimelineDot color="primary" variant="filled">
                        {icon}
                    </TimelineDot>

                    {/* Conditional Connector After Dot */}
                    {!(isLast && !isFirst) && <TimelineConnector/>}
                </TimelineSeparator>
            </IconContext.Provider>
            <TimelineContent>
                <Paper style={{...glass, float: position}} square={false} elevation={3} sx={{padding: '6px 16p'}}
                       className="timeline-content-container">
                    <Typography sx={{color: "primary.contrastText"}} align="left" maxWidth="35vw"
                                variant="body1">
                        {content}
                    </Typography>
                    {links && links.map((data) => (
                        <Button className="timeline-button" sx={{backgroundColor: 'accent.main', margin: '0.5em'}}
                                variant="contained"
                                target="_blank" href={data.url}>{data.text}</Button>))}
                </Paper>
            </TimelineContent>
        </TimelineItem>

    );
}
