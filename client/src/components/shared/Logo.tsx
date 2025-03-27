import logoImage from '@assets/1.png';

interface LogoProps {
  textColor: 'primary' | 'white';
}

export function Logo({ textColor }: LogoProps) {
  return (
    <div className="flex items-center space-x-3">
      <img 
        src={logoImage}
        alt="ZaborStroy Logo" 
        className="w-12 h-12 object-contain" 
      />
      <div>
        <h1 className={`text-xl font-bold ${textColor === 'primary' ? 'text-primary' : 'text-white'}`}>ZaborStroy</h1>
        <p className={`text-xs ${textColor === 'primary' ? 'text-[#666666]' : 'text-white'}`}>Заборы и ворота в Москве</p>
      </div>
    </div>
  );
}
