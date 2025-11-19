import { Crown } from 'lucide-react';

export const SITE_CONFIG = {
    companyName: "Luti Capital",
    tagline: "Alternative investments in gaming cosmetics",
    year: "2024"
};

export const NAVIGATION_CONFIG = {
    logo: {
        icon: Crown,
        text: SITE_CONFIG.companyName
    },
    menuItems: [
        { label: "Homepage", href: "/", active: false },
        { label: "News", href: "/news", active: false },
        { label: "About Us", href: "/about", active: false },
        {
            label: "Funds",
            href: "#",
            dropdown: [
                { label: "Overview", href: "/funds/riptide" },
                { label: "Riptide Fund", href: "/funds/riptide" },
                { label: "Case Fund", href: "/funds/case" }
            ]
        },
        { label: "Information", href: "/information" },
        { label: "FAQ", href: "/faq" }
    ]
};
