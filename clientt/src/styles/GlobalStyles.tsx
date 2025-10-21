import styled, { createGlobalStyle, keyframes } from 'styled-components';

import GothamBlack from '@/assets/fonts/Gotham/woff2/Gotham-Black.woff2';
import GothamBold from '@/assets/fonts/Gotham/woff2/Gotham-Bold.woff2';
import GothamBook from '@/assets/fonts/Gotham/woff2/Gotham-Book.woff2';
import GothamBookItalic from '@/assets/fonts/Gotham/woff2/Gotham-BookItalic.woff2';
import GothamLight from '@/assets/fonts/Gotham/woff2/Gotham-Light.woff2';
import GothamMedium from '@/assets/fonts/Gotham/woff2/Gotham-Medium.woff2';
import GothamThin from '@/assets/fonts/Gotham/woff2/Gotham-Thin.woff2';
import GothamUltra from '@/assets/fonts/Gotham/woff2/Gotham-Ultra.woff2';
import GothamXLight from '@/assets/fonts/Gotham/woff2/Gotham-XLight.woff2';

export default createGlobalStyle`
  /* Font Gotham */
  @font-face {
    font-family: "Gotham";
    src: url(${GothamBookItalic}) format("woff2");
    font-weight: 500;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: "Gotham";
    src: url(${GothamBlack}) format("woff2");
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Gotham";
    src: url(${GothamLight}) format("woff2");
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Gotham";
    src: url(${GothamBold}) format("woff2");
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Gotham";
    src: url(${GothamBook}) format("woff2");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Gotham";
    src: url(${GothamMedium}) format("woff2");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Gotham Ultra";
    src: url(${GothamUltra}) format("woff2");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Gotham";
    src: url(${GothamThin}) format("woff2");
    font-weight: 100;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Gotham";
    src: url(${GothamXLight}) format("woff2");
    font-weight: 200;
    font-style: normal;
    font-display: swap;
  }

  :root {
    --font-primary: 'Gotham', sans-serif;

    --header-height: 70px;
    --mobilemenu-height: 70px;
    --sidebar-width: 340px;

    --page-mx-width: 1500px;
    --chat-width: 350px;

    --elements-height: 40px;

    --color-1: #202020;
    --color-2: #112231;
    --color-light2: #0A2F4C;
    --color-dark2: #173d6e;
    --color-hover2: #124a92b7;
    --color-3: #DDD9CB;
    --color-4: #ECEBE4;
    --color-5: #EEF0F2;
    --color-6: #FAFAFF;

    --color-accent: #2EC4B6;
    --color-error: #cb2626;

    --color-lightprimary: #303030;
    --color-black: #1d1c1b;
    --color-darkblack: #0c0c0c;
    --color-lightblack: #1d1d1d;

    --color-gray: rgb(123, 123, 123);
    --color-gray1: rgb(180, 180, 180);
    --color-gray2: rgb(200, 200, 200);
    --color-gray3: rgb(225, 225, 225);
    --color-gray4: rgb(235, 235, 235);
    --color-gray5: rgb(245, 245, 245);

    --color-white: #ffffff;

    --color-estudinoblue: #40a3d4;
    --color-darkestudinoblue: #275682;
    --color-darkblue: #0e76ff;
    --color-blue: #2985ff;
    --color-grafitti: #202020;
    --color-brown: #602B0D;
    --color-lightblue: #579efc;
    --color-red: #cb2626;
    --color-redd:#cb262639;
    --color-darkred: #810909;
    --color-lightgreen: #91d58d;
    --color-glowgreen: #2bd81e;
    --color-green: #50ca47;
    --color-darkgreen: #0d8a22;
    --color-yellow: #cfa527;
    --color-orange: #d88423;
    --color-darkorange: #2b230b;
    --color-pix: #3DCDB8;

    --color-whatsapp2: #1F272A;

    --color-whatsapp-lightgreen: #D9FDD3;
    --color-whatsapp-green: #21C063;
    --color-whatsapp-darkgreen: #15603E;
    --color-whatsapp-black: #0f0f0f;
    --color-whatsapp-othermentioned: #F2F2F2;
    --color-whatsapp-white: #ffffff;
    --color-whatsapp-bg: #FAF7F4;

    --color-notStarted: var(--color-gray);
    --color-learning: #1b54be;
    --color-learnt: #1bbe1b;
    --color-struggling: #db8d18;
    --color-toReview: var(--color-gray4);

    --color-modalbackground: var(--color-lightblack);
    --color-background: var(--color-gray5);
    --color-text: var(--color-grafitti);
    --color-inputs: var(--color-gray4);


     // Border-radius
    --br-xs: 4px;
    --br-sm: 8px;
    --br-md: 12px;
    --br-lg: 16px;
    --br-li: 20px;
    --br-xl: 28px;
    --br-full: 9999px;

    --default-bshadow: 0px 0px 12px 2px rgb(0, 0, 0, 0.3); // Box-shadow
    --default-light-bshadow: 0 2px 3px rgba(0, 0, 0, .075); // Box-shadow
    --default-btn-mt: 8px;
    --default-gradient: linear-gradient(153deg, #1a1a1a 18%, rgba(74,74,74,1) 100%);

    --default-pdn: 25px;
    @media (max-width: 768px) {
      --default-pdn: 1rem;
    }

    * {
      scrollbar-width: thin;
      scrollbar-color: var(--color-2) transparent;
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: var(--font-primary);
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    text-rendering: optimizeLegibility;
    font-synthesis: none;
  }

  html {
  }


  body {
    background-color: var(--color-background);

    font-optical-sizing: auto;
    color: var(--color-text);

    display: none;

    .Title {
      margin-bottom: 1.25rem !important;
      font-weight: 600 !important;


      h1,h2,h3,h4,h5,h6 {
        font-weight: 600 !important;
      }
    }


  }

  .fonts-loaded body {
    display: block;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  a, b, strong, em {
    font-size: inherit;
  }

  b, strong {
    font-weight: 500;
  }

  [class*="bold"], [class*="Bold"], [style*="font-weight: bold"] {
    font-weight: 500 !important;
  }

  ul,ol {
    margin: 0;
    padding: 0 1.25rem;

    li {
      padding: .5rem;

    }
  }

  ul,ol {
    ul, ol {
      padding:.5rem 1.25rem;

    }
  }


  h1, h2, h3, h4, h5, h6 {
    color: var(--color-2);
    font-weight: 500;
    line-height: 1.2;
  }

  h1 {
    font-size: 4rem;
  }

  h2 {
    font-size: 3rem;
  }

  h3 {
    font-size: 2rem;
  }

  h4 {
    font-size: 1.5rem;
  }

  h5 {
    font-size: 1rem;
  }

  h6 {
    font-size: 1rem;
  }

  p {
    font-size: 1rem;
  }

  span {
    font-size: 1rem;
  }

  svg {
    outline: none;
  }

  /* Tablet Breakpoint */
  @media (max-width: 768px) {
    h1 {
      font-size: 3rem;
    }

    h2 {
      font-size: 2.5rem;
    }

    h3 {
      font-size: 1.75rem;
    }

    h4 {
      font-size: 1.25rem;
    }

    h5 {
      font-size: 1rem;
    }

    h6 {
      font-size: 0.875rem;
    }

    p {
      font-size: 0.95rem;
    }
  }

  /* Mobile Breakpoint */
  @media (max-width: 480px) {
    h1 {
      font-size: 2.25rem;
    }

    h2 {
      font-size: 1.75rem;
    }

    h3 {
      font-size: 1.5rem;
    }

    h4 {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.9rem;
    }
  }

  /* Small Mobile Breakpoint */
  @media (max-width: 360px) {
    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1.25rem;
    }

    h4 {
      font-size: 1rem;
    }

    p {
      font-size: 0.875rem;
    }
  }



`;

