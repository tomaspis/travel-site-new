import '../styles/styles.css'
import MobileMenu from './modules/mobileMenu'

let mobileMenu = new MobileMenu();

if (module.hot) {
    module.hot.accept()
}

