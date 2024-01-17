import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

const Content = ({ entry, hover }) => {
  return (
    <>
      <a href={entry.link} target="_blank" className={`${hover}`}>
        <div className="font-semibold text-sm tracking-tight">
          {entry.title}
        </div>
        <div className="text-xs">{entry.institution}</div>
        <FontAwesomeIcon size="xs" icon={faCalendarDays} />
        <span className="text-xs pl-1">{entry.date}</span>
      </a>
    </>
  );
};

export default Content;