export const TruncatedText = styled.div`
  min-width: 0;
  overflow: hidden;
  h1,
  h2,
  h3,
  h4,
  h5 {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const Body = styled.div<{
  $sideBarWidths: { left: number; right: number };
}>`
  margin: 0 auto;
  margin-top: var(--header-height);

  margin-left: ${({ $sideBarWidths }) => `${$sideBarWidths.left}px`};
  margin-right: ${({ $sideBarWidths }) => `${$sideBarWidths.right}px`};

  @media (max-width: 768px) {
    /* padding-bottom: var(--mobilemenu-height); */
  }
`;

export const Section = styled.div`
  max-width: var(--page-mx-width);
  width: 100%;

  padding: 2rem 1.5rem;
  margin: 0 auto;

  @media (max-width: 1000px) {
    padding: 1rem 0.75rem;
  }
`;

export const DefaultContentContainer = styled.div`
  width: 100%;
  max-width: var(--page-mx-width);
  padding: 3rem 0.75rem;
  margin: 0 auto;

  @media (max-width: 1000px) {
    padding: 20px 0.75rem;
  }
`;

export const HRBar = styled.div<{ $color?: string }>`
  width: 100%;
  height: 1px;
  background: ${({ $color }) => ($color ? $color : 'var(--color-2)')};
  opacity: 0.3;
  border-radius: var(--br-md);
`;

export const DefaultBox = styled.div`
  height: var(--elements-height);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-radius: var(--br-md);
  background-color: var(--color-1);
  padding: 0.5rem 1rem;
`;

export const SmallInfoMessage = styled.span`
  gap: 0.25rem;
  color: var(--color-gray) !important;
  font-weight: 600 !important;
  font-size: 12px !important;
`;

export const MediumInfoMessage = styled.span`
  color: var(--color-gray);
  font-weight: 600;
  font-size: 14px;
`;

const pulse = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`;

export const SkeletonBox = styled.div<{ height?: string; width?: string }>`
  flex-shrink: 0;
  background: var(--color-gray3);
  border-radius: var(--br-md);
  animation: ${pulse} 0.8s ease-in-out infinite;
  height: ${({ height }) => (height ? height : '20px')};
  width: ${({ width }) => width || '100%'};
`;
