import {
	Banknote,
	BarChart3,
	BookUser,
	Bot,
	BrainCircuit,
	CalendarCheck,
	CalendarClock,
	CalendarDays,
	CalendarRange,
	Component,
	Database,
	Feather,
	Gauge,
	Home,
	Library,
	MessagesSquare,
	Palette,
	Tag,
	Tags,
	WalletCards
} from 'lucide-svelte';

type NavigationDetails = {
	label: string;
	href: string;
	icon: typeof Component;
	activeCondition: string;
};

type Links = NavigationDetails & {
	conditionForSubNav: null | string;
	subRoutes: NavigationDetails[];
};

type BrandConfig = {
	name: string;
	logo: string;
};

export const brandConfig: BrandConfig = {
	name: 'Course Pirates',
	logo: '/logo.svg'
};

export const subNavs: Record<string, Array<NavigationDetails>> = {
	admin: [
		{
			label: 'Analytics',
			href: `/admin/analytics`,
			activeCondition: 'analytics',
			icon: Library
		},
		{
			label: 'Users',
			href: `/admin/users`,
			activeCondition: 'users',
			icon: Gauge
		},
		{
			label: 'Courses',
			href: `/admin/courses`,
			activeCondition: 'courses',
			icon: WalletCards
		}
	]
};

export const navItems: Links[] = [
	{
		label: 'Dashboard',
		href: '/dashboard',
		conditionForSubNav: null, // includes in path
		icon: Home,
		activeCondition: 'dashboard',
		subRoutes: []
	},
	{
		label: 'Courses',
		href: '/courses',
		conditionForSubNav: null, // includes in params
		icon: Bot,
		activeCondition: 'courses',
		subRoutes: []
	},
	{
		label: 'Admin',
		href: '/admin/analytics',
		conditionForSubNav: 'admin', // includes in path
		icon: Banknote,
		activeCondition: 'null',
		subRoutes: subNavs.admin
	}
];
