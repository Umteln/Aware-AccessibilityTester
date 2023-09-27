import Navbar from './components/Navbar';
import Form from './components/Form';
import LoadingSkeleton from './components/LoadingSkeleton';
import { AccessibilityIssuesContext } from './context/IssuesContext';
import Results from './components/Results';

function App() {
    const { isLoading } = AccessibilityIssuesContext();

    return (
        <>
            <div className='App'>
                <Navbar />
                <div className='bg-white'>
                    <div className='mx-auto max-w-2xl py-20 sm:py-38 lg:py-38'>
                        <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
                            <div className='relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
                                Everyone benefits from making the web
                                accessibile.{' '}
                                <a
                                    href='https://www.w3.org/WAI/'
                                    alt='W3C Web Accessibility link'
                                    className='font-semibold text-indigo-600'
                                >
                                    <span
                                        className='absolute inset-0'
                                        aria-hidden='true'
                                    />
                                    Learn more{' '}
                                    <span aria-hidden='true'>&rarr;</span>
                                </a>
                            </div>
                        </div>
                        <div className='text-center'>
                            <h3 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
                                Ensure{' '}
                                <span className='border-b-[2px] border-yellow-300 '>
                                    accessibility
                                </span>{' '}
                                for all
                            </h3>
                            <p className='mt-6 text-lg leading-8 text-gray-600'>
                                Enter a URL below to check for any accessibile
                                issues.
                            </p>
                            <div className='mt-10 flex items-center justify-center gap-x-6'>
                                <Form />
                            </div>
                            <div className='mt-10 flex items-center justify-center gap-x-6'>
                                {/* Result area */}

                                {isLoading ? <LoadingSkeleton /> : <Results />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
