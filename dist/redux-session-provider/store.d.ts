declare const store: import("@reduxjs/toolkit").EnhancedStore<import("redux").CombinedState<{
    store: any;
}>, import("redux").AnyAction, [import("redux-thunk").ThunkMiddleware<import("redux").CombinedState<{
    store: any;
}>, import("redux").AnyAction, undefined>]>;
export default store;
