import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PbEditorComponent } from './views/pb-editor/pb-editor.component';

const routes: Routes = [
  { path: 'editor', component: PbEditorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
