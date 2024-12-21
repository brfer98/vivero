import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactoComponent } from './contacto/contacto.component';
import { IntroduccionComponent } from './introduccion/introduccion.component';
import { TalleresComponent } from './talleres/talleres.component';
import { SuministrosComponent } from './suministros/suministros.component';
import { DecoracionComponent } from './decoracion/decoracion.component';
import { ConiferasComponent } from './coniferas/coniferas.component';
import { PalmaceasComponent } from './palmaceas/palmaceas.component';
import { ArbolesFrutalesComponent } from './arboles-frutales/arboles-frutales.component';
import { ArbolesFloralesComponent } from './arboles-florales/arboles-florales.component';
import { TemporadaComponent } from './temporada/temporada.component';
import { PlantasSecanoComponent } from './plantas-secano/plantas-secano.component';
import { PlantasAcuaticasComponent } from './plantas-acuaticas/plantas-acuaticas.component';
import { PlantasTrepadorasComponent } from './plantas-trepadoras/plantas-trepadoras.component';
import { AdminComponent } from './admin/admin.component';
import { PlantasSemillasComponent } from './plantas-semillas/plantas-semillas.component';
import { HerramientasComponent } from './herramientas/herramientas.component';


export const routes: Routes = [

    {path: 'header', component:  HeaderComponent},
    {path: 'footer', component:  FooterComponent},
    {path: 'contacto', component:  ContactoComponent},
    {path: '', component: IntroduccionComponent},
    {path: 'talleres', component:  TalleresComponent},
    {path: 'suministros', component:  SuministrosComponent},
    {path: 'decoracion', component:  DecoracionComponent},
    {path: 'coniferas', component:  ConiferasComponent},
    {path: 'palmaceas', component:  PalmaceasComponent},
    {path: 'arboles-frutales', component:  ArbolesFrutalesComponent},
    {path: 'arboles-florales', component:  ArbolesFloralesComponent},
    {path: 'temporada', component:  TemporadaComponent},
    {path: 'plantas_secano', component:  PlantasSecanoComponent},
    {path: 'plantas_acuaticas', component:  PlantasAcuaticasComponent},
    {path: 'plantas_trepadoras', component: PlantasTrepadorasComponent},
    {path: 'plantas_semillas', component: PlantasSemillasComponent},
    {path: 'herramientas', component: HerramientasComponent},
    {path: 'admin', component: AdminComponent}

];