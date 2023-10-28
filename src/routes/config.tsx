import { Login } from "@/pages/Login";

import { MainContainer } from "@/layouts/Containers/MainContainer";
import { AuthLayout } from "@/layouts/Auth/AuthLayout";

import { Detail } from "@/pages/Patients";
import { Home as PatientHomePage } from "@/pages/Patients/Home";

import { flattenConfig } from "@/utils/routes.util";

export enum RouteNodeType {
  LAYOUT,
  PAGE
}

// type RouteNode = {
//     id: string;
//     element: JSX.Element;
//     type?: RouteNodeType;
//     children: RouteNode[];
//     title?: string;
//     path?: string;
//     isPrivate?: boolean;
// }

export const config = [
  {
    id: "auth-container",
    element: <AuthLayout />,
    type: RouteNodeType.LAYOUT,
    children: [
      {
        id: 'login',
        title: 'Log In',
        element: <Login />,
        path: '/',
        isPrivate: false,
      },
    ]
  },
  {
    id: "main-container",
    element: <MainContainer />,
    type: RouteNodeType.LAYOUT,
    children: [
      {
        id: "patients-home",
        title: 'Pacientes',
        element: <PatientHomePage />,
        path: '/patients',
        isPrivate: true,
        sidebar: true
      },
    ]
  },
  {
    id: 'patients-attention',
    title: 'Detalle de Paciente',
    element: <Detail />,
    path: '/detail',
    isPrivate: false,
  },
  // {
  //   id: 'sign-up',
  //   title: 'Sign Up',
  //   element: <SignUp />,
  //   path: '/signup',
  //   isPrivate: false,
  // },
  // {
  //   id: 'onboarding',
  //   title: 'Onboarding',
  //   element: <Onboarding />,
  //   path: '/onboarding',
  //   isPrivate: true,
  //   children: [
  //     {
  //       id: 'professor-onboarding',
  //       title: 'Onboarding del Profesor',
  //       element: <ProfessorOnboarding />,
  //       path: 'professor-onboarding',
  //       isPrivate: true,
  //     },

  //     {
  //       id: 'student-onboarding',
  //       title: 'Onboarding del Estudiante',
  //       element: <StudentOnboarding />,
  //       path: 'student-onboarding',
  //       isPrivate: true,
  //     },
  //   ],
  // },

  // {
  //   id: 'dashboard',
  //   title: 'Dashboard',
  //   element: <Dashboard />,
  //   // path: '/dashboard',
  //   path: '/',
  //   sidebar: true,
  //   isPrivate: true,
  //   iconId: "dashboard",
  // },

  // {
  //   id: 'profile',
  //   title: 'Perfil',
  //   element: <Profile />,
  //   path: '/profile',
  //   topbar: true,
  //   isPrivate: true,
  //   children: [
  //     {
  //       id: 'profile-settings',
  //       title: 'Configuración de Perfil',
  //       element: <Settings />,
  //       path: 'settings',
  //       isPrivate: true,
  //     },
  //   ],
  // },
  // {
  //   id: 'quizzes',
  //   title: 'Banco',
  //   element: <QuizHome />,
  //   path: '/quizzes',
  //   sidebar: true,
  //   isPrivate: true,
  //   iconId: "quizz",
  //   children: [
  //     {
  //       id: 'quizzes-create',
  //       title: 'Crear Quiz',
  //       element: <QuizzesCreate />,
  //       path: 'create',
  //       isPrivate: true,
  //     },
  //     {
  //       id: 'quizzes-edit',
  //       title: 'Editar Quiz',
  //       element: <QuizzesEditID />,
  //       path: 'edit/{quizId}',
  //       isPrivate: true,
  //     },
  //     {
  //       id: 'quizzes-attempt',
  //       title: 'Resolver Quiz',
  //       element: <QuizAttemptID />,
  //       path: 'quiz-attempt/{quizId}',
  //       isPrivate: true,
  //     },
  //   ],
  // },
  // {
  //   id: 'groups',
  //   title: 'Mi Grupo',
  //   element: <Groups />,
  //   path: '/groups',
  //   sidebar: true,
  //   isPrivate: true,
  //   iconId: "group",
  //   children: [
  //     {
  //       id: 'groups-create',
  //       title: 'Crear Grupo',
  //       element: <GroupsCreate />,
  //       path: 'create',
  //       isPrivate: true,
  //     },
  //     {
  //       id: 'groups-edit',
  //       title: 'Editar Grupo',
  //       element: <GroupsEditID />,
  //       path: 'edit/{groupId}',
  //       isPrivate: true,
  //     },
  //   ],
  // },
  // {
  //   id: 'tests',
  //   title: 'Evaluaciones',
  //   element: <TestHome />,
  //   path: '/tests',
  //   sidebar: true,
  //   isPrivate: true,
  //   iconId: "test",
  // }
];



const flatConfig = flattenConfig(config);

export const breadcrumbNameMap = flatConfig.reduce((acc, routeConfig) => {
  if ( routeConfig.path && routeConfig.title ) return { ...acc, [routeConfig.path]: routeConfig.title };
  return { ...acc };
}, {});

export  const sidebarMenuOptions = flatConfig.filter(item => item.sidebar === true);
