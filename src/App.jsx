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

                    <div
                        className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
                        aria-hidden='true'
                    >
                        <div
                            className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
