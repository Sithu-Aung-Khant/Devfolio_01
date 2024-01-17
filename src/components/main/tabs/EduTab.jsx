import DottedLine from './DottedLine';
import Content from './Content';

const Entries = [
  {
    title: 'JS DataStructures & Algorithms',
    institution: 'freeCodeCamp',
    date: '2023',
    link: 'https://www.freecodecamp.org/certification/sithu_thedev/javascript-algorithms-and-data-structures',
  },
  {
    title: 'Responsive Web Design',
    institution: 'freeCodeCamp',
    date: '2023',
    link: 'https://www.freecodecamp.org/certification/sithu_thedev/responsive-web-design',
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
        <Content entry={Entries[0]} hover="hover:text-gray-500" />
        <DottedLine align="items-start" />
      </div>
      <div className="grid grid-cols-3">
        <DottedLine align="items-center" />
        <Content entry={Entries[1]} hover="hover:text-gray-500" />
      </div>
      <div className="grid grid-cols-3">
        <Content entry={Entries[2]} />
        <DottedLine align="items-end" />
      </div>
    </>
  );
};

export default ContentResult;
