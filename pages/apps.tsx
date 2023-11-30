// pages/apps.tsx
"use client"
import React,  { useState } from 'react';
import Layout from '@/app/layout';
import Grid from '@/app/components/Grid';
import SearchBar from '@/app/components/SearchBar';

const appsData = [
    {
        id: 1,
        title: "AI Project Analyzer",
        description: "An advanced tool for analyzing AI project metrics and performance.",
        imageUrl: "/images/ai-project-analyzer.jpg",
        type: "application"
      },
      {
        id: 2,
        title: "Chatbot Builder",
        description: "A user-friendly platform for creating custom chatbots using AI.",
        imageUrl: "/images/chatbot-builder.jpg",
        type: "application"
      },
      {
        id: 3,
        title: "Data Visualizer",
        description: "Transform your data into insightful visualizations with AI-driven analysis.",
        imageUrl: "/images/data-visualizer.jpg",
        type: "application"
      },
      {
        id: 4,
        title: "Predictive Modeler",
        description: "An AI tool for creating accurate predictive models in various domains.",
        imageUrl: "/images/predictive-modeler.jpg",
        type: "application"
      },
      {
        id: 5,
        title: "Language Processor",
        description: "Harness the power of NLP for effective language understanding and processing.",
        imageUrl: "/images/language-processor.jpg",
        type: "application"
      },
      {
        id: 6,
        title: "Language Processor",
        description: "Harness the power of NLP for effective language understanding and processing.",
        imageUrl: "/images/language-processor.jpg",
        type: "application"
      }

];

const AppsPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const filteredItems = searchTerm ? appsData.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
        : appsData;
  
  return (
    <Layout>
        <div className="flex flex-col min-h-screen">
        <main className="flex-grow container mx-auto p-4">
            <SearchBar onSearch={setSearchTerm} />
            {/* Add margin-top for space between SearchBar and Grid */}
            <div className="mt-6">
                <Grid items={appsData} />
            </div>        
            </main>
        </div>
    </Layout>
  );
};


export default AppsPage;
