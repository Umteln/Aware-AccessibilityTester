import { AccessibilityIssuesContext } from '../context/IssuesContext';
import Card from './Card';

const Results = () => {
    const { issues, title } = AccessibilityIssuesContext();
    return (
        <div>
            {title && (
                <h6 className='font-semibold text-[24px] p-3'>
                    <span className='text-indigo-700'>Website Title: </span>{' '}
                    {title}
                </h6>
            )}

            <ul className='divide-y divide-slate-400 bg-white shadow-xl overflow-hidden sm:rounded-md max-w-2xl mx-auto'>
                {issues?.map((issue, i) => (
                    <Card
                        key={i}
                        issue={issue}
                    />
                ))}
            </ul>
        </div>
    );
};

export default Results;
