interface IHeading {
  title: string;
}
const Heading = ({ title }: IHeading) => {
  return (
    <>
      <h1 className='text-primary uppercase text-2xl font-semibold'>{title}</h1>
      <div className='my-1 border-b border-b-border w-full'></div>
    </>
  );
};

export default Heading;
