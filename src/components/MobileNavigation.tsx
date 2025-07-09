import { NAVIGATION_CONFIG } from "../config/sections";

const MobileNavigation = () => (
  <div className="md:hidden border-t border-gray-800 bg-gray-900">
    <div className="px-4 py-2 space-y-1">
      {NAVIGATION_CONFIG.menuItems.map((item, index) => (
        <div key={index}>
          {item.dropdown ? (
            <div className="px-3 py-2">
              <div className="text-gray-300 font-medium mb-2">{item.label}</div>
              <div className="pl-4 space-y-1">
                {item.dropdown.map((subItem, subIndex) => (
                  <a
                    key={subIndex}
                    href={subItem.href}
                    className="block py-1 text-sm text-gray-400 hover:text-white"
                  >
                    {subItem.label}
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <a
              href={item.href}
              className={`block px-3 py-2 rounded-lg transition-colors ${
                item.active
                  ? "text-white hover:bg-gray-800"
                  : "text-gray-300 hover:text-white hover:bg-gray-800"
              }`}
            >
              {item.label}
            </a>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default MobileNavigation;
