import { FaBaby } from "react-icons/fa";
import { BiTimer } from "react-icons/bi";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useContext } from "react";
import { ExerciseTime } from "../App";

export default function ExerciseCard({
  image,
  title,
  description,
  requiredTime,
  minAge,
  maxAge,
}) {
  const { setExerciseTime } = useContext(ExerciseTime);
  const handleAddToList = () => {
    setExerciseTime((p) => p + requiredTime);
  };

  return (
    <Card className=' my-10 relative'>
      <CardHeader className='relative h-32 !shadow-gray-500'>
        <img
          src={image}
          alt='img-blur-shadow'
          className='h-full object-cover w-full object-center'
        />
      </CardHeader>
      <CardBody className='text-center pb-2'>
        <Typography variant='h5' className='mb-2 line-clamp-1'>
          {title}
        </Typography>
        <Typography variant='small' className='line-clamp-2 text-left'>
          {description}
        </Typography>{" "}
      </CardBody>
      <CardFooter divider className='pt-0'>
        <div className='flex items-center justify-between py-3'>
          <Typography variant='small' className='flex items-center gap-1'>
            <BiTimer className='text-2xl' />
            {requiredTime}s
          </Typography>{" "}
          <Typography
            variant='small'
            color='gray'
            className='flex items-center gap-1'
          >
            <FaBaby className='text-lg' />
            {minAge}-{maxAge} ages
          </Typography>
        </div>{" "}
        <Button
          onClick={handleAddToList}
          color='blue-gray'
          className='active:scale-x-95 w-full '
        >
          Add to list
        </Button>
      </CardFooter>
    </Card>
  );
}
