export default function PanelHeader({ children, className, ...props }) {
  return (
    <header
      className={`panel-header ${className || ''}`}
      {...props}>
      {children}
    </header>
  );
}
