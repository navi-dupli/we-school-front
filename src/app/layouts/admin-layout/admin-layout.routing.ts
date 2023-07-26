import { Routes } from '@angular/router';

import { AdminUsersComponent } from '../../admin-users/admin-users.component';
import { AdminGradesComponent } from '../../admin-grades/admin-grades.component';
import {CreateUsersComponent} from '../../admin-users/create-users/create-users.component';
import {CreateGradeComponent} from '../../admin-grades/create-grade/create-grade.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'usuarios',   component: AdminUsersComponent },
    { path: 'crear-usuario', component: CreateUsersComponent },
    { path: 'editar-usuario/:id', component: CreateUsersComponent },
    { path: 'grados',     component: AdminGradesComponent },
    { path: 'crear-grado',     component: CreateGradeComponent },
];
