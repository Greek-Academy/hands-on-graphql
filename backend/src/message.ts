import crypto from "crypto";

type MessageInput = {
  content: string;
  author: string;
};

class Message {
  public content: string;
  public author: string;

  constructor(public readonly id: string, { content, author }: MessageInput) {
    this.id = id;
    this.content = content;
    this.author = author;
  }
}

const fakeDatabase: { [k: string]: MessageInput } = {};

/**
 * 取得
 */
type GetMessageArgs = { id: string };

export function getMessage({ id }: GetMessageArgs) {
  if (!fakeDatabase[id]) {
    throw new Error(`no message exists with id ${id}`);
  }
  return new Message(id, fakeDatabase[id]);
}

/**
 * 登録
 */
type CreateMessageArgs = { input: MessageInput };

export function createMessage({ input }: CreateMessageArgs) {
  const id = crypto.randomBytes(10).toString("hex");

  fakeDatabase[id] = input;
  return new Message(id, input);
}

/**
 * 更新
 */
type UpdateMessageArgs = {
  id: string;
  input: MessageInput;
};

export function updateMessage({ id, input }: UpdateMessageArgs) {
  if (!fakeDatabase[id]) {
    throw new Error(`no message exists with id ${id}`);
  }

  fakeDatabase[id] = input;
  return new Message(id, input);
}
