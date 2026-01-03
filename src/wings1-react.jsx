import React, { useState } from "react";

function App() {
  const defaultAgenda = [
    {
      title: "Angular",
      description: "Some description about the angular",
      topics: [
        "Introduction",
        "Typescript",
        "Why Angular?",
        "Understanding Versions",
        "Fundamentals",
      ],
    },
    {
      title: "Vue",
      description: "Some description about the vue",
      topics: [
        "Introduction",
        "Javascript",
        "Why Vue?",
        "Vue Bindings",
        "Component Interaction",
      ],
    },
  ];

  const [agendaList, setAgendaList] = useState(defaultAgenda);

  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [topic, setTopic] = useState("");
  const [topics, setTopics] = useState([]);

  const [showAddAgenda, setShowAddAgenda] = useState(true);
  const [showViewAgenda, setShowViewAgenda] = useState(false);

  /* VALIDATIONS (as expected by tests) */
  const isTitleValid = newTitle.trim() !== "";
  const isDescriptionValid = newDescription.trim() !== "";
  const isTopicValid = topic.trim() !== "";

  /* ADD TOPIC */
  const handleAddTopic = (e) => {
    e.preventDefault();
    if (!isTopicValid) return;

    setTopics([...topics, topic]);
    setTopic("");
  };

  /* SUBMIT AGENDA */
  const handleSubmitAgenda = (e) => {
    e.preventDefault();
    if (!isTitleValid || !isDescriptionValid || topics.length === 0) return;

    setAgendaList([
      ...agendaList,
      {
        title: newTitle,
        description: newDescription,
        topics,
      },
    ]);

    setNewTitle("");
    setNewDescription("");
    setTopic("");
    setTopics([]);
  };

  return (
    <div>
      <h1 className="mx-5 mb-5">Agenda Manager</h1>

      {/* ADD AGENDA */}
      {showAddAgenda && (
        <div className="container" role="addAgenda">
          <button
            className="btn btn-info"
            role="goToView"
            onClick={() => {
              setShowAddAgenda(false);
              setShowViewAgenda(true);
            }}
          >
            Click To View Agenda
          </button>

          <form>
            {/* TITLE */}
            <div className="my-3">
              <label className="form-label">Title</label>
              <input
                type="text"
                role="inputTitle"
                className="form-control"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
              <small data-testid="invalidTitle" className="text-danger">
                {!isTitleValid ? "Title is required" : ""}
              </small>
            </div>

            {/* DESCRIPTION */}
            <div className="my-3">
              <label className="form-label">Description</label>
              <input
                type="text"
                role="inputDescription"
                className="form-control"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
              />
              <small data-testid="invalidDescription" className="text-danger">
                {!isDescriptionValid ? "Description is required" : ""}
              </small>
            </div>

            {/* TOPIC */}
            <div className="my-3 w-50">
              <label className="form-label">Enter topic</label>
              <input
                type="text"
                role="inputTopic"
                className="form-control"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              />
              <small data-testid="invalidTopic" className="text-danger">
                {topics.length === 0 && !isTopicValid
                  ? "Topic is required"
                  : ""}
              </small>
            </div>

            <button
              className="btn btn-success"
              role="addTopicBtn"
              onClick={handleAddTopic}
              disabled={!isTopicValid}
            >
              + Add Topic
            </button>

            {/* NO TOPICS */}
            {topics.length === 0 && (
              <div data-testid="noTopicsMsg" className="text-danger mt-4">
                No Topics Added
              </div>
            )}

            {/* TOPICS LIST */}
            {topics.length > 0 && (
              <div className="card my-3">
                <div className="card-header">Added Topics</div>
                <div className="card-body">
                  <ul className="list-group">
                    {topics.map((t, i) => (
                      <li key={i} role="topicList" className="list-group-item">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card-footer">Refer the topics you added</div>
              </div>
            )}

            <button
              className="btn btn-success mt-3"
              role="submitAgendaBtn"
              onClick={handleSubmitAgenda}
              disabled={
                !isTitleValid || !isDescriptionValid || topics.length === 0
              }
            >
              Submit Agenda
            </button>
          </form>
        </div>
      )}

      {/* VIEW AGENDA */}
      {showViewAgenda && (
        <div className="container" role="viewAgenda">
          <button
            className="btn btn-info"
            role="goToAdd"
            onClick={() => {
              setShowAddAgenda(true);
              setShowViewAgenda(false);
            }}
          >
            Click To Add Agenda
          </button>

          {agendaList.map((agenda, index) => (
            <div className="card my-3" role="cards" key={index}>
              <div className="card-header">{agenda.title}</div>
              <div className="card-body">
                <ul className="list-group">
                  {agenda.topics.map((t, i) => (
                    <li key={i} className="list-group-item">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-footer">{agenda.description}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
