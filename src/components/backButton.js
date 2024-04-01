import Link from 'next/link';
import Image from 'next/image';
import backButton from '../../public/back-button.svg';

const BackButton = () => {
  return (
    <div className="back-button-container">
      <Link href="">
        {/* No need for <a> tag here */}
        <Image src={backButton} alt="Back" width={24} height={24} />
        Back
      </Link>
    </div>
  );
};

export default BackButton;
