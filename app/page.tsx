import HomePage from "./home/page";
import AboutPage from "./about/page";
import PropertyList from "./properties/page";
import ContactPage from "./contact/page";
import ImageGallery from "./image_gallery/page";
export default function Home() {
  return (
    <>
     
      <HomePage/>
      <AboutPage/>
      <PropertyList/>
      <ImageGallery/>
      <ContactPage/>
    </>
  );
}
