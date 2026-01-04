import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const GithubActivity = ({ isDarkMode }) => {
    return (
        <div id="github" className="text-black dark:text-white font-sans dark:bg-black rounded-xl px-6 py-4">
            <h1 className="text-2xl font-lato font-semibold text-center sm:text-left">GitHub Activity</h1>
            <div id="github-activity-container" className="mt-3 flex justify-center  border px-10  border-dashed py-8 rounded border-neutral-400 dark:border-neutral-600 bg-white dark:bg-black text-sm font-semibold font-hanken  sm:justify-start overflow-x-auto">
                <GitHubCalendar
                    username="sivakumar232"
                    blockSize={11}
                    blockMargin={4}
                    fontSize={14}
                    colorScheme={isDarkMode ? 'dark' : 'light'}
                    style={{
                        color: isDarkMode ? '#fff' : '#000'
                    }}
                />
            </div>
        </div>
    );
};

export default GithubActivity;
