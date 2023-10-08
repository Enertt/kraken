import {lazy} from "react";

const ForgotPasswordPage = lazy(() => import('../pages/auth/forgot-password/ForgotPasswordPage'));
const LoginPage = lazy(() => import('../pages/auth/login/LoginPage'));
const Registration = lazy(() => import('../pages/auth/registration/RegistrationPage'));
const SuccessfulRegPage = lazy(() => import('../pages/auth/successful-registration/SuccessfulRegPage'));
const MainPage = lazy(() => import('../pages/others/main/MainPage'));
const TicketPage = lazy(() => import('../pages/others/ticket/TicketPage'));
const RulesPage = lazy(() => import('../pages/others/rules/RulesPage'));
const NotificationPage = lazy(() => import('../pages/others/notification/NotificationPage'));
const WalletPage = lazy(() => import('../pages/others/wallet/WalletPage'));
const FaqPage = lazy(() => import('../pages/others/faq/FaqPage'));
const SupportPage = lazy(() => import('../pages/others/support/SupportPage'));
const SsnReverseLookup = lazy(() => import('../pages/services/ssn-reverse/SsnReverse.jsx'));
const SsnLast4Lookup = lazy(() => import('../pages/services/ssn-last-4/SsnLast4.jsx'));
const BG = lazy(() => import('../pages/services/bg/BG.jsx'));
const SnnDobLookupPage = lazy(() => import('../pages/services/snn-full/SsnFull.jsx'));
const ProfilePage = lazy(() => import('../pages/others/profile/ProfilePage'));
const NotFoundPage = lazy(() => import('../pages/404/NotFoundPage.jsx'));
const DlLookupPage = lazy(() => import('../pages/services/dl/DL.jsx'));
const Dob = lazy(() => import('../pages/services/dob/Dob.jsx'));
const Api = lazy(() => import('../pages/others/API/Api.jsx'));

const Admin_authorization = lazy(() => import('../pages/admin/Admin_authorization.jsx'));

const Admin = lazy(() => import('../pages/admin/Admin.jsx'));

const AdminUsers = lazy(() => import('../pages/admin/Admin_users.jsx'));
const AdminStat = lazy(() => import('../pages/admin/AdminStat.jsx'));
const AdminTickets = lazy(() => import('../pages/admin/AdminTickets.jsx'));
const AdminPrices = lazy(() => import('../pages/admin/AdminPrices.jsx'));
const AdminNews = lazy(() => import('../pages/admin/Admin_news.jsx'));

export const routes = [

    {
        path: '/admin/login',
        component: Admin_authorization,
        isAuth: false
    },

    {
        path: '/admin/news',
        component: AdminNews,
        isAuth: false
    },

    {
        path: '/admin/prices',
        component: AdminPrices,
        isAuth: false
    },

    {
        path: '/admin/tickets',
        component: AdminTickets,
        isAuth: false
    },

    {
        path: '/admin',
        component: Admin,
        isAuth: false
    },
    {
        path: '/admin/users',
        component: AdminUsers,
        isAuth: false
    },

    {
        path: '/admin/statistics',
        component: AdminStat,
        isAuth: false
    },

    {
        path: '/api',
        component: Api,
        isAuth: true
    },
    {
        path: '/dl',
        component: DlLookupPage,
        isAuth: true
    },
    {
        path: '/dob',
        component: Dob,
        isAuth: true
    },


    {
        path: '/login',
        component: LoginPage,
        isAuth: false
    },
    {
        path: '/forgot-password',
        component: ForgotPasswordPage,
        isAuth: false
    },
    {
        path: '/register',
        component: Registration,
        isAuth: false
    },
    {
        path: '/successful-registration',
        component: SuccessfulRegPage,
        isAuth: false
    },
    {
        path: '/',
        component: MainPage,
        isAuth: true
    },
    {
        path: '/support',
        component: SupportPage,
        isAuth: true
    },
    {
        path: '/faq',
        component: FaqPage,
        isAuth: true
    },
    {
        path: '/wallet',
        component: WalletPage,
        isAuth: true
    },
    {
        path: '/notifications',
        component: NotificationPage,
        isAuth: true
    },
    {
        path: '/rules',
        component: RulesPage,
        isAuth: true
    },
    {
        path: '/tickets',
        component: TicketPage,
        isAuth: true
    },
    {
        path: '/profile',
        component: ProfilePage,
        isAuth: true
    },
    {
        path: '/ssn-full',
        component: SnnDobLookupPage,
        isAuth: true
    },

    {
        path: '/ssn-last-4',
        component: SsnLast4Lookup,
        isAuth: true
    },
    {
        path: '/ssn-reverse',
        component: SsnReverseLookup,
        isAuth: true
    },
    {
        path: '/bg',
        component: BG,
        isAuth: true
    },
    {
        path: '*',
        component: NotFoundPage,
        isAuth: true
    },
]
