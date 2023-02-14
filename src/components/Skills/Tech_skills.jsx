import * as React from 'react';
import s from "./Tech_skill.module.css"
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import reactIcon from '../../Img/icons/react.png'
import cssIcon from '../../Img/icons/css.png'
import expressIcon from '../../Img/icons/express.png'
import htmlIcon from '../../Img/icons/html.png'
import jsIcon from '../../Img/icons/js.png'
import nodejsIcon from '../../Img/icons/nodejs.png'
import postgresIcon from '../../Img/icons/postgres.png'
import reduxIcon from '../../Img/icons/redux.png'


export default function TechSkills() {
  return (
    <Timeline position="alternate">
      <TimelineItem>        
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color='primary' variant='outlined'>
            <img className={s.icons} src={jsIcon} alt="javascript" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" sx={{ alignSelf: 'center' }}>
            Javascript
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>        
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <img className={s.icons} src={reactIcon} alt="react" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            React
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <img className={s.icons} src={reduxIcon} alt="redux" />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Redux
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector  />
          <TimelineDot color="primary" variant="outlined">
            <img className={s.icons} src={expressIcon} alt="express" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Express
          </Typography>          
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}