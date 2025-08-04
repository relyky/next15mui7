"use server"

export async function getInitData() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return { message: "你好！這是從 Server Action 傳回的訊息，我已經延遲了 2 秒。" };
}
