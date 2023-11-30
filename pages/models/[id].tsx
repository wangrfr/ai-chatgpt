// pages/models/[id].tsx

// pages/models/[id].tsx

import { useRouter } from 'next/router';
import Layout from '@/app/layout';

const ModelDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Model: {id}</h1>
        <div className="my-4">
          <h2 className="text-xl font-semibold">Description</h2>
          <p>Here is a detailed description of the model...</p>
        </div>
        <div className="my-4">
          <h2 className="text-xl font-semibold">Input Form</h2>
          {/* Input form components */}
        </div>
        <div className="my-4">
          <h2 className="text-xl font-semibold">Output Preview</h2>
          {/* Output preview components */}
        </div>
      </div>
    </Layout>
  );
};

export default ModelDetailPage;
