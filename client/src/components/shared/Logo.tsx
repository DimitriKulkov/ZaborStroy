interface LogoProps {
  textColor: 'primary' | 'white';
}

export function Logo({ textColor }: LogoProps) {
  return (
    <div className="flex items-center space-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke={textColor === 'primary' ? '#556B2F' : '#FFFFFF'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 9l9 -7 9 7v11a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
      <div>
        <h1 className={`text-xl font-bold ${textColor === 'primary' ? 'text-primary' : 'text-white'}`}>ZaborStroy</h1>
        <p className={`text-xs ${textColor === 'primary' ? 'text-[#666666]' : 'text-white'}`}>Заборы и ворота в Воронеже</p>
      </div>
    </div>
  );
}
