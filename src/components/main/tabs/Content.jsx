import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

const Content = ({ entry }) => {
  return (
    <>
      <div>
        <div className="font-semibold">{entry.title}</div>
        <div className="text-sm">{entry.institution}</div>
        <FontAwesomeIcon icon={faCalendarDays} />
        <span className="text-sm pl-2">{entry.date}</span>
      </div>
    </>
  );
};

export default Content;
