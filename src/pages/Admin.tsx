
import { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { client } from '../lib/sanity';
import { ArrowRight } from 'lucide-react';

const Admin = () => {
  const [connected, setConnected] = useState(false);
  const [projectId, setProjectId] = useState('');
  const [message, setMessage] = useState('Checking Sanity connection...');

  useEffect(() => {
    async function checkConnection() {
      try {
        // Test the connection by trying to fetch documents
        await client.fetch('*[_type == "hero"][0...1]');
        setConnected(true);
        setMessage('Successfully connected to Sanity CMS!');
        // Get project ID from client config
        const config = client.config();
        if (config.projectId) {
          setProjectId(config.projectId);
        }
      } catch (error) {
        console.error('Sanity connection error:', error);
        setConnected(false);
        setMessage('Could not connect to Sanity CMS. Please check your configuration.');
      }
    }
    
    checkConnection();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <div className="flex-grow pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-bauhaus-dark mb-2">Sanity CMS Admin</h1>
            <p className="text-gray-600">Manage your content from Sanity Studio</p>
          </div>
          
          <div className={`p-6 rounded-lg mb-8 ${connected ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
            <div className="flex items-center mb-4">
              <div className={`w-3 h-3 rounded-full mr-3 ${connected ? 'bg-green-500' : 'bg-red-500'}`}></div>
              <h2 className="font-semibold text-lg">{connected ? 'Connected' : 'Not Connected'}</h2>
            </div>
            <p className="text-gray-700 mb-4">{message}</p>
            
            {connected && projectId && (
              <div className="bg-white p-4 rounded border border-gray-200">
                <p className="text-sm text-gray-600 mb-2">Project ID</p>
                <p className="font-mono text-gray-800">{projectId}</p>
              </div>
            )}
            
            {connected ? (
              <div className="mt-6">
                <a 
                  href={`https://www.sanity.io/manage/project/${projectId}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-bauhaus-accent hover:text-bauhaus-dark font-medium transition-colors"
                >
                  Open Sanity Studio
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            ) : (
              <div className="mt-6">
                <p className="text-gray-700 mb-4">To connect to Sanity:</p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Create a Sanity project at <a href="https://www.sanity.io/get-started" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">sanity.io</a></li>
                  <li>Replace 'your-project-id' in src/lib/sanity.ts with your actual project ID</li>
                  <li>Create schemas matching the content types defined in sanity.ts</li>
                </ol>
              </div>
            )}
          </div>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Content Structure</h2>
            <p className="text-gray-700 mb-4">The following content types are set up to be managed through Sanity:</p>
            
            <ul className="space-y-4">
              <li className="p-4 bg-white rounded border border-gray-200">
                <h3 className="font-medium text-bauhaus-dark">Hero</h3>
                <p className="text-gray-600 text-sm mt-1">Main hero sections with title, subtitle, and background image</p>
              </li>
              <li className="p-4 bg-white rounded border border-gray-200">
                <h3 className="font-medium text-bauhaus-dark">Projects</h3>
                <p className="text-gray-600 text-sm mt-1">Featured projects with title, description, and image</p>
              </li>
              <li className="p-4 bg-white rounded border border-gray-200">
                <h3 className="font-medium text-bauhaus-dark">Cities</h3>
                <p className="text-gray-600 text-sm mt-1">Participating cities with name, image, and description</p>
              </li>
              <li className="p-4 bg-white rounded border border-gray-200">
                <h3 className="font-medium text-bauhaus-dark">Partners</h3>
                <p className="text-gray-600 text-sm mt-1">Partner organizations with name, logo, and website link</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Admin;
