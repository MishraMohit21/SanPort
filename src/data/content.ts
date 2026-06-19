import heroImg from '../assets/hero_image.png';
import photoImg from '../assets/Photo.png';
import footerImg from '../assets/FooterImage.png';

// Companies
import krishLogix from '../assets/KrishLogix.png';
import krishnaFlour from '../assets/KrishnaFlourMIll.png';
import krishvanaFlour from '../assets/KrishvanaFlour.png';
import krishvanaInfra from '../assets/KrishvanaInfra.png';
import lunarEdge from '../assets/Lunaredge.png';

// Education
import logoSkit from '../assets/logo_skit.png';
import logoSorbon from '../assets/logo_sorbon.png';
import eduPillar from '../assets/educationbookspillar.png';

// Industries
import agriImg from '../assets/Agriculture.png';
import itOfficeImg from '../assets/IToffice.png';
import robotFactoryImg from '../assets/roboticFactory.png';
import techAgriImg from '../assets/techAgri.png';
import wheatImg from '../assets/wheatfieldIllustration.png';
import mineImg from '../assets/minesite.png';
import portImg from '../assets/portships.png';
import realEstateImg from '../assets/industry_realestate.png';
import importExportImg from '../assets/importExprt.png';
import flyoverImg from '../assets/flyover.png';
import flourMillImg from '../assets/flourmillillustration.png';

// Achievements
import achGrowth from '../assets/achievement_growth.png';
import achInnovation from '../assets/achievement_innovation.png';
import achLeadership from '../assets/achievement_leadership.png';
import achMilestones from '../assets/achievement_milestones.png';
import achTrophy from '../assets/achievement_trophy.png';

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
    { id: 5, name: "Lunar Edge", logo: lunarEdge }
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
    { title: "Infrastructure", image: flyoverImg }
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
