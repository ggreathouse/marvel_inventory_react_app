let token = 'fb55025bb7ed06d4eae35341f429a584f3aeccf15ab1b96b';

export const serverCalls = {
    get: async() =>{
        const response = await fetch(`https://marvel-week6-project.herokuapp.com/api/characters`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }
        return await response.json()
    },
    
    create: async (data: any = {}) => {
        const response = await fetch(`https://marvel-week6-project.herokuapp.com/api/characters`,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error('Failed to create new data on server')
        }
        return await response.json()
    },

    update: async (id:string, data: any = {}) => {
        const response = await fetch(`https://marvel-week6-project.herokuapp.com/api/characters/${id}`,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error('Failed to create new data on server')
        }
    },
    delete: async (id:string) => {
        const response = await fetch(`https://marvel-week6-project.herokuapp.com/api/characters/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
            
        });
        
    }
}

