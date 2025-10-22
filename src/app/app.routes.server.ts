import { RenderMode, ServerRoute } from '@angular/ssr';
import { Inicio } from './pages/inicio/inicio';
export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
