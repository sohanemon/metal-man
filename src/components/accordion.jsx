import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      strokeWidth={2}
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
    </svg>
  );
}

export default function MyAccordion() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Fragment>
      {qa.map((el) => (
        <Accordion open={open === el.id} icon={<Icon id={el.id} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(el.id)}>
            {el.question}
          </AccordionHeader>
          <AccordionBody>{el.answer}</AccordionBody>
        </Accordion>
      ))}
    </Fragment>
  );
}
const qa = [
  {
    id: 1,
    question: "How react works?",
    answer: "React works in his way.",
  },
  {
    id: 2,
    question: "Define state vs props.",
    answer: "React works in his way.",
  },
  {
    id: 3,
    question: "I don't want  to ask.",
    answer: "React works in his way.",
  },
];
