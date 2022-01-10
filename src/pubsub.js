class Pubsub {
  constructor() {
    this.subscribers = {};
  }

  subscribe(event, callback) {
    if (!this.subscribers[event]) {
      this.subscribers[event] = [];
    }
    this.subscribers[event].push(callback);
    console.log(`just subcribed to ${event}`);
    const callbackIndex = this.subscribers[event].length - 1;
    return {
      unsubscribe() {
        this.subscribers[event].splice(callbackIndex, 1);
      },
    };
  }

  publish(event, data) {
    if (!this.subscribers[event]) {
      return;
    }
    this.subscribers[event].forEach((callback) => {
      callback(data);
    });
    console.log(`just published ${event}`);
  }
}
export default Pubsub;
