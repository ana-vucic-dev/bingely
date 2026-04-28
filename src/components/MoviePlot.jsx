export default function MoviePlot({ movie }) {
  const {
    Plot: plot,
    Actors: actors,
    Director: director,
    Writer: writer
  } = movie;

  return (
    <section
      className='plot'
      aria-label='Plot'>
      <p className='plot-summary'>{plot}</p>

      <p>
        <span className='actors'>Starring: </span>
        {actors}
      </p>

      <p>
        <span className='creators'>Created by: </span>
        {director !== 'N/A' ? director : writer}
      </p>
    </section>
  );
}
