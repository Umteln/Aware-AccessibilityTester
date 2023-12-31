import { AccessibilityIssuesContext } from '../context/IssuesContext';

const Form = () => {
    const { testAccessibility, clearResults, testUrl, setTestUrl } =
        AccessibilityIssuesContext();

    const runCheck = (e) => {
        e.preventDefault();
        if (testUrl === '') {
            alert('Please enter url');
        } else {
            testAccessibility();
        }
    };

    return (
        <div>
            <form onSubmit={runCheck}>
                <label
                    htmlFor='url'
                    className='sr-only'
                >
                    web address
                </label>
                <input
                    id='url'
                    name='url'
                    type='text'
                    value={testUrl}
                    onChange={(e) => setTestUrl(e.target.value)}
                    className='min-w-0 flex-auto rounded-md border-[1px] border-indigo-600 bg-white/5 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
                    placeholder='http://www.test.com'
                />

                <button
                    type='submit'
                    className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mx-2 '
                >
                    Run Check
                </button>
                <button
                    onClick={clearResults}
                    className='cursor-pointer rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 '
                >
                    Clear
                </button>
            </form>
        </div>
    );
};

export default Form;
