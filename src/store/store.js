import { createStore } from 'vuex';

export default createStore({
    state: {
        filterData:{
            fromDate:'',
            toDate:'',
            fromTime:'',
            toTime:'',
            category:'',
            state:'',
            color:'', 
        }
    },
    getters: {
        getData(state){
            return state.filterData
        }
    },
    mutations: {
    setFromDate(state,value){
        state.filterData.fromDate = value;    },
    setToDate(state,value){
        state.filterData.toDate = value;
    
    },
    setFromTime(state,value){
        state.filterData.fromTime = value;
    
    },
    setToTime(state,value){
        state.filterData.toTime = value;
    
    },
    setCategory(state,value){
        state.filterData.category = value;
    
    },
    setState(state,value){
        state.filterData.state = value;
    },
    setColor(state,value){
state.filterData.color = value;
    }
    },
    actions: {
    
    }
});
