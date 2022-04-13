import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CabinetRoutingModule } from './cabinet-routing.module';
import { CabinetComponent } from './cabinet.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

// Services
import { AuthService } from '@app/services/auth.service';

@NgModule({
  declarations: [CabinetComponent, TopbarComponent, SidebarComponent],
  imports: [
    CommonModule,
    CabinetRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [AuthService],
})
export class CabinetModule {}
