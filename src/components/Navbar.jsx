import { FaRegLightbulb } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className='bg-white border-gray-200 py-2.5 dark:bg-gray-900'>
            <div className='flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto'>
                <a
                    href='/'
                    className='flex items-center'
                >
                    <FaRegLightbulb className='text-indigo-600 mr-1 hover:text-white' />
                    <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
                        Aware
                    </span>
                </a>
                <div className='flex items-center lg:order-2'>
                    <div className='hidden mt-2 mr-4 sm:inline-block'>
                        <span></span>
                    </div>
                    <button
                        className='text-white bg-indigo-600 hover:bg-g-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800'
                        onClick={() => {}}
                    >
                        Download
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
