import { useState } from 'react';
import Button from './Button';

export default function Panel({ headerContent, children, ...props }) {
  const [isOpen, setIsOpen] = useState(true);

  function togglePanel() {
    setIsOpen(isOpen => !isOpen);
  }

  return (
    <section
      className='panel'
      {...props}>
      {headerContent}

      <Button
        type='button'
        className='list-toggle-btn'
        aria-label={isOpen ? 'Hide list' : 'Show list'}
        onClick={togglePanel}>
        <span aria-hidden='true'>{isOpen ? '–' : '+'}</span>
      </Button>

      {isOpen && children}
    </section>
  );
}
