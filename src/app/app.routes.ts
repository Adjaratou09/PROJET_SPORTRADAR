import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';

export const routes: Routes = [
    { path :'',
        component: HomepageComponent
    },
    {
        path: '',
        component:HeaderComponent
    },
    {path:'Admin',
        component:AdminComponent

    },
    {path:'Connexion',
        component:LoginComponent

    },

];
