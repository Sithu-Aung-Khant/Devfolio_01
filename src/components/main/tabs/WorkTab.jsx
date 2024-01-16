import DottedLine from './DottedLine';
import Content from './Content';

const Entries = [
  {
    title: 'Front End Developer',
    institution: 'Frontend Mentor',
    date: '2023',
  },
  {
    title: 'Senior Project Officer',
    institution: 'CIM (NGO)',
    date: '2023',
  },
  {
    title: 'Project Officer',
    institution: 'CIM (NGO)',
    date: '2021-2022',
  },
];

const WorkTab = () => {
  return (
    <>
      <div className="grid grid-cols-3">
        <DottedLine align="start" />
        <Content entry={Entries[0]} />
      </div>
      <div className="grid grid-cols-3">
        <Content entry={Entries[1]} />
        <DottedLine align="center" />
      </div>
      <div className="grid grid-cols-3">
        <DottedLine align="end" />
        <Content entry={Entries[2]} />
      </div>
    </>
  );
};

export default WorkTab;
