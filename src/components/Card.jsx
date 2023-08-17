import { BsCodeSlash } from 'react-icons/bs';
import { AccessibilityIssuesContext } from '../context/IssuesContext';

const Card = ({ issue }) => {
    const { escapeHTML } = AccessibilityIssuesContext();
    return (
        <li>
            <div className='px-4 py-5 sm:px-6 flex mb-6'>
                <div className=' text-white text-bold flex-none my-4 mx-3 hidden sm:flex lg:flex xl:flex rounded-full ring-1 ring-slate-900/5 shadow-md items-center justify-center bg-indigo-600 w-20 h-20'>
                    <BsCodeSlash size={30} />
                </div>
                <div>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-lg leading-6 font-medium text-gray-900'>
                            {issue.message}
                        </h3>
                    </div>
                    <div className='mt-4 flex items-center justify-between'>
                        <p className='text-sm font-medium text-gray-500'>
                            {escapeHTML(issue.context)}
                        </p>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default Card;
