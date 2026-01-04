import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const GithubActivity = ({ isDarkMode }) => {
    return (
        <div id="github" className="text-black dark:text-white font-roboto-mono rounded-xl px-6 py-4">
            <h1 className="text-2xl font-lato font-semibold text-center sm:text-left">GitHub Activity</h1>
            <div className="mt-3 flex justify-center sm:justify-start overflow-hidden">
                <GitHubCalendar
                    username="sivakumar232"
                    blockSize={11}
                    blockMargin={3}
                    fontSize={13}
                    weeks={17}
                    colorScheme={isDarkMode ? 'dark' : 'light'}
                    style={{ maxWidth: '100%' }}
                    theme={{
                        light: ['#f1f5f9', '#cbd5e1', '#94a3b8', '#64748b', '#475569'],
                        dark: ['#1e293b', '#334155', '#475569', '#64748b', '#94a3b8'],
                    }}
                />
            </div>
        </div>
    );
};

export default GithubActivity;
