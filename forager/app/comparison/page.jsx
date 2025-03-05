import NavBar from '../../components/NavBar';
import PageTitle from '@/components/PageTitle';
import Message from '@/components/Message';
import ComparisonTable from '@/components/ComparisonTable';
export default function MushroomComparisonPage() {
  return (
    <div className="page">
      <PageTitle title="Compare"/>
      <div className="page-content mt-[120px] p-6 flex flex-col items-center overflow-y">
        <Message />
        <ComparisonTable />
   

      </div>

      <NavBar />
    </div>
  );
}
