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
}
