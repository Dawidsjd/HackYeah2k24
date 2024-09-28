import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';

const CheckKnowledge = () => {
  return (
    <div className="w-full space-y-2">
      <div>
        <p className="text-xl font-bold text-primary">
          Set level of your knowledge
        </p>
      </div>
      <div>
        <p className="text-additional-first text-left">
          Take a test to determine your level of knowledge and adjust your
          courses accordingly.
        </p>
      </div>
      {/* Ustawienie marginesu górnego oraz lepszy layout */}
      <div className="mt-8 flex flex-row items-center justify-between">
        <Link
          to="/knowledge-test"
          className="bg-primary text-additional-second rounded-md px-4 py-2 inline-flex items-center space-x-2"
        >
          <span>Go to test</span>
          <FaLongArrowAltRight />
        </Link>
        <p className="text-xl font-bold text-primary">Your level: null</p>
        {/*Do ustawienia Beginner, Basic, Intermediate, Advanced, Expert */}
      </div>
    </div>
  );
};

export default CheckKnowledge;
