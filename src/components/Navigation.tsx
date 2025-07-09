import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { NAVIGATION_CONFIG } from "../config/sections";

const Navigation = () => {
  const [isFundsDropdownOpen, setIsFundsDropdownOpen] = useState(false);

  return (
    <nav className="hidden md:flex items-center space-x-8">
      {NAVIGATION_CONFIG.menuItems.map((item, index) => (
        <div key={index} className="relative">
          {item.dropdown ? (
            <>
              <button
                onClick={() => setIsFundsDropdownOpen(!isFundsDropdownOpen)}
                className={`flex items-center gap-1 transition-colors ${
                  item.active ? "text-white" : "text-gray-300 hover:text-purple-400"
                }`}
              >
                {item.label}
                <ChevronDown className="w-4 h-4" />
              </button>
              {isFundsDropdownOpen && (
                <div className="absolute top-full mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-lg py-2">
                  {item.dropdown.map((subItem, subIndex) => (
                    <a
                      key={subIndex}
                      href={subItem.href}
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700"
                    >
                      {subItem.label}
                    </a>
                  ))}
                </div>
              )}
            </>
          ) : (
            <a
              href={item.href}
              className={`transition-colors ${
                item.active ? "text-white" : "text-gray-300 hover:text-purple-400"
              }`}
            >
              {item.label}
            </a>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Navigation;
