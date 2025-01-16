import {
  Building,
  ChartNetwork,
  CircleCheckBig,
  DollarSign,
  HandHelping,
  HeartHandshake,
  House,
  HousePlus,
  icons,
  NotebookPen
} from "lucide-react";

export const Menus = [
  {
    name: "Home"
  },
  {
    name: "About Us"
  },
  {
    name: "How It Works"
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
        icon: HousePlus
      },
      {
        name: "Investment Opportunities",
        desc: "Social Impact Real Estate Investments",
        icon: DollarSign
      },
      {
        name: "Platform as a Service",
        desc: "Property Management and Housing Matching Services",
        icon: Building
      }
    ]
  },
  {
    name: "Housing Solutions",
    subMenuHeadings: [
      "Finding Housing for Nonprofits",
      "Property Types and Specifications"
    ],
    subMenu: [
      {
        name: "Matching Nonprofits to Properties",
        desc: "How We Help Nonprofits Secure Housing",
        icon: HeartHandshake
      },
      {
        name: "Property Types",
        desc: "Veteran, Senior, Behavioral Health, and More",
        icon: House
      }
    ]
  },
  {
    name: "Investor Network",
    subMenuHeadings: ["Overview", "Case Studies"],
    subMenu: [
      {
        name: "Joining the Network",
        desc: "How to Invest in Housing Solutions",
        icon: ChartNetwork
      },
      {
        name: "Case Studies",
        desc: "Success Stories of Social Impact Investments",
        icon: NotebookPen
      }
    ]
  },
  {
    name: "Nonprofit Network",
    subMenuHeadings: ["Join the Nonprofit Network", "Success Stories"],
    subMenu: [
      {
        name: "Registering Nonprofits",
        desc: "How Nonprofits Can Request Housing",
        icon: HandHelping
      },
      {
        name: "Success Stories",
        desc: "Nonprofits Benefiting from Stable Housing",
        icon: CircleCheckBig
      }
    ]
  },
  {
    name: "Blog"
  },
  {
    name: "Contact"
  }
];

export const footerMenu = [];
