import { createContext, useContext, useState } from 'react';
import axios from 'axios';

const IssuesContext = createContext();

export function IssuesContextProvider({ children }) {
    const [issues, setIssues] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [testUrl, setTestUrl] = useState('');
    const [title, setTitle] = useState('');

    const testAccessibility = async () => {
        setIsLoading(true);
        const url = `https://website-accessibility-tester.p.rapidapi.com/api/test?url=${testUrl}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': import.meta.env.VITE_ACCESSIBILITY_API_KEY,
                'X-RapidAPI-Host':
                    'website-accessibility-tester.p.rapidapi.com',
            },
        };

        try {
            const response = await axios.get(url, options);
            setIssues(response.data.issues);
            setTitle(response.data.documentTitle);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    const clearResults = (e) => {
        e.preventDefault();
        setIssues([]);
        setTestUrl('');
        setTitle('');
    };

    const escapeHTML = (html) => {
        return html
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    };

    const downloadIssues = (e) => {
        e.preventDefault();
        if (testUrl === '' || issues.length === 0) {
            alert('CSV not available');
        } else {
            const csv = issues
                .map((issue) => {
                    return `${issue.code},${issue.message},${issue.context}`;
                })
                .join('\n');

            const csvBlob = new Blob([csv], { type: 'text/csv' });
            const csvUrl = URL.createObjectURL(csvBlob);
            const link = document.createElement('a');
            link.href = csvUrl;
            link.download = 'Aware_Accessibility_issues' + Date.now() + '.csv';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        <IssuesContext.Provider
            value={{
                testUrl,
                setTestUrl,
                issues,
                setIssues,
                isLoading,
                setIsLoading,
                error,
                setError,
                title,
                setTitle,
                clearResults,
                testAccessibility,
                escapeHTML,
                downloadIssues,
            }}
        >
            {children}
        </IssuesContext.Provider>
    );
}

export function AccessibilityIssuesContext() {
    return useContext(IssuesContext);
}
