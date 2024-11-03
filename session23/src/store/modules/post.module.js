import { getAllPost } from "@/api/postApi";
import { SET_DATA, SET_ERROR, SET_LOADING } from "@/constants/mutationTypes";

const postModule = {
  // khỏi tạo các state của post module
  state: {
    loading: false,
    data: [],
    error: null,
  },

  // chứa các hàm đồng bộ để cập nhật tại state
  mutations: {
    [SET_LOADING](state, payload) {
      //câpj nhật lại giá trị cho loading
      state.loading = payload;
    },
    [SET_DATA](state, payload) {
      //cập nhật giá trị cho data
      state.data = payload;
    },

    [SET_ERROR](state, payload) {
      state.error = payload;
    },
  },

  // chứa các hàm bất đồng bộ: gọi API tương tác với dữ liệu
  actions: {
    async fetchData({ commit }) {
      commit(SET_LOADING, true);
      try {
        const response = await getAllPost();

        commit(SET_DATA, response.data);
      } catch (error) {
        commit(SET_ERROR, error);
      } finally {
        commit(SET_LOADING, false);
      }
    },
  },

  //
  getters: {
    //lấy ra tổng số bài viết
    countPost: (state) => state.data.length,
  },
};

export default postModule;
