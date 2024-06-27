import React from "react";
import {
  MediumProjectCard,
  ProjectCards,
} from "../components/Projects/ProjectCards";
import { Box, Center, Heading, Show } from "@chakra-ui/react";

import ff1 from "../images/ff1.png";
import ff2 from "../images/ff2.png";
import ff3 from "../images/ff3.png";
import ff4 from "../images/ff4.png";
import ff5 from "../images/ff5.png";
import ff6 from "../images/ff6.png";
import ff7 from "../images/ff7.png";
import ff8 from "../images/ff8.png";
import ff9 from "../images/ff9.png";
import ff10 from "../images/ff10.png";
import ff11 from "../images/ff11.png";
import ff12 from "../images/ff12.png";

import tc1 from "../images/tc1.png";
import tc2 from "../images/tc2.png";
import tc3 from "../images/tc3.png";
import tc4 from "../images/tc4.png";
import tc5 from "../images/tc5.png";
import tc6 from "../images/tc6.png";
import tc7 from "../images/tc7.png";
import tc8 from "../images/tc8.png";
import tc9 from "../images/tc9.png";
import tc10 from "../images/tc10.png";
import tc11 from "../images/tc11.png";
import tc12 from "../images/tc12.png";

import Arivu1 from "../images/Arivu1.png";
import Arivu2 from "../images/Arivu2.png";
import Arivu3 from "../images/Arivu3.png";
import Arivu4 from "../images/Arivu4.png";
import Arivu5 from "../images/Arivu5.png";
import Arivu6 from "../images/Arivu6.png";
import Arivu7 from "../images/Arivu7.png";
import Arivu8 from "../images/Arivu8.png";
import Arivu9 from "../images/Arivu9.png";
import Arivu10 from "../images/Arivu10.png";
import Arivu11 from "../images/Arivu11.png";
import Arivu12 from "../images/Arivu12.png";
import Arivu13 from "../images/Arivu13.png";

import wm1 from "../images/wm1.png";
import wm2 from "../images/wm2.png";
import wm3 from "../images/wm3.png";
import wm4 from "../images/wm4.png";
import wm5 from "../images/wm5.png";
import wm6 from "../images/wm6.png";
import wm7 from "../images/wm7.png";

import at1 from "../images/at1.png";
import at2 from "../images/at2.png";
import at3 from "../images/at3.png";
import at4 from "../images/at4.png";
import at5 from "../images/at5.png";
import at6 from "../images/at6.png";
import at7 from "../images/at7.png";
import at8 from "../images/at8.png";
import at9 from "../images/at9.png";

