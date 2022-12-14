function About({ value, unit, type }) {
  return (
    <div className='text-gray-800 text-sm tracking-wider font-medium'>
      <p className='text-gray-600 text-sm'>
        <span className='text-xl text-gray-800 font-semibold'>{value}</span>
        {" " + unit}
      </p>
      <span>{type}</span>
    </div>
  );
}
export default About;
