import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';

const CheckKnowledge = () => {
  const knowledgeLevel: string = 'beginner';
  let circleColor: string = '';

  if (knowledgeLevel === 'beginner') {
    circleColor = 'bg-green-500';
  } else if (knowledgeLevel === 'intermediate') {
    circleColor = 'bg-orange-500';
  } else if (knowledgeLevel === 'expert') {
    circleColor = 'bg-red-500';
  }

  return (
    <div className="w-full space-y-2 flex flex-row justify-around items-center">
      <div>
        <p className="text-xl font-bold text-primary mb-2">
          Check your knowledge level
        </p>
        <div className="flex flex-row">
          <Link
            to={'/knowledge-test'}
            className="inline-flex items-center space-x-2 px-3 py-1 bg-primary text-additional-second rounded-md hover:bg-tertiary hover:text-primary transition-all"
          >
            <span>Go to test</span>
            <FaLongArrowAltRight />
          </Link>
        </div>
      </div>
      <div
        className={`w-32 h-32 rounded-full flex justify-center items-center ${circleColor}`}
      >
        <div className="w-28 h-28 rounded-full flex justify-center items-center bg-tertiary">
          <p className="text-xl capitalize text-additional-first font-bold">
            {knowledgeLevel}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckKnowledge;
