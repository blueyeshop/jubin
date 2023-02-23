import Spenner from 'react-bootstrap/Spinner';

export default function LoadingBox() {
  return (
    <Spenner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spenner>
  );
}
