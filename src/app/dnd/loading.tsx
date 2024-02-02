const LoadingDrop = () => {
  const arr = new Array(3).fill('53');
  return (
    <div>
      <h1 className='text-center font-bold text-primary my-10 text-xl'>Loading</h1>
      <div className='flex justify-between my-10 mx-5 gap-5'>
        {arr.map((item, id) => (
          <div key={id} className=' h-[200px] border border-dashed border-border w-1/3 p-4 '>
            <h2 className='text-center animate-bounce'>Loading</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingDrop;
