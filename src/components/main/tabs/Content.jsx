import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

const Content = ({ entry, hover }) => {
  return (
    <>
      <a href={entry.link} target="_blank" className={`${hover}`}>
        <div className="font-semibold tracking-tight">{entry.title}</div>
        <div className="text-sm">{entry.institution}</div>
        <FontAwesomeIcon size="sm" icon={faCalendarDays} />
        <span className="text-sm pl-2">{entry.date}</span>
      </a>
    </>
  );
};

export default Content;
