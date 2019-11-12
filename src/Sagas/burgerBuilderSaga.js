import { takeLatest, call, put, fork } from "redux-saga/effects";
import { ServiceOrders, BurgerBuilderService } from "../service/";
import { orderConstanst, burgerBuilderConstants } from "../Constants";

function* addOrder(action) {
  try {
    // const answer =
    yield call(ServiceOrders.addOrder, action.payload.newOrder);
    yield put({
      type: orderConstanst.RETURN_HOME,
      payload: {
        addingOrder: false,
        purchasing: false
      }
    });
  } catch (error) {
    yield put({
      type: burgerBuilderConstants.ERROR,
      payload: {
        errorMessage: error.message
      }
    });
  }
}

function* watcherAddOrder() {
  yield takeLatest(orderConstanst.ADD_ORDER, addOrder);
}

function* getIngredients(action) {
  try {
    // const answer =
    const ingredients = yield call(BurgerBuilderService.getIngredients);
    yield put({
      type: burgerBuilderConstants.SET_INGREDIENTS,
      payload: {
        ingredients
      }
    });
  } catch (error) {
    yield put({
      type: burgerBuilderConstants.ERROR,
      payload: {
        errorMessage: error.message
      }
    });
  }
}

function* watcherGetIngredients() {
  yield takeLatest(burgerBuilderConstants.GET_INGREDIENTS, getIngredients);
}

export default function* burgerBuilderSaga() {
  yield fork(watcherAddOrder);
  yield fork(watcherGetIngredients);
}
