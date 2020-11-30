import axios from 'axios'
import {
 POLLINGRESULTS_CREATE_REQUEST,
 POLLINGRESULTS_CREATE_SUCCESS,
 POLLINGRESULTS_CREATE_FAIL,
 
  POLLINGRESULTS_LIST_REQUEST,
  POLLINGRESULTS_LIST_SUCCESS,
  POLLINGRESULTS_LIST_FAIL,

  POLLINGRESULTS_LIST_MY_REQUEST,
  POLLINGRESULTS_LIST_MY_SUCCESS,
  POLLINGRESULTS_LIST_MY_FAIL,

} from '../constants/pollingResultConstants'


export const createResults = (result) => async (dispatch, getState) => {
    try {
      dispatch({
        type: POLLINGRESULTS_CREATE_REQUEST,
      })
      const {
        userLogin: { userInfo },
      } = getState()
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.post(`/api/results`, result, config)
  
      dispatch({
        type: POLLINGRESULTS_CREATE_SUCCESS,
        payload: data,
      })
    //   dispatch({
    //     type: USER_LOGIN_SUCCESS,
    //     payload: data,
    //   })
     // localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
      dispatch({
        type: POLLINGRESULTS_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

  
export const listResults = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: POLLINGRESULTS_LIST_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/results`, config)

    dispatch({
      type: POLLINGRESULTS_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: POLLINGRESULTS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}






export const listMyResults = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: POLLINGRESULTS_LIST_MY_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/myresults`, config)

    dispatch({
      type: POLLINGRESULTS_LIST_MY_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: POLLINGRESULTS_LIST_MY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

