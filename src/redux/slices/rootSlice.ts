import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: 'DeadPool',
        description: "kickin ass and takin names",
        comics_appeared_in: 349,
        super_power: 'fast healing',
        preferred_weapon: 'blades and guns',
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload},
        chooseDescription: (state, action) => { state.description = action.payload},
        chooseComics: (state, action) => { state.comics_appeared_in = action.payload},
        chooseSuper: (state, action) => { state.super_power = action.payload},
        chooseWeapon: (state, action) => { state.preferred_weapon = action.payload},
    }
})

//Export Reducer
export const reducer = rootSlice.reducer;
export const {chooseName, chooseComics, chooseDescription, chooseSuper, chooseWeapon} = rootSlice.actions