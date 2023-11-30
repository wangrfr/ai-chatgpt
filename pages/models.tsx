// pages/apps.tsx
"use client"
import React,  { useState } from 'react';
import Layout from '@/app/layout';
import Grid from '@/app/components/Grid';
import SearchBar from '@/app/components/SearchBar';

const modelData = [
    {
        id: 1,
        title: "Model 1",
        description: "An advanced tool for analyzing AI project metrics and performance.",
        imageUrl: "/images/ai-project-analyzer.jpg",
        type: "model"
      },
      {
        id: 2,
        title: "Model 2",
        description: "A user-friendly platform for creating custom chatbots using AI.",
        imageUrl: "/images/chatbot-builder.jpg",
        type: "model"
      },
      {
        id: 3,
        title: "Model 3",
        description: "Transform your data into insightful visualizations with AI-driven analysis.",
        imageUrl: "/images/data-visualizer.jpg",
        type: "model"
      },
      {
        id: 4,
        title: "Model 4",
        description: "An AI tool for creating accurate predictive models in various domains.",
        imageUrl: "/images/predictive-modeler.jpg",
        type: "model"
      },
      {
        id: 5,
        title: "Model 5",
        description: "Harness the power of NLP for effective language understanding and processing.",
        imageUrl: "/images/language-processor.jpg",
        type: "model"
      },
      {
        id: 6,
        title: "Model 4",
        description: "Harness the power of NLP for effective language understanding and processing.",
        imageUrl: "/images/language-processor.jpg",
        type: "model"
      }

];

const ModelPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const filteredItems = searchTerm ? modelData.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
        : modelData;
  
  return (
    <Layout>
        <div className="flex flex-col min-h-screen">
        <main className="flex-grow container mx-auto p-4">
            <SearchBar onSearch={setSearchTerm} />
            {/* Add margin-top for space between SearchBar and Grid */}
            <div className="mt-6">
                <Grid items={modelData} />
            </div>        
            </main>
        </div>
    </Layout>
  );
};


export default ModelPage;
