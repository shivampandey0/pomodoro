import "./Modal.css";
export const Modal = ({
  show,
  handleClose,
  handleSubmit,
  changeHandler,
  task,
}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-container">
        <h2 className="modal-title">Add Task</h2>
        <section className="modal-info">
          <div className="input-group">
            <input
              id="title"
              className="input"
              type="text"
              value={task.title}
              onChange={(e) =>
                changeHandler((prev) => ({ ...prev, title: e.target.value }))
              }
              aria-label="title"
              placeholder="Add title"
            />
          </div>
          <div className="input-group">
            <textarea
              id="description"
              className="input textarea"
              type="text"
              value={task.description}
              onChange={(e) =>
                changeHandler((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
              aria-label="description"
              placeholder="Add Description"
            />
          </div>
          <div className="input-group">
            <input
              id="time"
              className="input"
              type="number"
              min={5}
              value={task.time}
              aria-label="title"
              onChange={(e) =>
                changeHandler((prev) => ({
                  ...prev,
                  time: e.target.value,
                }))
              }
              placeholder="Add Time in minutes"
            />
          </div>
        </section>
        <div className="modal-actions">
          <button onClick={handleSubmit} className="btn btn-primary">
            {`${task.id ? "Update" : "Add"}`}
          </button>
          <button onClick={handleClose} className="btn btn-outline">
            Close
          </button>
        </div>
      </section>
    </div>
  );
};
