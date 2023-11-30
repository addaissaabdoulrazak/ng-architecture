//#region >> IMPORTANTE NOTICE

/*

Nb :    1- il est toute fois possible d'effectuer une transmission des dnnées via les actions || événement || des message si vous voulez, ou même 
            une intention de changement dans l'application, tout ces terme représente une action.
                // bien évidemment il faudrait ajouter les paramètres :
                    // -type ==> pour le types d'application
                    // -payload ==> pour les données a transmètre.

        2-  Nous avons également la possibilité de passer par les services (second approches)).
        
        
        Definition : Que veut dire dispatcher dans le contexte rxjs
        -----------
        In the context of NgRx, dispatching refers to the process of sending an action to the store.
            --> dans le contexte Ngrx dispatcher se refère au processus d'envoi || publier() || d'émission  d'action vers le store.
                -->généralement pour dispatcher une action on fait appel au store. 

        Definition n°2 : what about reducer (qu'en est t'il du reducer)
        --------------
        .le reducer est une fonction javascripts pur. Il s'agit d'une écouteur d'évenement || d'action.
            .le reducer est le seul qui dispose de la posssibilité de modifier le state en creant un nouveau.
                .le store est un objet javascript qui contient le state de l'application. Il est immutable.
                    .le reducer ne peutp pas modifier le state directement, étant donné immutable. Cependant il créer un nouveau state a partir de l'ancien (une copie).
                        .la creation du nouveau state se base sur les paramètres (payload) inclu au niveau des actions.
                            .le reducer écoute l'évenement || l'action créer un nouveau state a partir du payload de l'action dispatcher vers le store. 
                                .une action est constitue de deux type de paramètre :
                                     --> le payload
                                     --> le type de l'évenement
                                        
                                        .le rôle principale du reducer est d'effectuer des modification du state en prénant en paramètre une reference du state actuelle
                                             et l'action dispatch soit à partir du composant soit à partir du de l'effects.
                                                Le reducer prend les données de l'action(payload) et créer un nouveau state à partir de la << réference >> de l'ancienne state.
                                                
                                                remarque:  lorsque l'application démare le reducer est appelé avec un état indéfinie et une action non initialiser.
                                                ---------    le reducer doit fournir l'état initial dans ce cas,c'est-à-dire préciser le premier états ||  l'état avc lequel nous allons démarré    
                                
                                    .ce qui ouvre la possibilité de préserver l'historique des différents changement dans le state de l'application. 
       
*/
//#endregion


import {createReducer, on} from '@ngrx/store'

import {increment, decrement, reset} from  './counter.action'


export const initialState = 0;

const _counterReducer = createReducer(

    initialState,
    on(increment, state => state +1),
    on(decrement, state => state-1),
    on(reset, state=> 0 ),
);



export function counterReducer(state : any, action: any) {

    return _counterReducer(state,action);
}  