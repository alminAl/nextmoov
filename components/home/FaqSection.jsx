import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FaqSection = () => {
  return (
    <div className="px-6 py-16 lg:px-12">
      <h1 className="text-4xl font-bold text-center">
        Frequently Asked Questions
      </h1>
      <Accordion expanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Question about the platform from user</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Everybody wants to be famous, but nobody wants to do the work. I
            live by that. You grind hard so you can play hard. At the end of the
            day, you put all the work in, and eventually it’ll pay off. It could
            be in a year, it could be in 30 years. Eventually, your hard work
            will pay off.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {[...new Array(3)].map((i) => (
        <Accordion key={Math.random()}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Question about the platform from user</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Everybody wants to be famous, but nobody wants to do the work. I
              live by that. You grind hard so you can play hard. At the end of
              the day, you put all the work in, and eventually it’ll pay off. It
              could be in a year, it could be in 30 years. Eventually, your hard
              work will pay off.
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default FaqSection;
