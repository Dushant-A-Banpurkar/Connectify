import React, { useState } from 'react';

const themes = [
  'light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate', 
  'synthwave', 'retro', 'cyberpunk', 'valentine', 'halloween', 
  'garden', 'forest', 'aqua', 'lofi', 'pastel', 'fantasy', 'wireframe', 
  'black', 'luxury', 'dracula', 'cmyk', 'autumn', 'business', 'acid', 
  'lemonade', 'night', 'coffee', 'winter'
];

const ThemeChanger: React.FC = () => {
  const [theme, setTheme] = useState('light');

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newTheme = e.target.value;
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div className="flex justify-end p-4">
      <select
        className="select select-bordered"
        value={theme}
        onChange={handleThemeChange}
      >
        {themes.map((theme) => (
          <option key={theme} value={theme}>
            {theme.charAt(0).toUpperCase() + theme.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ThemeChanger;
