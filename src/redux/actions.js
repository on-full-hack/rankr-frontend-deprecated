const types = {dummy: 'DUMMY'};

export function dummyFunction(dummy) {
  return {
    type: types.dummy,
    payload: dummy
  };
}
