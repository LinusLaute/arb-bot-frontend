import {
  Crown,
  Activity,
  Shield,
  Award,
  Target
} from "lucide-react";

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
    { label: "Homepage", href: "/", active: true },
    { label: "News", href: "/news" },
    { label: "About Us", href: "/about" },
    {
      label: "Funds",
      href: "#",
      dropdown: [
        { label: "Overview", href: "/funds" },
        { label: "Riptide Fund", href: "/funds/riptide" },
        { label: "Case Fund", href: "/funds/case" }
      ]
    },
    { label: "Information", href: "/information" },
    { label: "FAQ", href: "/faq" }
  ]
};

export const HERO_CONFIG = {
  title: {
    highlight: "Unlock the Potential of",
    main: "Gaming Cosmetics Investments"
  },
  subtitle:
    "Invest in alternative markets, primarily CS:GO items, with Luti Capital's innovative investment strategies.",
  ctaButton: {
    text: "Explore Our Funds",
    href: "/funds"
  }
};

export const CONTENT_SECTIONS = [
  {
    id: "news",
    title: "Latest News",
    icon: Activity,
    content:
      "We are right now in the middle of assembling a new fund which will contain so called 'Major Stickers'. What those are and how they work can be read in our news section or by clicking the link below.",
    link: {
      text: "Read more",
      href: "/news"
    }
  },
  {
    id: "about",
    title: "About Luti Capital",
    icon: Shield,
    content:
      "Luti Capital is a leading investment firm specializing in the gaming cosmetics market. We offer multiple funds with different risk-reward ratios and a commitment to expanding into diverse markets. Our strategies aim to capitalize on the fast-growing gaming and esports industry without the need to invest in individual companies.",
    link: {
      text: "Read more",
      href: "/about"
    }
  },
  {
    id: "performance",
    title: "Performance Highlights",
    icon: Award,
    content:
      "Our funds have demonstrated strong growth and consistent returns over time. Explore our fund performance to see the opportunities gaming cosmetics investments offer.",
    link: {
      text: "Read more",
      href: "/funds",
    },
    stats: [
      { value: "+18.7%", label: "Average Return", color: "green" },
      { value: "€15.4K", label: "Monthly Volume", color: "blue" },
      { value: "234", label: "Trades Executed", color: "purple" }
    ]
  },
  {
    id: "strategy",
    title: "Investment Strategy",
    icon: Target,
    subtitle: "Profiting from Gaming Cosmetics",
    content:
      "As with any market, there are different kinds of options when it comes to volatility. Because of that, we have developed multiple funds with different components and different volatility classes. Our strategies aim to capitalize on the fast-growing gaming and esports industry without the need to invest in individual companies.",
    link: {
      text: "Read more",
      href: "/information"
    }
  }
];
