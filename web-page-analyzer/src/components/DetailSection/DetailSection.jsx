function DetailSection({
	htmlVersion,
	title,
	headings,
	internalLinks,
	externalLinks,
	brokenLinks,
	loginFormPresent,
}) {
	return (
		<>
			<div className="mt-6 border rounded-lg p-4">
				<p className="text-sm">
					<span className="font-semibold">HTML Version:</span>{' '}
					<span className="text-gray-700">{htmlVersion}</span>
				</p>
				<p className="text-sm">
					<span className="font-semibold">Title:</span>{' '}
					<span className="text-gray-700">{title}</span>
				</p>
				<p className="text-sm">
					<span className="font-semibold">Headings:</span>{' '}
					<span className="text-gray-700">{headings}</span>
				</p>
				<p className="text-sm">
					<span className="font-semibold">Internal Links: </span>
					<span className="text-gray-700">{internalLinks}</span>
				</p>
				<p className="text-sm">
					<span className="font-semibold">External Links: </span>
					<span className="text-gray-700">{externalLinks}</span>
				</p>
				<p className="text-sm">
					<span className="font-semibold">Broken Links:</span>{' '}
					<span className="text-gray-700">{brokenLinks}</span>
				</p>
				<p className="text-sm">
					<span className="font-semibold">Login Form Present: </span>
					<span className="text-gray-700">
						{loginFormPresent ? 'Yes' : 'No'}
					</span>
				</p>
			</div>
		</>
	);
}

export default DetailSection;
