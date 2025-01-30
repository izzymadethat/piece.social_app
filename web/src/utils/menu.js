import {
  Building,
  ChartNetwork,
  CircleCheckBig,
  DollarSign,
  HandHelping,
  HeartHandshake,
  House,
  HousePlus,
  NotebookPen,
  icons
} from "lucide-react";

export const Menus = [
  {
    name: "Home",
    route: "/"
  },
  {
    name: "About Us",
    route: "/about"
  },
  {
    name: "How It Works",
    route: "/how-it-works"
  },
  {
    name: "Services",
    subMenuHeadings: [
      "For NonProfits",
      "Investment Opportunities",
      "Platform as a Service"
    ],
    subMenu: [
      {
        name: "Housing",
        desc: "Providing Housing Solutions for multiple causes and ",
        icon: HousePlus,
        route: "/services/housing"
      },
      {
        name: "Investment Opportunities",
        desc: "Social Impact Real Estate Investments",
        icon: DollarSign,
        route: "/services/investing"
      },
      {
        name: "Platform as a Service",
        desc: "Property Management and Housing Matching Services",
        icon: Building,
        route: "/services/platform"
      }
    ]
  },
  // {
  // 	name: "Housing Solutions",
  // 	subMenuHeadings: [
  // 		"Finding Housing for Nonprofits",
  // 		"Property Types and Specifications",
  // 	],
  // 	subMenu: [
  // 		{
  // 			name: "Matching Nonprofits to Properties",
  // 			desc: "How We Help Nonprofits Secure Housing",
  // 			icon: HeartHandshake,
  // 			route: "#",
  // 			comingSoon: true,
  // 		},
  // 		{
  // 			name: "Property Types",
  // 			desc: "Veteran, Senior, Behavioral Health, and More",
  // 			icon: House,
  // 			route: "#",
  // 			comingSoon: true,
  // 		},
  // 	],
  // },
  // {
  // 	name: "Investor Network",
  // 	subMenuHeadings: ["Overview", "Case Studies"],
  // 	subMenu: [
  // 		{
  // 			name: "Case Studies",
  // 			desc: "Success Stories of Social Impact Investments",
  // 			icon: NotebookPen,
  // 			comingSoon: true,
  // 			route: "#",
  // 		},
  // 		{
  // 			name: "Joining the Network",
  // 			desc: "How to Invest in Housing Solutions",
  // 			icon: ChartNetwork,
  // 			comingSoon: true,
  // 			route: "#",
  // 		},
  // 	],
  // },
  // {
  // 	name: "Nonprofit Network",
  // 	subMenuHeadings: ["Join the Nonprofit Network", "Success Stories"],
  // 	subMenu: [
  // 		{
  // 			name: "Registering Nonprofits",
  // 			desc: "How Nonprofits Can Request Housing",
  // 			icon: HandHelping,
  // 			comingSoon: true,
  // 			route: "#",
  // 		},
  // 		{
  // 			name: "Success Stories",
  // 			desc: "Nonprofits Benefiting from Stable Housing",
  // 			icon: CircleCheckBig,
  // 			comingSoon: true,
  // 			route: "#",
  // 		},
  // 	],
  // },
  // {
  // 	name: "Blog",
  // 	comingSoon: true,
  // 	route: "#",
  // },
  {
    name: "Contact",
    route: "/contact"
  }
];

export const footerMenu = [];
