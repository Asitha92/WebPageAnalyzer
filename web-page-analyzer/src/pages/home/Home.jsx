import React, { useState } from 'react';
import { TextField, DetailSection } from '../../components';

function Home() {
	const [url, setUrl] = useState('');
	const [analysis, setAnalysis] = useState(null);

	const handleAnalyze = async () => {
		console.log('Analyzing URL:', url);
		try {
			const response = await fetch(`http://localhost:5000/analyze?url=${url}`);
			const data = await response.json();
			setAnalysis(data);
		} catch (error) {
			console.error('Error fetching analysis:', error);
		}
	};
	return (
		<div className="min-h-screen w-full flex flex-col items-center bg-white p-24">
			<h1 className="text-3xl mb-6">Web Page Analyzer</h1>
			<div className="w-full p-6">
				<TextField
					id={'Home-Page-Input'}
					variant="outlined"
					placeholder="www.example.com/"
					label="Enter a URL"
					type="text"
					onChange={(e) => setUrl(e.target.value)}
				/>
				<button
					onClick={handleAnalyze}
					className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition cursor-pointer mt-4 disabled:bg-gray-400 disabled:cursor-not-allowed"
					disabled={url.length === 0}
				>
					Analyze
				</button>
				{analysis ? (
					<DetailSection
						htmlVersion={analysis.htmlVersion}
						title={analysis.title}
						headings={analysis.headings}
						internalLinks={analysis.internalLinks}
						externalLinks={analysis.externalLinks}
						brokenLinks={analysis.brokenLinks}
						loginFormPresent={analysis.loginFormPresent}
					/>
				) : null}
			</div>
		</div>
	);
}

export default Home;
