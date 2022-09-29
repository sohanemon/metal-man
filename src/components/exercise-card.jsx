import { FaBaby } from "react-icons/fa";
import { BiTimer } from "react-icons/bi";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

export default function ExerciseCard({
  image,
  title,
  description,
  requiredTime,
  minAge,
  maxAge,
}) {
  return (
    <Card className='w-96 my-10 relative'>
      <CardHeader color='blue' className='relative h-56'>
        <img
          src={image}
          alt='img-blur-shadow'
          className='h-full object-cover w-full'
        />
      </CardHeader>
      <CardBody className='text-center'>
        <Typography variant='h5' className='mb-2 line-clamp-1'>
          {title}
        </Typography>
        <Typography className='line-clamp-2'>{description}</Typography>
      </CardBody>
      <CardFooter divider className='flex items-center justify-between py-3'>
        <Typography variant='small' className='flex items-center gap-1'>
          <BiTimer className='text-2xl' />
          {requiredTime}s
        </Typography>
        <Typography
          variant='small'
          color='gray'
          className='flex items-center gap-1'
        >
          <FaBaby className='text-lg' />
          {minAge}-{maxAge} ages
        </Typography>
      </CardFooter>
    </Card>
  );
}
