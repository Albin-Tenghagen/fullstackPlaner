function ActivityFormModal({ addActivity, closeModal }) {
  const handleSubmitActivity = (event) => {
    event.preventDefault();
    const newActivity = {
      id: Date.now(),
      activity: event.target.activity.value,
      specificLocation: event.target.specificLocation.value,
      date: event.target.date.value,
      description: event.target.description.value,
    };
    addActivity(newActivity);
    event.target.reset();
  };

  return (
    <section className="aFModal">
      <div className="aFModal-backdrop" onClick={closeModal}></div>
      <div className="aFModal-content">
        <h2 className="aFModal-title">Fill in trip details</h2>
        <button className="aFModal-closeButton" onClick={closeModal}>
          X
        </button>
        <form className="activityForm" onSubmit={handleSubmitActivity}>
          <input
            name="activity"
            type="text"
            placeholder="Enter activity..."
            required
          />
          <input
            name="specificLocation"
            type="text"
            placeholder="Specific location..."
            required
          />
          <input name="date" type="date" required />
          <input
            name="description"
            type="text"
            placeholder="Short description"
            required
          />
          <button
            onClick={closeModal}
            className="aFModal-addButton"
            type="submit"
          >
            Add
          </button>
          <button onClick={closeModal} className="AfModal-addLaterButton">
            Add later
          </button>
        </form>
      </div>
    </section>
  );
}

export default ActivityFormModal;
