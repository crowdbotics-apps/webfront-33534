export interface Route {
  name: RouteName
  pattern: RouterPath
  page: string
}

export enum RouteName {
  HOME = 'home',
  WHY = 'why',
  HOW = 'how',
  ABOUT = 'about',
  FAQ = 'faq',
  GET_STARTED = 'started',
}

export enum RouterPath {
  HOME = '/',
  WHY = '/why-recapp',
  HOW = '/how-does-it-works',
  ABOUT = '/about-us',
  FAQ = '/faq',
  GET_STARTED = '/get-started',
}

const routes: Route[] = [
  {
    page: '/Home',
    name: RouteName.HOME,
    pattern: RouterPath.HOME,
  },
  {
    page: '/WhyReCapp',
    name: RouteName.WHY,
    pattern: RouterPath.WHY,
  },
  {
    page: '/HowDoesItWorks',
    name: RouteName.HOW,
    pattern: RouterPath.HOW,
  },
  {
    page: '/AboutUs',
    name: RouteName.ABOUT,
    pattern: RouterPath.ABOUT,
  },
  {
    page: '/FAQ',
    name: RouteName.FAQ,
    pattern: RouterPath.FAQ,
  },
  {
    page: '/GetStarted',
    name: RouteName.GET_STARTED,
    pattern: RouterPath.GET_STARTED,
  },
]

export default routes
