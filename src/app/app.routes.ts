import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ContactComponent } from './contact/contact.component';
import { ProgrammesComponent } from './programmes/programmes.component';
import { AbonnementComponent } from './abonnement/abonnement.component';
import { BlogComponent } from './blog/blog.component';
import { ConceptComponent } from './concept/concept.component';
import { ActiviteComponent } from './activite/activite.component';

export const routes: Routes = [
    { path :'',
        component: HomepageComponent
    },
   
    {path:'admin',
        component:AdminComponent

    },
    {path:'connexion',
        component:LoginComponent

    },
    {path:'inscription',
       component: InscriptionComponent

    },
   {path:'contact',
       component: ContactComponent

    },

{  path:'programmes',
       component: ProgrammesComponent

    },
    {path:'concept',
       component: ConceptComponent

    },
    {path:'abonnement',
       component: AbonnementComponent

    },
     { path:'activite',
        component: ActiviteComponent

    },
   

  /*{path: 'activites', 
  loadComponent: () => import('./activite/activite.component').then(m => m.ActivitiesComponent) 
  
},*/

    {path:'blog',
       component: BlogComponent

    },
];
