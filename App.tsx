import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

// FIX: Changed return type from JSX.Element to React.ReactElement to resolve namespace issue.
function App(): React.ReactElement {
  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-800 bg-ym-blue">
      <Header />
      <main className="flex-grow">
        <MainContent />
      </main>
      <Footer />
    </div>
  );
}

export default App;