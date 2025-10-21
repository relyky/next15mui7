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
  const atext = formData.get('atext');
  const cmd = formData.get('cmd');
  console.log('client3SubmitAction', curState, formData, { cmd, atext });

  const anum = cmd === 'increase' ? curState.anum + 1
    : cmd === 'decrease' ? curState.anum - 1
      : curState.anum;

  const nextState = <IClient3State>{ ...curState, anum, atext }
  return nextState;
}
