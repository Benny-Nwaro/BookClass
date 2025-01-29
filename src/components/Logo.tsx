// import EducifyLogo from '/assets/Educify-logo.svg';
import Image from 'next/image';

export default function Logo() {
  return (
    <>
      <Image src="/assets/Educify-logo.svg" width={200} height={100} className='logo' alt='Educify Logo' />
    </>
  )
}
