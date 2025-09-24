import React from "react";
import Score from "./Score";

export default function Learner({ learner }) {
  return (
    <div >
      <h2>{learner.name}</h2>
      <p>{learner.bio}</p>
      <h4>Scores:</h4>
      {learner.scores.map((s, idx) => (
        <Score key={idx} score={s} />
      ))}
    </div>
  );
}
