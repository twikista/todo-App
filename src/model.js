class Model {
  constructor() {
    this.projects = {
      inbox: [
        { id: "inbox001", title: "go shopping", complete: false },
        { id: "inbox002", title: "go cycling", complete: true },
      ],
      work: [
        { id: "work001", title: "go for meeting", complete: false },
        { id: "work002", title: "submit sales reprot", complete: false },
      ],
    };
  }
  createProject(project) {
    console.log(project);
    for (let key in this.projects) {
      if (`${project}` in this.projects) {
        console.log(`${project} project already exist`);
        return;
      }
    }
    if (!project) {
      return;
    }

    this.projects[project] = [];
    pubsub.publish("updateDisplay", this.projects);
  }

  addTodo(receivedData) {
    const projectName = receivedData.activeProject;
    const srn =
      this.projects[projectName].length > 0
        ? this.projects[projectName][this.projects[projectName].length - 1].id +
          1
        : 1;
    console.log(srn);

    const todo = {
      id:
        this.projects[projectName].length > 0
          ? this.projects[projectName][this.projects[projectName].length - 1]
              .id + 1
          : 1,
      title: receivedData.todoTitle,
      complete: false,
    };
    this.projects[projectName].push(todo);
    const todos = this.projects[projectName];
    const data = { fileredProject: todos, proName: projectName };
    pubsub.publish("addedtodo", data);
  }

  removeTask(data) {
    const projectName = data.task;
    const id = data.taskId;
    this.projects[projectName] = this.projects[projectName].filter(
      (project) => project.id !== id
    );
    const sendData = {
      fileredProject: this.projects[projectName],
      proName: projectName,
    };
    pubsub.publish("task-removed", sendData);
  }

  showprojects() {
    for (let key in this.projects) {
      console.log(key);
    }
  }
}
