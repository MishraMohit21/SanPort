import heroImg from '../assets/hero_image.png';
import photoImg from '../assets/Photo.png';
import footerImg from '../assets/FooterImage.png';

// Companies
import krishLogix from '../assets/KrishLogix.png';
import krishnaFlour from '../assets/KrishnaFlourMIll.png';
import krishvanaFlour from '../assets/KrishvanaFlour.png';
import krishvanaInfra from '../assets/KrishvanaInfra.png';
import lunarEdge from '../assets/Lunaredge.png';
import hotelKrishvanaLogo from '../assets/HotelKrishVanaLogo.svg';

// Education
import logoSkit from '../assets/logo_skit.png';
import logoSorbon from '../assets/logo_sorbon.png';
import eduPillar from '../assets/educationbookspillar.png';

// Industries
import agriImg from '../assets/agriculture_new_1782139487894.png';
import itOfficeImg from '../assets/it_office_new_1782139552399.png';
import robotFactoryImg from '../assets/manufacturing_new_1782139506959.png';
import techAgriImg from '../assets/agri_tech_new_1782139562816.png';
import wheatImg from '../assets/wheat_farming_new_1782139608484.png';
import mineImg from '../assets/mining_new_1782139574414.png';
import portImg from '../assets/port_new_1782139519750.png';
import realEstateImg from '../assets/real_estate_new_1782139622799.png';
import importExportImg from '../assets/import_export_new_1782139643638.png';
import flyoverImg from '../assets/infrastructure_new_1782139533397.png';
import flourMillImg from '../assets/flour_mill_new_1782139595598.png';
import eduIndustryImg from '../assets/education_new_1782139658084.png';
import hotelImg from '../assets/hotel_new.png';

// Achievements
import achGrowth from '../assets/ach_growth_new_1782140653024.png';
import achInnovation from '../assets/ach_innovation_new_1782140697213.png';
import achLeadership from '../assets/ach_leadership_new_1782140610864.png';
import achMilestones from '../assets/ach_milestones_new_1782140631299.png';
import achTrophy from '../assets/ach_trophy_new_1782140673776.png';

// Competencies
import compBusiness from '../assets/comp_business.png';
import compIndustry from '../assets/comp_industry.png';
import compLeadership from '../assets/comp_leadership.png';

export const content = {
  hero: {
    name: "SANJEEV GILL",
    image: heroImg,
    tagline: "Visionary Leadership & Strategic Growth",
  },
  about: {
    photo: photoImg,
    bio: "Driving transformational growth across diverse industries including IT, Agriculture, Real Estate, Manufacturing, and Infrastructure.",
  },
  education: {
    heroImage: eduPillar,
    items: [
      { id: 1, logo: logoSorbon, degree: "Executive Program", institution: "Sorbonne University" },
      { id: 2, logo: logoSkit, degree: "Bachelor of Engineering", institution: "SKIT" }
    ]
  },
  companies: [
    { id: 1, name: "Krish Logix", logo: krishLogix },
    { id: 2, name: "Krishna Flour Mill", logo: krishnaFlour },
    { id: 3, name: "Krishvana Flour", logo: krishvanaFlour },
    { id: 4, name: "Krishvana Infra", logo: krishvanaInfra },
    { id: 5, name: "Lunar Edge", logo: lunarEdge },
    { id: 6, name: "Hotel KrishVana Inn", logo: hotelKrishvanaLogo }
  ],
  industries: [
    { title: "Agriculture", image: agriImg },
    { title: "IT & Technology", image: itOfficeImg },
    { title: "Manufacturing", image: robotFactoryImg },
    { title: "Agri-Tech", image: techAgriImg },
    { title: "Flour Milling", image: flourMillImg },
    { title: "Farming", image: wheatImg },
    { title: "Mining", image: mineImg },
    { title: "Ports & Shipping", image: portImg },
    { title: "Real Estate", image: realEstateImg },
    { title: "Import & Export", image: importExportImg },
    { title: "Infrastructure", image: flyoverImg },
    { title: "Education", image: eduIndustryImg },
    { title: "Hospitality", image: hotelImg }
  ],
  achievements: [
    { title: "Growth", image: achGrowth },
    { title: "Innovation", image: achInnovation },
    { title: "Leadership", image: achLeadership },
    { title: "Milestones", image: achMilestones },
    { title: "Trophy", image: achTrophy }
  ],
  competencies: [
    { title: "Business Strategy", image: compBusiness },
    { title: "Industry Experience", image: compIndustry },
    { title: "Leadership", image: compLeadership }
  ],
  footer: {
    image: footerImg
  }
};
