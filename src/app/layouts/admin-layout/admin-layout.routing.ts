import { Routes } from '@angular/router';

import { AdminUsersComponent } from '../../admin-users/admin-users.component';
import { AdminGradesComponent } from '../../admin-grades/admin-grades.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'usuarios',   component: AdminUsersComponent },
    { path: 'grados',     component: AdminGradesComponent },
];
