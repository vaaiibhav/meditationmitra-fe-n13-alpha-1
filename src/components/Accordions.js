import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const CourseAccordion = (props) => {
    const {section} = props;
    return(
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography variant='h6'>{section.name}</Typography>
            </AccordionSummary>
            {section.sessions.map(session => 
                    <AccordionDetails key={'session'+session.id} sx={{border: '1px solid var(--whiteGray)'}}>
                        <Typography variant='body1'>{session.name}</Typography>
                    </AccordionDetails>
                )}
        </Accordion>
    );
};