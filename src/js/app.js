import '/src/components/card-slider/index';
import MobileNav from '../components/mobile-nav/MobileNav';
import './swiper-gallery';
import ContactsPage from "../templates/contacts/js/contacts"
import AboutPage from "../templates/about/js/index";

window.mobileNav = new MobileNav();
window.contactsPage = new ContactsPage();
window.aboutPage = new AboutPage();