interface State {
  task: Task;
  taskId: string;
  allTask: Array<Task>;
}

interface Task {
  task: string;
  description: string;
  date: string;
  taskId: string;
}

type Action =
  | { type: "ADD_TASK"; task: Task }
  | { type: "REMOVE_TASK"; taskId: string }
  | { type: "EDIT_TASK"; taskId: string }
  | { type: "GETALL_TASK"; allTask: Array<Task> };

const taskReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TASK":
      console.log(action.task);
      return {
        ...state,
        task: action.task,
      };
    case "REMOVE_TASK":
      return {
        ...state,
        taskId: action.taskId,
      };
    case "EDIT_TASK":
      return {
        ...state,
        taskId: action.taskId,
      };
    case "GETALL_TASK":
      return {
        ...state,
        allTask: action.allTask,
      };

    default:
      return {
        ...state,
      };
  }
};

const initTask: Task = { task: "", description: "", date: "", taskId: "" };

const initialState = {
  task: initTask,
  taskId: "",
  allTask: [initTask],
};

export { taskReducer, initialState, initTask };
export type Tasks = Task;
