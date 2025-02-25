import Link from 'next/link';
import NavBar from '../../components/NavBar';
import PageTitle from '@/components/PageTitle';
import Button from '@/components/Button';
import Message from '@/components/Message';
export default function MushroomPage() {
  return (
    <div className="page flex flex-col items-center">
      <PageTitle title="Match Results"/>
      {/* <h1>Mushroom Page</h1>
      <Link href="/comparison">
        <button>Go to Mushroom Comparison Page</button>
      </Link> */}
      <div className="page-items flex flex-col items-center w-[80%]">
        <div className="report-error-container w-[100%]  flex flex-row justify-between items-center mt-4 mb-6">
          <p>Not what you expected?</p>
          <Button text="Report error" color="red" />
        </div>
          <Message/>
      </div >

      <NavBar />
    </div>
  );
}
