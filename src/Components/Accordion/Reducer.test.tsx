import {reducer, StateType} from "./Reducer";

test('collapsed should be false', () => {
    const state: StateType = {collapsed: true}
    const newState = reducer(state, {type: 'TOGGLE-COLLAPSED'})

    expect(newState.collapsed).toBe(false)
})