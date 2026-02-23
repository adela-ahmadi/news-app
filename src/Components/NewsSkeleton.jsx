const NewsSkeleton = () => {
  return (
    <div className='card bg-dark text-light h-100 placeholder-glow'>
      <div className='placeholder col-12' style={{ height: "180px" }}></div>

      <div className='card-body'>
        <h5 className='card-title placeholder col-8'></h5>
        <p className='card-text placeholder col-10'></p>
        <p className='card-text placeholder col-6'></p>
        <span className='btn btn-primary disabled placeholder col-6'></span>
      </div>
    </div>
  );
};

export default NewsSkeleton;
