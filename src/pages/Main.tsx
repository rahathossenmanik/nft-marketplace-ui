import React from 'react';
import TopNavbar from '../components/TopNavbar';
import HeroSection from '../components/HeroSection';
import FeaturePros from '../components/FeaturePros';
import Footer from '../components/Footer';
import TopNFTSection from '../components/TopNFTSection';
import Collection from '../components/Collection';
import SignupSection from '../components/SignupSection';
import MarketPlace from '../components/MarketPlace';

const Main = () => {
  return (
    <>
      <TopNavbar />
      <HeroSection />
      <FeaturePros />
      <TopNFTSection />
      <Collection />
      <SignupSection />
      <MarketPlace />
      <Footer />
      <div className='git-repo-ribbon'>
        <a
          href='https://github.com/rahathossenmanik/nft-marketplace'
          target='_blank'
          rel='noreferrer'>
          View Repo in GitHub
        </a>
      </div>
    </>
  );
};

export default Main;
