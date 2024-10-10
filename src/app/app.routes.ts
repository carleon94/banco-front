import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ListadoProductosComponent } from './components/listado-productos/listado-productos.component';

export const routes: Routes = [
    {
        path: '',
        component: ListadoProductosComponent
    }
];
