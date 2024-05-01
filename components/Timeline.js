import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import WorkIcon from "@mui/icons-material/Work";
import Typography from "@mui/material/Typography";

import { timeline } from "../pages/api/timeline-data.js";

export default function MyTimeline() {
  const nodeColors = (type) => {
    switch (type) {
      case "work":
        return "success";
      case "research":
        return "primary";
      default:
        return "error";
    }
  };

  const titleColors = (type) => {
    switch (type) {
      case "work":
        return "#ed974f";
      case "research":
        return "#a0ecb1";
      default:
        return "#efa8b0";
    }
  };

  const subtitleColors = (type) => {
    switch (type) {
      case "work":
        return "#fceed8";
      case "research":
        return "#d5faf1";
      default:
        return "#fbe5e6";
    }
  };

  return (
    <Timeline position="alternate" className="bg-[var(--primary-background)]">
      {timeline.map((item, index) => (
        <TimelineItem>
          <TimelineOppositeContent
            sx={{
              m: "auto 0",
              minWidth: "200px",
            }}
            align="right"
            variant="body2"
          >
            {item.date.split(" - ")[0]} - <br></br> {item.date.split(" - ")[1]}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot
              variant="outlined"
              // color={nodeColors(item.type)}
            ></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2, minWidth: "200px" }}>
            <Typography
              component="span"
              sx={{
                fontSize: "1.1rem",
                lineHeight: "1.2",
                fontWeight: "600",
                letterSpacing: "0.5px",
                color: titleColors(item.type),
              }}
            >
              {item.title}
            </Typography>
            <Typography
              sx={{ marginTop: "4px", color: subtitleColors(item.type) }}
              variant="subtitle2"
            >
              {item.subtitle}
            </Typography>
          </TimelineContent>
        </TimelineItem>
      ))}

      {/* <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <HotelIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Sleep
          </Typography>
          <Typography>Because you need rest</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          <TimelineDot color="secondary">
            <RepeatIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Repeat
          </Typography>
          <Typography>Because this is the life you love!</Typography>
        </TimelineContent>
      </TimelineItem> */}
    </Timeline>
  );
}
