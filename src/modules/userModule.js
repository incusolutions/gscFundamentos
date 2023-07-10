const userModule = {
    namespaced: true, 
  
    state() {
      return {
        user: '',
        loading: false
      };
    },
  
    mutations: {
      setUser(state, user) {
        state.user = user;
      },
      setLoading(state, loading) {
        state.loading = loading;
      }
    },
  
    actions: {
      async fetchUser({ commit }) {
        commit('setLoading', true);
  
        try {
          // Simulación de una llamada asíncrona
          const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
          const user = await response.json();
          console.log('emilio' + JSON.stringify(response));
          console.log('emilio2' +  JSON.stringify(user));
  
          commit('setUser', user);
        } catch (error) {
          console.error(error);
        }
  
        commit('setLoading', false);
      }
    },
  
    getters: {
      getUser(state) {
        return state.user;
      },
      isLoading(state) {
        return state.loading;
      }
    }
  };
  
  export default userModule;