const Projects = () => {
  const FamousFootear=[ff1,ff2,ff3,ff4,ff5,ff6,ff7,ff8,ff9,ff10,ff11,ff12];
  const TechCube=[tc1,tc2,tc3,tc4,tc5,tc6,tc7,tc8,tc9,tc10,tc11,tc12];
  const Arivu=[Arivu1,Arivu2,Arivu3,Arivu4,Arivu5,Arivu6,Arivu7,Arivu8,Arivu9,Arivu10,Arivu11,Arivu12,Arivu13];
  const Wholemart=[wm1,wm2,wm3,wm4,wm5,wm6,wm7];
  const Attryb=[at1,at2,at3,at4,at5,at6,at7,at8,at9]
  
  
  return (
    <Box
      pl={{
        base: "5",
        sm: "5",
        md: "5",
        lg: "10",
        xl: "10",
        "2xl": "10",
      }}
      pr={{
        base: "5",
        sm: "5",
        md: "5",
        lg: "10",
        xl: "10",
        "2xl": "10",
      }}
      id="projects"
      fontFamily="'Poppins', sans-serif"

    >
      <Center>
        <Heading mb={"40px"} 
          fontFamily="'Poppins', sans-serif"
        
        textDecor={"underline"}>Projects</Heading>
      </Center>
      <ProjectCards
        direction={"row-reverse"}
        deployedLink={"https://magnificent-bonbon-8ffb8d.netlify.app/"}
        image={FamousFootear}
        title={"Famous Footwear"}
        subTitle={"Famous Footwear clone"}
        presentationLink={"https://github.com/Deepak-25yadav/Clone-Famous_Footwear"}
        features={[
          "Sign up: Register for an account to stay updated.",
"Log in: Access your account and order history.",
"Sort by Price: Organize products by cost to find the best deals.",
"Filter by Brand: Narrow down your choices by selecting preferred brands.",
"Add to cart: Save items for purchase and review before checkout."
        ]}
        description={
          "Famous Footwear: Famous Footwear is an online store dedicated to providing a diverse range of shoes for men, women, and kids. Customers can browse through an extensive collection, choose their favorite pairs, and easily place orders. The store frequently updates its inventory with new arrivals, and customers can sign up to receive updates on the latest styles and trends."
        }
        techStack={["HTML", "CSS", "JavaScript"]}
      />
      <ProjectCards
        direction={"row"}
        deployedLink={"https://tech-cube-ten.vercel.app/"}
        image={TechCube}
        title={"Tech-Cube"}
        subTitle={"Electronic Clone"}
        GithubLink={"https://github.com/Deepak-25yadav/Electronic-e-store"}
        features={[
          "API-based Sign in and Sign-up for users",
"Different sections for Mobiles, Laptops, Watches, and TVs",
"Category and price-based filtering",
"Dynamic Single Product route with comprehensive product descriptions",
"Personalized product suggestions"
        ]}
        description={
          "Tech Cube: Tech Cube is a premier e-commerce platform specializing in cutting-edge electronics. We offer a wide range of products, including the latest smartphones, high-performance laptops, stylish smartwatches, and state-of-the-art televisions. Our platform provides a seamless shopping experience with detailed product descriptions, customer reviews, and expert recommendations to help you make informed decisions."
        }
        techStack={["React.js", "Chakra UI", "MockApi","ContextApi"]}
      />
       <ProjectCards
        direction={"row-reverse"}
        deployedLink={"https://puny-potato-4945.vercel.app/"}
        image={Arivu}
        title={"Arivu"}
        subTitle={"Udemy Clone"}
        GithubLink={"https://github.com/Deepak-25yadav/Arivu"}
        features={[
          "Filter by category and Sort by price",
          "Product page with specific product",
          "Pagination and search functionality",
          "User should be logged in to complete purchases",
          "Order page to see recently ordered items",
          "Admin panel to perform CRUD operations.",
          "API-based Sign-in and Sign-up for users",
        ]}
        description={
"ARIVU: ARIVU is an innovative online learning hub, similar to Coursera, offering a wide range of courses across diverse domains. Our platform is designed for comprehensive skill development and knowledge enrichment, catering to learners of all levels. With expert instructors and engaging content, ARIVU helps you achieve your educational goals and advance your career."
        }
        techStack={["JavaScript", "React.js","Redux", "Node.js", "Express.js", "MongoDB"]}

      />
      <ProjectCards
        direction={"row"}
        deployedLink={"https://wholemart-deepak-25yadav.vercel.app/"}
        image={Wholemart}
        title={"WholeMart"}
        subTitle={"Myntra Clone"}
        GithubLink={"https://github.com/Deepak-25yadav/Wholemart"}
        features={[
          "Product page with Search ,Sort and Filter functionality to find the products",
          "Easy removing item ,increasing and decreasing product quantity with live price update's in cart page",
          "Coupons for availing discount's",
          "User-friendly Checkout Page"
        ]}
        description={
          "Imagine Wholemart as a website inspired by Myntra. It's a big online shop for fashion and lifestyle things. Like Myntra, it wants to make shopping easy and fun. It has lots of different brands and products from India. Wholemart is all about helping people feel stylish and happy when they shop."
        }
        techStack={["HTML", "CSS", "JavaScript","React.js","Context-API","Chakra UI"]}

      />
     
     <ProjectCards
        direction={"row"}
        deployedLink={"https://attryb-frontend-green.vercel.app/"}
        image={Attryb}
        title={"Attryb"}
        subTitle={"Mechanic car Clone"}
        GithubLink={"https://github.com/Deepak-25yadav/Attryb"}
        features={[
          "Product page with Search ,Sort and Filter functionality to find the products",
          "Easy removing item ,increasing and decreasing product quantity with live price update's in cart page",
          "Coupons for availing discount's",
          "User-friendly Checkout Page"
        ]}
        description={
          "Attryb: Attryb is a marketplace for second-hand cars, where dealers list their inventory on buycars.com. Buyers can browse through the available cars, view detailed listings, and make purchases directly from the site. Attryb offers a convenient platform for both dealers and buyers, simplifying the process of buying and selling used cars."
        }
        techStack={["HTML", "CSS", "JavaScript","React.js","Context-API","Chakra UI"]}

      />
     
      <Show breakpoint="(max-width: 993px)">

      <MediumProjectCard
        direction={"row-reverse"}
        deployedLink={"https://magnificent-bonbon-8ffb8d.netlify.app/"}
        image={FamousFootear}
        title={"Famous Footwear"}
        subTitle={"Famous Footwear clone"}
        GithubLink={"https://github.com/Deepak-25yadav/Clone-Famous_Footwear"}
        
        description={
          "Famous Footwear: Famous Footwear is an online store dedicated to providing a diverse range of shoes for men, women, and kids. Customers can browse through an extensive collection, choose their favorite pairs, and easily place orders. The store frequently updates its inventory with new arrivals, and customers can sign up to receive updates on the latest styles and trends."
        }
        techStack={["HTML", "CSS", "JavaScript"]}
      />



<MediumProjectCard
        direction={"row"}
        deployedLink={"https://tech-cube-ten.vercel.app/"}
        image={TechCube}
        title={"Tech-Cube"}
        subTitle={"Electronic Clone"}
        GithubLink={"https://github.com/Deepak-25yadav/Electronic-e-store"}
        
        description={
          "Tech Cube: Tech Cube is a premier e-commerce platform specializing in cutting-edge electronics. We offer a wide range of products, including the latest smartphones, high-performance laptops, stylish smartwatches, and state-of-the-art televisions. Our platform provides a seamless shopping experience with detailed product descriptions, customer reviews, and expert recommendations to help you make informed decisions."
        }
        techStack={["React.js", "Chakra UI", "MockApi","ContextApi"]}
      />


<MediumProjectCard
        direction={"row-reverse"}
        deployedLink={"https://puny-potato-4945.vercel.app/"}
        image={Arivu}
        title={"Arivu"}
        subTitle={"Udemy Clone"}
        GithubLink={"https://github.com/Deepak-25yadav/Arivu"}
        description={
"ARIVU: ARIVU is an innovative online learning hub, similar to Coursera, offering a wide range of courses across diverse domains. Our platform is designed for comprehensive skill development and knowledge enrichment, catering to learners of all levels. With expert instructors and engaging content, ARIVU helps you achieve your educational goals and advance your career."
        }
        techStack={["JavaScript", "React.js","Redux", "Node.js", "Express.js", "MongoDB"]}

      />

<MediumProjectCard
        direction={"row"}
        deployedLink={"https://wholemart-deepak-25yadav.vercel.app/"}
        image={Wholemart}
        title={"WholeMart"}
        subTitle={"Myntra Clone"}
        GithubLink={"https://github.com/Deepak-25yadav/Wholemart"}
        description={
          "Imagine Wholemart as a website inspired by Myntra. It's a big online shop for fashion and lifestyle things. Like Myntra, it wants to make shopping easy and fun. It has lots of different brands and products from India. Wholemart is all about helping people feel stylish and happy when they shop."
        }
        techStack={["HTML", "CSS", "JavaScript","React.js","Context-API","Chakra UI"]}

      />



<MediumProjectCard
        direction={"row"}
        deployedLink={"https://attryb-frontend-green.vercel.app/"}
        image={Attryb}
        title={"Attryb"}
        subTitle={"Mechanic car Clone"}
        GithubLink={"https://github.com/Deepak-25yadav/Attryb"}
        description={
          "Attryb: Attryb is a marketplace for second-hand cars, where dealers list their inventory on buycars.com. Buyers can browse through the available cars, view detailed listings, and make purchases directly from the site. Attryb offers a convenient platform for both dealers and buyers, simplifying the process of buying and selling used cars."
        }
        techStack={["HTML", "CSS", "JavaScript","React.js","Context-API","Chakra UI"]}

      />
     
      </Show>
    </Box>
  );
};

export default Projects;
