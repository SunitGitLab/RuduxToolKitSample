import React, { useState } from "react";

function App() {
  /**
   * default required agenda details
   */
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

  // state
  const [submitted, setSubmitted] = useState(false);
  const [agendaList, setAgendaList] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [topic, setTopic] = useState("");
  const [topics, setTopics] = useState([]);

  const [showAddAgenda, setShowAddAgenda] = useState(true);
  const [showViewAgenda, setShowViewAgenda] = useState(false);

  // validations
  const isTitleValid = newTitle.trim() !== "";
  const isDescriptionValid = newDescription.trim() !== "";
  const isTopicValid = topic.trim() !== "";

  // add topic
  const handleAddTopic = () => {
    if (!isTopicValid) return;
    setTopics([...topics, topic]);
    setTopic("");
  };

  // submit agenda
  const handleSubmitAgenda = () => {
    setSubmitted(true);
    if (!isTitleValid || !isDescriptionValid || topics.length === 0) return;
    const newAgenda = {
      title: newTitle,
      description: newDescription,
      topics,
    };

    setAgendaList([...agendaList, newAgenda]);
    setNewTitle("");
    setNewDescription("");
    setTopics([]);
    setTopic("");

    setShowAddAgenda(false);
    setShowViewAgenda(true);
  };

  return (
    <div>
      <h1 className="mx-5 mb-5">Agenda Manager</h1>

      {/* Add Agenda UI */}
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

        {showAddAgenda && (
          <form>
            {/* Title */}
            <div className="my-3">
              <label className="form-label">Title</label>
              <input
                type="text"
                name="newTitle"
                placeholder="Enter the title"
                className="form-control"
                role="inputTitle"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
              <small className="text-danger" data-testid="invalidTitle">
                {submitted && !isTitleValid ? "Title is required" : ""}
              </small>
            </div>

            {/* Description */}
            <div className="my-3">
              <label className="form-label">Description</label>
              <input
                type="text"
                name="newDescription"
                placeholder="Enter the description"
                className="form-control"
                role="inputDescription"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
              />
              <small className="text-danger" data-testid="invalidDescription">
                {submitted && !isDescriptionValid
                  ? "Description is required"
                  : ""}
              </small>
            </div>

            {/* Topic */}
            <div className="my-3 w-50">
              <label className="form-label">Enter topic</label>
              <input
                type="text"
                name="newTopic"
                placeholder="Enter the topic"
                className="form-control"
                role="inputTopic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              />
              <small className="text-danger" data-testid="invalidTopic">
                {submitted && !isTopicValid ? "Topic is required" : ""}
              </small>
            </div>

            <button
              className="btn btn-success addAlign"
              role="addTopicBtn"
              onClick={handleAddTopic}
              disabled={!isTopicValid}
            >
              + Add Topic
            </button>

            {/* No topics */}
            {topics.length === 0 && (
              <div className="text-danger ml-2 mt-5" data-testid="noTopicsMsg">
                No Topics Added
              </div>
            )}

            {/* Topics List */}
            {topics.length > 0 && (
              <div className="card my-3">
                <div className="card-header">Added Topics</div>
                <div className="card-body">
                  <ul className="list-group">
                    {topics.map((t, i) => (
                      <li key={i} className="list-group-item" role="topicList">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card-footer">Refer the topics you added</div>
              </div>
            )}

            {/* Submit */}
            <button
              className="btn btn-success submitAlign"
              role="submitAgendaBtn"
              onClick={handleSubmitAgenda}
              disabled={
                !isTitleValid || !isDescriptionValid || topics.length === 0
              }
            >
              Submit Agenda
            </button>
          </form>
        )}
      </div>

      {/* View Agenda */}
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

        {showViewAgenda && (
          <div className="card my-3" role="cards">
            {agendaList.map((agenda, index) => (
              <div key={index} className="card my-3">
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
    </div>
  );
}

export default App;
