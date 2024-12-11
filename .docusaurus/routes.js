import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/en/search',
    component: ComponentCreator('/en/search', '727'),
    exact: true
  },
  {
    path: '/en/',
    component: ComponentCreator('/en/', 'b08'),
    routes: [
      {
        path: '/en/',
        component: ComponentCreator('/en/', '17a'),
        exact: true,
        sidebar: "learnSidebar"
      },
      {
        path: '/en/tooca-l1-laser-engraver/',
        component: ComponentCreator('/en/tooca-l1-laser-engraver/', '1ef'),
        exact: true,
        sidebar: "learnSidebar"
      },
      {
        path: '/en/tooca-l1-laser-engraver/assembly-tutorials',
        component: ComponentCreator('/en/tooca-l1-laser-engraver/assembly-tutorials', 'd8a'),
        exact: true,
        sidebar: "learnSidebar"
      },
      {
        path: '/en/tooca-l1-laser-engraver/case-01-christmas-tree',
        component: ComponentCreator('/en/tooca-l1-laser-engraver/case-01-christmas-tree', '787'),
        exact: true,
        sidebar: "learnSidebar"
      },
      {
        path: '/en/tooca-l1-laser-engraver/case-02-the-world-map',
        component: ComponentCreator('/en/tooca-l1-laser-engraver/case-02-the-world-map', 'b3f'),
        exact: true,
        sidebar: "learnSidebar"
      },
      {
        path: '/en/tooca-l1-laser-engraver/case-03-the-elk',
        component: ComponentCreator('/en/tooca-l1-laser-engraver/case-03-the-elk', 'ee1'),
        exact: true,
        sidebar: "learnSidebar"
      },
      {
        path: '/en/tooca-l1-laser-engraver/case-04-balancing-birds',
        component: ComponentCreator('/en/tooca-l1-laser-engraver/case-04-balancing-birds', '431'),
        exact: true,
        sidebar: "learnSidebar"
      },
      {
        path: '/en/tooca-l1-laser-engraver/case-05-the-calendar',
        component: ComponentCreator('/en/tooca-l1-laser-engraver/case-05-the-calendar', 'b5a'),
        exact: true,
        sidebar: "learnSidebar"
      },
      {
        path: '/en/tooca-l1-laser-engraver/case-06-the-halberd-dragon',
        component: ComponentCreator('/en/tooca-l1-laser-engraver/case-06-the-halberd-dragon', 'f4e'),
        exact: true,
        sidebar: "learnSidebar"
      },
      {
        path: '/en/tooca-l1-laser-engraver/case-07-the-tyrannosaurus-rex',
        component: ComponentCreator('/en/tooca-l1-laser-engraver/case-07-the-tyrannosaurus-rex', '288'),
        exact: true,
        sidebar: "learnSidebar"
      },
      {
        path: '/en/tooca-l1-laser-engraver/case-08-the-pencil-holder-of-the-minions',
        component: ComponentCreator('/en/tooca-l1-laser-engraver/case-08-the-pencil-holder-of-the-minions', 'a7f'),
        exact: true,
        sidebar: "learnSidebar"
      },
      {
        path: '/en/tooca-l1-laser-engraver/case-09-the-cutebot-unicorn',
        component: ComponentCreator('/en/tooca-l1-laser-engraver/case-09-the-cutebot-unicorn', '198'),
        exact: true,
        sidebar: "learnSidebar"
      },
      {
        path: '/en/tooca-l1-laser-engraver/case-10-the-farm-protection-devices',
        component: ComponentCreator('/en/tooca-l1-laser-engraver/case-10-the-farm-protection-devices', 'ed2'),
        exact: true,
        sidebar: "learnSidebar"
      },
      {
        path: '/en/tooca-l1-laser-engraver/case-11-christmas-photo-frame',
        component: ComponentCreator('/en/tooca-l1-laser-engraver/case-11-christmas-photo-frame', '8dd'),
        exact: true,
        sidebar: "learnSidebar"
      },
      {
        path: '/en/tooca-l1-laser-engraver/case-12-christmas-sweets-sock',
        component: ComponentCreator('/en/tooca-l1-laser-engraver/case-12-christmas-sweets-sock', '2a1'),
        exact: true,
        sidebar: "learnSidebar"
      },
      {
        path: '/en/tooca-l1-laser-engraver/case-13-christmas-ambient-light',
        component: ComponentCreator('/en/tooca-l1-laser-engraver/case-13-christmas-ambient-light', 'cc0'),
        exact: true,
        sidebar: "learnSidebar"
      },
      {
        path: '/en/tooca-l1-laser-engraver/case-14-christmas-sweets-tree',
        component: ComponentCreator('/en/tooca-l1-laser-engraver/case-14-christmas-sweets-tree', '986'),
        exact: true,
        sidebar: "learnSidebar"
      },
      {
        path: '/en/tooca-l1-laser-engraver/case-15-christmas-atmosphere-ball',
        component: ComponentCreator('/en/tooca-l1-laser-engraver/case-15-christmas-atmosphere-ball', '64d'),
        exact: true,
        sidebar: "learnSidebar"
      },
      {
        path: '/en/tooca-l1-laser-engraver/case-library',
        component: ComponentCreator('/en/tooca-l1-laser-engraver/case-library', '467'),
        exact: true,
        sidebar: "learnSidebar"
      },
      {
        path: '/en/tooca-l1-laser-engraver/Download-and-install-software/',
        component: ComponentCreator('/en/tooca-l1-laser-engraver/Download-and-install-software/', 'bc4'),
        exact: true,
        sidebar: "learnSidebar"
      },
      {
        path: '/en/tooca-l1-laser-engraver/Download-and-install-software/lasergrbl-user-guide',
        component: ComponentCreator('/en/tooca-l1-laser-engraver/Download-and-install-software/lasergrbl-user-guide', 'bad'),
        exact: true,
        sidebar: "learnSidebar"
      },
      {
        path: '/en/tooca-l1-laser-engraver/Download-and-install-software/lightburn-user-guide',
        component: ComponentCreator('/en/tooca-l1-laser-engraver/Download-and-install-software/lightburn-user-guide', '90c'),
        exact: true,
        sidebar: "learnSidebar"
      },
      {
        path: '/en/tooca-l1-laser-engraver/elecfreaks-tooca-laser-1',
        component: ComponentCreator('/en/tooca-l1-laser-engraver/elecfreaks-tooca-laser-1', 'aea'),
        exact: true,
        sidebar: "learnSidebar"
      },
      {
        path: '/en/tooca-l1-laser-engraver/elecfreaks-tooca-laser-1-user-manuals',
        component: ComponentCreator('/en/tooca-l1-laser-engraver/elecfreaks-tooca-laser-1-user-manuals', '9f9'),
        exact: true,
        sidebar: "learnSidebar"
      },
      {
        path: '/en/tooca-l1-laser-engraver/firmware-update-method',
        component: ComponentCreator('/en/tooca-l1-laser-engraver/firmware-update-method', '16f'),
        exact: true,
        sidebar: "learnSidebar"
      },
      {
        path: '/en/tooca-l1-laser-engraver/Materia-usage-guidance',
        component: ComponentCreator('/en/tooca-l1-laser-engraver/Materia-usage-guidance', 'f55'),
        exact: true,
        sidebar: "learnSidebar"
      },
      {
        path: '/en/tooca-l1-laser-engraver/recognize-tooca-laser-1/',
        component: ComponentCreator('/en/tooca-l1-laser-engraver/recognize-tooca-laser-1/', 'e72'),
        exact: true,
        sidebar: "learnSidebar"
      },
      {
        path: '/en/tooca-l1-laser-engraver/recognize-tooca-laser-1/indicator-status-description',
        component: ComponentCreator('/en/tooca-l1-laser-engraver/recognize-tooca-laser-1/indicator-status-description', '930'),
        exact: true,
        sidebar: "learnSidebar"
      },
      {
        path: '/en/tooca-l1-laser-engraver/recognize-tooca-laser-1/notes-on-use',
        component: ComponentCreator('/en/tooca-l1-laser-engraver/recognize-tooca-laser-1/notes-on-use', '022'),
        exact: true,
        sidebar: "learnSidebar"
      },
      {
        path: '/en/tooca-l1-laser-engraver/recognize-tooca-laser-1/recognize-laser-1',
        component: ComponentCreator('/en/tooca-l1-laser-engraver/recognize-tooca-laser-1/recognize-laser-1', 'ad2'),
        exact: true,
        sidebar: "learnSidebar"
      },
      {
        path: '/en/tooca-l1-laser-engraver/recommended-parameters',
        component: ComponentCreator('/en/tooca-l1-laser-engraver/recommended-parameters', 'cb6'),
        exact: true,
        sidebar: "learnSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
