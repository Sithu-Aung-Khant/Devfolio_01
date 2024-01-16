import DottedLine from './DottedLine';
import Content from './Content';

const Entries = [
  {
    title: 'JS DataStructures & Algorithms',
    institution: 'freeCodeCamp',
    date: '2023',
  },
  {
    title: 'Responsive Web Design',
    institution: 'freeCodeCamp',
    date: '2023',
  },
  {
    title: 'Civil Engineering',
    institution: 'Lashio Technological University',
    date: '2016-2019',
  },
];

const ContentResult = () => {
  return (
    <>
      <div className="grid grid-cols-3">
        <Content entry={Entries[0]} />
        <DottedLine align="start" />
      </div>
      <div className="grid grid-cols-3">
        <DottedLine align="center" />
        <Content entry={Entries[1]} />
      </div>
      <div className="grid grid-cols-3">
        <Content entry={Entries[2]} />
        <DottedLine align="end" />
      </div>
    </>
  );
};

export default ContentResult;
