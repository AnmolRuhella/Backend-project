import moongose from "mongoose";

const subTodoSchema = new moongose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: moongose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { tmiestamps: true },
);

export const SubTodo = moongose.model("SubTodo", subTodoSchema);
