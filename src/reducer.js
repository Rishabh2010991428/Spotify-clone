// initially we dont have anything
export const initialState={
    user: null,
    playlist: [],
    playing: false,
    item: null, 
    // token: "BQBU_m6Ga8vooWMUcMSOfs-Rnmz7ijgzJmzCuCtQ7bSvOKCheduI2nVLPtswZ54zpKacOH393Iux9PpyNRnZhR-VxU8dZwWBTWMiSqr16Y7tRRZMZ1tLAw5WnySA67akP4RxzHVjHmJdl6CvUGAvH7QjKkGp3BzMtmi3R3N6aI_2UbMoZpeeU3bS6nuEoUTn3A0yOTKHDPqOdFtdPNAh",
};

const reducer = (state, action)=>{
    console.log(action);

    // Action ->type, [payload]

    switch(action.type){
        case 'SET_USER':
        return {
            ...state,
            user: action.user,
        };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            }
        default: 
            return state;
    }
}

export default reducer;