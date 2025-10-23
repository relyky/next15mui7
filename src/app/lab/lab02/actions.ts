"use server"

export async function getInitData() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return { message: "你好！這是從 Server Action 傳回的訊息，刻意延遲 2 秒。" };
}

export async function increment(previousState: number, formData: FormData) {
  return previousState + 1;
}

export async function client2SubmitAction(curState: number, formData: FormData) {
  const cmd = formData.get('cmd');
  const nextState = cmd === 'increase' ? curState + 1
    : cmd === 'decrease' ? curState - 1
      : curState;
  return nextState;
}

export async function client3SubmitAction(curState: IClient3State, formData: FormData) {
  //const atext = formData.get('atext');
  //const cmd = formData.get('cmd');
  const formValues = Object.fromEntries(formData?.entries() ?? new Map())
  console.log('client3SubmitAction', curState, formValues);

  // calc. new state
  const anum = formValues.cmd === 'increase' ? curState.anum + 1
    : formValues.cmd === 'decrease' ? curState.anum - 1
      : curState.anum;

  const nextState = <IClient3State>{
     ...curState
    , anum
    , atext: formValues.atext 
  }

  return nextState;
}
