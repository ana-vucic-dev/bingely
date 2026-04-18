export default function ErrorMessage({ message, updateLiveRegion }) {
  updateLiveRegion(message);

  return (
    <p className='error'>
      <span aria-hidden='true'>😕</span> {message}
    </p>
  );
}
