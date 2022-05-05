import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { chooseName, chooseDescription, chooseComics, chooseSuper, chooseWeapon } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';

interface SuperheroFormProps{
    id?: string;
    data?:{}
}

interface SuperheroState{
    name: string;
    description: string;
    comics_appeared_in: string;
    super_power:string;
    preferred_weapon: string
}

export const SuperheroForm = (props:SuperheroFormProps) =>{
    const dispatch = useDispatch();
    let {superheroData, getData} = useGetData();
    const store = useStore();

    const {register, handleSubmit } = useForm({})

    const onSubmit = async (data:any, event:any) =>{
        console.log(props.id)

        if (props.id!){
            await serverCalls.update(props.id!, data)
            console.log(`updated: ${data.name}\nID: ${props.id}`)
            window.location.reload();
            event.target.reset()
        } else{
            dispatch(chooseName(data.name))
            dispatch(chooseDescription(data.description))
            dispatch(chooseComics(data.comics_appeared_in))
            dispatch(chooseSuper(data.super_power))
            dispatch(chooseWeapon(data.preferred_weapon))

            await serverCalls.create(store.getState())
            window.location.reload();
            event.target.reset();

        }
    }
    return(
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Superhero Name</label>
                    <Input {...register('name')} name = 'name' placeholder = 'Name'/>
                    </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <Input {...register('description')} name="description" placeholder="origin story"/>
                </div>
                <div>
                    <label htmlFor="comics_appeared_in">Comic Appearances</label>
                    <Input {...register('comics_appeared_in')} name="comics_appeared_in" placeholder="200"/>
                </div>
                <div>
                    <label htmlFor="super_power">Super Power</label>
                    <Input {...register('super_power')} name="super_power" placeholder="Super Power"/>
                </div>
                <div>
                    <label htmlFor="preferred_weapon">Weapon</label>
                    <Input {...register('preferred_weapon')} name="preferred_weapon" placeholder="Weapon"/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}