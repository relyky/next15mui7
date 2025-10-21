"use server"

export async function getInitData() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return { message: "你好！這是從 Server Action 傳回的訊息，刻意延遲 2 秒。" };
}

export async function increment(previousState: number, formData: FormData) {
  return previousState + 1;
}

