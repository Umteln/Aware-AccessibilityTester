import { createContext, useContext, useState } from 'react';

const IssuesContext = createContext();

export function IssuesContextProvider({ children }) {
    const [isLoading, setIsLoading] = useState(false);
    const [issues, setIssues] = useState([]);
    const [testUrl, setTestUrl] = useState('');
    const [title, setTitle] = useState('');

    const testAccessibility = async () => {
        if (testUrl === '') {
            alert('Please enter url');
        } else {
            setIsLoading(true);
            const url = `https://website-accessibility-tester.p.rapidapi.com/api/test?url=${testUrl}`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': import.meta.env
                        .VITE_ACCESSIBILITY_API_KEY,
                    'X-RapidAPI-Host':
                        'website-accessibility-tester.p.rapidapi.com',
                },
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                setIssues(result?.issues);
                setTitle(result.documentTitle);
                setIsLoading(false);
                console.log(result);
            } catch (error) {
                console.error(error);
            }
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

    return (
        <IssuesContext.Provider
            value={{
                isLoading,
                setIsLoading,
                testUrl,
                setTestUrl,
                issues,
                setIssues,
                title,
                setTitle,
                clearResults,
                testAccessibility,
                escapeHTML,
            }}
        >
            {children}
        </IssuesContext.Provider>
    );
}

export function AccessibilityIssuesContext() {
    return useContext(IssuesContext);
}
