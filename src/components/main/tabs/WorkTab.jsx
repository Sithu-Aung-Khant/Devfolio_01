import DottedLine from './DottedLine';
import Content from './Content';

const Entries = [
  {
    title: 'Front End Developer',
    institution: 'Frontend Mentor',
    date: '2023',
    link: 'https://www.frontendmentor.io/profile/Sithu-Aung-Khant',
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
        <DottedLine align="items-start" />
        <Content entry={Entries[0]} hover="hover:text-gray-500" />
      </div>
      <div className="grid grid-cols-3">
        <Content entry={Entries[1]} />
        <DottedLine align="items-center" />
      </div>
      <div className="grid grid-cols-3">
        <DottedLine align="items-end" />
        <Content entry={Entries[2]} />
      </div>
    </>
  );
};

export default WorkTab;
