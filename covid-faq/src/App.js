import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Typography, withStyles } from "@material-ui/core";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

function App() {
  const [faqs, setFaqs] = useState([]);
  const [expanded, setExpanded] = useState("");

  useEffect(() => {
    fetchFaq();
  }, []);

  async function fetchFaq() {
    const res = await axios.get("https://trabalho-faq.herokuapp.com/faq");
    setFaqs(res.data);
  }

  const handleChange = (panel) => (_, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="App">
      <p className="title">COVID-19 FAQ</p>
      <div className="faq">
        {faqs.map((faq) => {
          return (
            <Accordion
              square
              expanded={expanded === faq.id}
              onChange={handleChange(faq.id)}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography>{faq.pergunta}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.resposta}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
}

export default App;
