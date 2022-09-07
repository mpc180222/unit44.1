const INITIAL_STATE = { emotion: 'ambivalent'}
const emotionReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'happy':
            return {...state, emotion: 'happy'};
        case 'sad':
            return {...state, emotion: 'sad'};
        case 'angry':
            return {...state, emotion: 'angry'};
        case 'confused':
            return {...state, emotion: 'confused'}
    }

}

const store = Redux.createStore(emotionReducer);