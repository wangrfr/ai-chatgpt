// pages/applications/[id].tsx

import { useRouter } from 'next/router';
import Layout from '@/app/layout';

const ApplicationDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
    <div className="flex flex-col min-h-screen">
    <main className="flex-grow container mx-auto p-4">
     <h1>Application Detail - {id}</h1>
      {/* Model details here */}

    </main>
    </div>
    </Layout>

  );
};

export default ApplicationDetail;