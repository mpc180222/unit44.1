const h1 = document.querySelector('h1');
const happyBtn = document.querySelector('#happy');
const sadBtn = document.querySelector('#sad');
const angryBtn = document.querySelector('#angry');
const confusedBtn = document.querySelector('#confused');

happyBtn.addEventListener('click', (e) => {

    store.dispatch({ type: 'happy'});
    const state = store.getState();
    h1.innerText = state.emotion;
})

sadBtn.addEventListener('click', (e) => {

    store.dispatch({ type: 'sad'});
    const state = store.getState();
    h1.innerText = state.emotion;
})
angryBtn.addEventListener('click', (e) => {

    store.dispatch({ type: 'angry'});
    const state = store.getState();
    h1.innerText = state.emotion;
})
confusedBtn.addEventListener('click', (e) => {

    store.dispatch({ type: 'confused'});
    const state = store.getState();
    h1.innerText = state.emotion;
})