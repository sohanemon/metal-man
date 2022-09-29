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
        <Accordion
          open={open === el.id}
          key={el.id}
          icon={<Icon id={el.id} open={open} />}
        >
          <AccordionHeader onClick={() => handleOpen(el.id)}>
            {el.question}
          </AccordionHeader>
          <AccordionBody className='!h-full'>{el.answer}</AccordionBody>
        </Accordion>
      ))}
    </Fragment>
  );
}
const qa = [
  {
    id: 1,
    question: "How does react work?",
    answer:
      "React is a declarative, efficient, and flexible JavaScript library for building user interfaces.While building client-side apps, a team of Facebook developers realized that the DOM is slow. So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM. Unlike browser DOM elements, React elements are plain objects and are cheap to create.React reads these objects and uses them to create HTML elements on the virtual DOM, after which it gets synced with the real DOM. So we'll have trees of objects on the virtual DOM and trees of objects on the real DOM. React automatically updates the associated DOM element when we change data on a React element.",
  },
  {
    id: 2,
    question: "Define state vs props.",
    answer:
      "Props allow you to pass data from one component to other components as an argument.State holds information about the components.Props are read-only. State changes can be asynchronous. Props are immutable.State is mutable.Props are used to communicate between components.States can be used for rendering dynamic changes with the component.Props can be accessed by the child component.State cannot be accessed by child components.Props are external and controlled by whatever renders the component.The State is internal and controlled by the React Component itself.",
  },
  {
    id: 3,
    question: " Uses of useEffect",
    answer:
      'Validating an input while it\'s receiving characters is another great application for useEffect.We can use useEffect to filter an array "on the fly" by typing letters into an input element.We can use the useEffect hook to trigger an animation on a shopping cart as a side effect of adding a new product to it. We want to trigger a state update due to an updated fetch() call. We are sending the fetched data to a child component, and whenever that data is changed, the child component re-process it.',
  },
];
